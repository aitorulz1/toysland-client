import React, { Component } from 'react'
import ToyslandService from '../../services/ToyslandService'
import { Link, Redirect } from 'react-router-dom'
import { WithAuthConsumer } from '../context/AuthContext'

class Login extends Component {

    state = {
        data: {
            email: '',
            password: ''
        },
        error: false,
        loading: false
    }

    handleChange = (event) => {
        const { name, value } = event.target

        this.setState({
            data: {
                ...this.state.data,
                [name]: value
            }
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        this.setState({ loading: true, error: false }, () => {
          ToyslandService.login({ ...this.state.data })
            .then(
              (user) => {
                this.props.setUser(user)
              },
              () => {
                this.setState({ error: true, loading: false })
              }
            )
        })
      }

        render() {
            const errorClassName = this.state.error ? 'is-invalid' : ''
            console.log(this.props)

            if(this.props.currentUser) {
                return <Redirect to="/profile" />
            }
        

            return (
            <div className="RegisterContainer">
                <div className="RegisterContainerContainer">
                <div className="Register">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">                

                            <input 
                                value={this.state.data.email}
                                onChange={this.handleChange}
                                autoComplete='off'
                                name="email"
                                type="email"
                                className={`form-control ${errorClassName}`}
                                id='email'
                                placeholder="Email"
                            />
                        </div>

                        <div className="form-group">                            

                            <input 
                                value={this.state.data.password}
                                onChange={this.handleChange}
                                name="password"
                                type="password"
                                className={`form-control ${errorClassName}`}
                                id='password'
                                placeholder="password"
                            />
                        </div>

                        <button
                            type="submit"
                            className='btn btn-toysland'
                            disabled={this.state.loading}
                        >
                            Log in

                        </button>

                        <Link to="/register" className="link-login">Register</Link>
                            <span className="line"></span>
                    </form>
                </div>
            </div>
            <div className="Space"></div>
            </div>
            )

        }       
    }




export default WithAuthConsumer(Login)