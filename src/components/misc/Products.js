import React, { Component } from 'react'
import { WithAuthConsumer } from '../context/AuthContext'
import Lateral from '../misc/Lateral'
import ProductCard from './ProductCard'

class Products extends Component {

    state = {
        products: this.props.currentUser.product
    }

    onClickDeleteProduct(product) {
        this.setState({
            products: this.state.products.filter(p => p.id !== product.id)
        })
    }

    render() {
        console.log(this.props.currentUser.product)
        return(
            <div className="EditContainer">

                <div className="LateralDiv">
                    <Lateral />
                </div>

                <div className='EditContainerContainer'>

                <div className='EditContainerContainerContainer'>

                    <div className="TuPerfilContainer">
                        <p className="tit">Tus Productos</p>
                        <p className="subtit">Aquí podrás ver y editar los productos que has subido</p>
                    </div>

                <div className="MyProducts">
                    <div className="target">
                        
                        {this.state.products ? this.state.products.map((product, index) => (
                            <ProductCard {...product} key= {index} 
                            onClickDeleteProduct = {() => this.onClickDeleteProduct(product)}
                            />
                            
                        )): 'Aún no tienes productos caballero'}
                    </div>
                   </div>
                </div>
            </div>
        </div>
        )
    }

}

export default WithAuthConsumer (Products)