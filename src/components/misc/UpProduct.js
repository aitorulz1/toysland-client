import React, { Component } from 'react'
import ToyslandService from '../../services/ToyslandService'
import { Redirect } from 'react-router-dom'
import { WithAuthConsumer } from '../context/AuthContext'

class UpProduct extends Component {

    state = {
        data: {
            category: 'Vintage',
            name: '',
            price: 0,
            description: '',
            productPicture: null
        },
        error: false,
        loading: false,
        success: false,
        categories: []
    }

    handleChange = (event) => {
        const {name, value, files} = event.target

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
            formData.append('category',this.state.data.category)
            formData.append('name',this.state.data.name)
            formData.append('price',this.state.data.price)
            formData.append('description',this.state.data.description)
            formData.append('productPicture',this.state.data.productPicture)
            formData.append('user', this.props.currentUser.id)

            

            this.setState({loading: true, error: false}, () => {
            ToyslandService.product(formData)
                .then((product) => {     
                    console.log('ENTRA')
                    this.props.setUser({ ...this.props.currentUser, product: [...this.props.currentUser.product, product]})
                    this.setState({success: true})
                })
                .catch(error => {
                    this.setState({ error: true, loading: false })
                })
            })
    }

    componentDidMount = () => {
        ToyslandService.categories()
            .then(categories => {
                this.setState({
                    categories: categories.map(c => c.category) // Las de state
                })
            }
        )
    }

    render() {
        const errorClassName = this.state.error ? 'is-invalid' : ''

        if(this.state.success) {
            return <Redirect to='/' />
        }

        return (
        <div className="RegisterContainer">
        <div className="RegisterContainerContainer">
            <div className="Register">
                <form onSubmit={this.handleSubmit}>

                    <div className="form-group">
                        <label htmlFor="category">Elige la Categoría</label>

                        <select id="category" name="category" form="carform" onChange={this.handleChange} > 
                            {this.state.categories.map((c, i) => {
                                return <option key={i} value={c}>{c}</option>
                            })}
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="name">Nombre</label>

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
                        <label htmlFor="price">Precio</label>

                        <input 
                            value={this.state.data.price}
                            onChange={this.handleChange}
                            autoComplete="off"
                            name="price"
                            type="number"
                            className={`form-control ${errorClassName}`}
                            id="price"
                            placeholder="Price"                       
                        />
                    </div>

                    {/* <div className="form-group">
                        <label htmlFor="coin">Moneda</label>

                        <select id="coin" name="coin" form="coin" onChange={this.handleChange}>
                            <option value="€">€</option>
                            <option value="$">$</option>
                            <option value="£">£</option>
                        </select>

                    </div> */}

                    <div className="form-group">
                        <label htmlFor="description">Descripción</label>

                        <input 
                            value={this.state.data.description}
                            onChange={this.handleChange}
                            autoComplete="off"
                            name="description"
                            type="text"
                            className={`form-control ${errorClassName}`}
                            id="description"
                            placeholder="Máx 140 caracteres"                       
                        />
                    </div>

                    
                    <div className='form-group'>
                                <label htmlFor='productPicture'>Imágenes</label>

                                <input multiple 
                                    onChange={this.handleChange}
                                    name='productPicture'
                                    type='file'
                                    className={`form-group ${errorClassName}`}
                                    id='productPicture'
                                />


                    </div>

                    <button
                        type='submit'
                        className='btn btn-toysland'
                        disabled={this.state.loading}
                    >
                        Subir Producto
                    </button>

                </form>
            </div>
            </div>
            <div className="Space"></div>
        </div>
        )
    }
}



export default WithAuthConsumer (UpProduct)
