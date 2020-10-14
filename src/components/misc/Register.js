import React, { Component } from 'react'
import ToyslandService from '../../services/ToyslandService'
import { Link, Redirect} from 'react-router-dom'
import { WithAuthConsumer } from '../context/AuthContext'

class Register extends Component {

        state = {
            data: {
                name: '',
                email: '',
                username: '',
                password: '',
                profilePicture: ''
            },
            error: false,
            loading: false,
            success: false
        }

        handleChange = (event) => {
            const { name, value, files} = event.target

            this.setState({
                data: {
                    ...this.state.data,
                    [name] : files ? files[0] : value
                }
            })
        }

        handleSubmit = (event) => {
            event.preventDefault()            

            const formData = new FormData()
                formData.append('name',this.state.data.name)
                formData.append('username',this.state.data.username)
                formData.append('email',this.state.data.email)
                formData.append('password',this.state.data.password)
                formData.append('profilePicture',this.state.data.avatar)

            this.setState({loading: true, error: false}, () => {
                ToyslandService.register(formData)
                    .then(() => {
                        this.setState({ success: true })
                    })
                    .catch(() => {
                        this.setState({ error: true, loading: false })
                    })
            })
        }

            render() {
                const errorClassName = this.state.error ? 'is-invalid' : ''

                if(this.state.success) {
                    return <Redirect to='/login' />
                }
                
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
                                    value={this.state.data.name}
                                    onChange={this.handleChange}
                                    autoComplete="off"
                                    name="name"
                                    type="text"
                                    className={`form-control ${errorClassName}`}
                                    id="name"
                                    placeholder="Nombre"
                                />
                            </div>

                            <div className="form-group">

                                <input
                                    value={this.state.data.username}
                                    onChange={this.handleChange}
                                    autoComplete='off'
                                    name='username'
                                    type='text'
                                    className={`form-control ${errorClassName}`}
                                    id='username'
                                    placeholder='Username'                                
                                />

                            </div>

                            <div className='form-group'>

                                <input 
                                    value={this.state.data.email}
                                    onChange={this.handleChange}
                                    autoComplete='off'
                                    name='email'
                                    type='email'
                                    className={`form-control ${errorClassName}`}
                                    id='email'
                                    placeholder='Email'
                                />

                            </div>

                            <div className='form-group'>

                                <input
                                    value={this.state.data.password}
                                    onChange={this.handleChange}
                                    name='password'
                                    type='password'
                                    className={`form-control ${errorClassName}`}
                                    id='password'
                                    placeholder='Password'
                                />

                            </div>

                            <div className='form-group'>
                                <label htmlFor='avatar'>Avatar</label>

                                <input 
                                    onChange={this.handleChange}
                                    name='avatar'
                                    type='file'
                                    className={`form-group ${errorClassName}`}
                                    id='avatar'
                                />
                            </div>

                            <button
                                type='submit'
                                className='btn btn-toysland'
                                disabled={this.state.loading}
                            >
                                Registrarse
                            </button>

                            <Link to="/login" className="link-login">Log In</Link>
                            <span className="line"></span>

                        </form>
                    </div>
                    </div>
                </div> // Fin de RegisterContainer
                )
            }

}

export default WithAuthConsumer(Register)