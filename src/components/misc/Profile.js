import React, { Component } from 'react'
import ToyslandService from '../../services/ToyslandService'
import { Redirect } from 'react-router-dom'
import { WithAuthConsumer } from '../context/AuthContext'
import Lateral from '../misc/Lateral'

class Profile extends Component {
    state = {
        data: {
            name: this.props.currentUser.name,
            email: this.props.currentUser.email,
            username: this.props.currentUser.username,
            profilePicture: this.props.currentUser.profilePicture,
            cp: this.props.currentUser.cp,
            city: this.props.currentUser.city,
            country: this.props.currentUser.country,
            product: this.props.currentUser.product
        },
        error: false,
        loading: true,
        success: false
    }
    
    handleChange = (event) => {
        const {name, value, files} = event.target
        this.setState({
            
            data: {
                ...this.state.data,
                [name] : files ? files[0] : value
            }
        }, () => console.log(this.state))
    }

    handleSubmit = (event) => {
        event.preventDefault()

        const formData = new FormData()
            formData.append('name',this.state.data.name)
            formData.append('username',this.state.data.username)
            formData.append('email',this.state.data.email)
            formData.append('password',this.state.data.password)
            formData.append('profilePicture', this.state.data.profilePicture)
            formData.append('cp',this.state.data.cp)
            formData.append('city',this.state.data.city)
            formData.append('country',this.state.data.country)
            formData.append('product',this.state.data.product)

        this.setState({loading: true, error: false}, () => {
            ToyslandService.profile(formData, this.props.currentUser.id)
                    .then((user) => {
                        this.props.setUser(user)
                        this.setState({ success: true })
                    })
                    .catch(() => {
                        this.setState({ error: true, loading: false })
                    })
        })

    }

    render() {    
        if(this.state.success) {
           
            return <Redirect to='/' />
        }
        return (
        <div className="EditContainer">

            <div className="LateralDiv">
                <Lateral />
            </div>
            
            <div className='EditContainerContainer'>
            
            <div className='EditContainerContainerContainer'>

                <div className="TuPerfilContainer">
                    <p className="tit">Tu perfil</p>
                    <p className="subtit">Aquí podrás ver y editar los datos de tu perfil</p>
                </div>


                                            {/* IMAGE */}


                <div className="Edit-Image">
                    <form onSubmit={this.handleSubmit} encType="multipart/form-data">

                        

                        <div className="form-container">

                            <div className="form-title">Imagen de perfil</div>

                                <div className='form-group'>
                                    <label htmlFor="name">Imagen Principal</label>
                                    
                                <div className="ProfileImageContainer">
                                    <img src={this.props.currentUser.profilePicture} alt="my prfile pic" />
                                </div>

                                    <input 
                                        onChange={this.handleChange}
                                        name='profilePicture'
                                        type='file'
                                        className='form-group'
                                        id='avatar'
                                    />
                                </div>

                                <button
                                    type='submit'
                                    className='btn btn-toysland'
                                    disabled={this.state.loading}
                                >
                                    Guardar Cambios
                                </button>
                        </div>


                    </form>
                </div>                        
                
                <div className="Edit">
                    <form onSubmit={this.handleSubmit}>

                    <div className="form-container">     

                        <div className="form-title">Mi Info</div>

                                <div className="form-group-info">
                                    <label htmlFor="name">Nombre</label>

                                    <input
                                        value={this.state.data.name}
                                        onChange={this.handleChange}
                                        autoComplete="off"
                                        name="name"
                                        type="text"
                                        className='form-control'
                                        id="name"
                                        placeholder="Nombre"
                                    />
                                </div>

                                <div className="form-group-info">
                                    <label htmlFor="username">Username</label>

                                    <input
                                        value={this.state.data.username}
                                        onChange={this.handleChange}
                                        autoComplete='off'
                                        name='username'
                                        type='text'
                                        className='form-control'
                                        id='username'
                                        placeholder='Username'                                
                                    />

                                </div>

                                <div className='form-group-info'>
                                    <label htmlFor='email'>Email</label>

                                    <input 
                                        value={this.state.data.email}
                                        onChange={this.handleChange}
                                        autoComplete='off'
                                        name='email'
                                        type='email'
                                        className='form-control'
                                        id='email'
                                        placeholder='Email'
                                    />

                                </div>

                                <div className='form-group-info'>
                                    <label htmlFor='cp'>cp</label>

                                    <input 
                                        value={this.state.data.cp}
                                        onChange={this.handleChange}
                                        autoComplete='off'
                                        name='cp'
                                        type='cp'
                                        className='form-control'
                                        id='cp'
                                        placeholder='cp'
                                    />

                                </div>

                                <div className='form-group-info'>
                                    <label htmlFor='city'>city</label>

                                    <input 
                                        value={this.state.data.city}
                                        onChange={this.handleChange}
                                        autoComplete='off'
                                        name='city'
                                        type='city'
                                        className='form-control'
                                        id='city'
                                        placeholder='city'
                                    />

                                </div>

                                <div className='form-group-info'>
                                    <label htmlFor='country'>country</label>

                                    <input 
                                        value={this.state.data.country}
                                        onChange={this.handleChange}
                                        autoComplete='off'
                                        name='country'
                                        type='country'
                                        className='form-control'
                                        id='country'
                                        placeholder='country'
                                    />

                                </div>

                                    <button
                                        type='submit'
                                        className='btn btn-toysland'
                                        disabled={this.state.loading}
                                    >
                                        Guardar Cambios
                                    </button>

                         
                        </div>{/* //Fin de form-container */}



                    </form>
                    </div>
                </div>
            </div>
            <div className="Space"></div>
        </div>
        )
    }

}


export default WithAuthConsumer(Profile)