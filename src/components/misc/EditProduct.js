import React, { Component } from 'react'
import { WithAuthConsumer } from '../context/AuthContext'
import ToyslandService from '../../services/ToyslandService'
import { Redirect } from 'react-router-dom'
import Lateral from '../misc/Lateral'

class EditProduct extends Component {

        constructor(props) {
            super(props)

            const product = props.currentUser.product.find(product => product.id === props.match.params.id) // encuentro el producto que tengo en el context

            this.state = {
                currentImage: product.productPicture,
                data: {
                    id: product.id,
                    category: product.category,
                    name: product.name,
                    price: product.price,
                    description: product.description,
                    productPicture: product.productPicture
                },
                success: false
            }
        }


        handleChange = (event) => {
            const {name, value, files} = event.target
            this.setState({

                data: {
                    ...this.state.data,
                    [name] : files ? files[0] : value
                }
            }, () => console.log('imagen', this.state.data.productPicture))
        }

        handleSubmit = (event) => {
            event.preventDefault()

            const formData = new FormData()
                formData.append('category', this.state.data.category)
                formData.append('name', this.state.data.name)
                formData.append('price', this.state.data.price)
                formData.append('description', this.state.data.description)
                formData.append('productPicture', this.state.data.productPicture)

            this.setState({loading: true, error: false}, () => {
                console.log(formData)
                ToyslandService.editProduct(formData, this.state.data.id)
                    .then((product) => {

                        this.props.setUser({
                            ...this.props.currentUser, 
                            product: [
                                ...this.props.currentUser.product.filter(e => e.id !== product.id), 
                                product
                            ]})
                        this.setState({success: true})
                    })
                    .catch(() => {
                        this.setState({error: true, loading: false})
                    })
            })
        }

        render() {    
            console.log(this.state.data)
            if(this.state.success) {
               
                return <Redirect to='/products' />
            }
            return (
                <div className="EditContainer">

                    <div className="LateralDiv">
                        <Lateral />
                    </div>

                    <div className='EditContainerContainer'>

                    <div className='EditContainerContainerContainer'>

                            <div className="TuPerfilContainer">
                                <p className="tit">Tu Producto</p>
                                <p className="subtit">Aquí podrás ver y editar los datos de tu producto</p>
                            </div>


                                                        {/* IMAGE */}


                            <div className="Edit-Image">
                                <form onSubmit={this.handleSubmit} encType="multipart/form-data">

                                    

                                    <div className="form-container">

                                        <div className="form-title">Imagen de perfil</div>

                                            <div className='form-group'>
                                                <label htmlFor="name">Imagen Principal</label>
                                                
                                            <div className="ProfileImageContainer">
                                                <img src={this.state.currentImage} alt="my prfile pic" />
                                            </div>

                                                <input 
                                                    onChange={this.handleChange}
                                                    name='productPicture'
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

                                    <div className="form-title">Mi Producto</div>

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
                                    <label htmlFor="price">Precio</label>

                                    <input 
                                        value={this.state.data.price}
                                        onChange={this.handleChange}
                                        autoComplete="off"
                                        name="price"
                                        type="number"
                                        className='form-control'
                                        id="price"
                                        placeholder="Price"                       
                                    />
                                </div>


                                <div className="form-group-info">
                                    <label htmlFor="description">Descripción</label>

                                    <input 
                                        value={this.state.data.description}
                                        onChange={this.handleChange}
                                        autoComplete="off"
                                        name="description"
                                        type="text"
                                        className='form-control'
                                        id="description"
                                        placeholder="Máx 140 caracteres"                       
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

export default WithAuthConsumer(EditProduct)