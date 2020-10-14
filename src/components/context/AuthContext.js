import React, { createContext } from 'react'
import ToyslandService from '../../services/ToyslandService'
import { Redirect } from 'react-router-dom';



const AuthContext = createContext();

export class AuthContextProvider extends React.Component {
    state={
        user: JSON.parse(localStorage.getItem('user'))
    }

    setUser = (user) => {
        localStorage.setItem('user', user ? JSON.stringify(user) : null)
        this.setState({user})
    }

    logout = () => {
        ToyslandService.logout()
            .then(() => {
                this.setUser()
                return <Redirect to="/"/>
            })
    }

    isAuthenticated = () => {
        return this.state.user && this.state.user.username;
      }

    render() {
    const value = {
      currentUser: this.state.user,
      setUser: this.setUser,
      logout: this.logout,
      isAuthenticated: this.isAuthenticated
    }

    return(
        <AuthContext.Provider value ={value}>
            {this.props.children}
        </AuthContext.Provider>
    )
    }



};

export const WithAuthConsumer = (WrappedComponent) => (props) => (
    <AuthContext.Consumer>
        {(authProps) => (<WrappedComponent {...props} {...authProps} />)}
    </AuthContext.Consumer>
)

export default AuthContext;