import React, {Component} from 'react'
import { WithAuthConsumer } from '../context/AuthContext'
import ToyslandService from '../../services/ToyslandService'
import SingleCategoryCard from './SingleCategoryCard'
import Controls from '../src/Controls'



class SingleCategory extends Component {

    state= {
        products: [] // Pinto un array de productos vacío
    }

    onClickOrderByPrice = () => {
        this.setState({
            products: this.state.products.sort((a, b) => a.price - b.price) 
        })
        
        }


    onClickOrderByExpensive = () => {
        this.setState({
            products: this.state.products.sort((a, b) => b.price - a.price) 
        })
        
    }

    findProducts = () => {
        ToyslandService.getAll().then(products => { // Cojo TODOS los productos
            this.setState({products: products.filter(product => product.category === this.props.match.params.category)}) // Productos: coge los productos de la categoría que machean con la categoría de la url                    
        })
    }

    componentDidMount() {
        this.findProducts()
    }



    render() { // Aquí hago un map con this.state.products
        
        return(

           
            <div className="CategoryContainer">

                <div className="ButtonArea">
                    <div className="ButtonAreaContainer">
                    <Controls
                        onClickDeleteProduct = {this.onClickOrderByPrice}
                        onClickOrderByExpensive = {this.onClickOrderByExpensive}
                        sortedBy={this.state.sortedBy}
                    />
                     </div>
                </div>

                <div className="title-container">
                    <div className="title-category">{this.state.products.category}</div>
                    <div className="subtitle-category"></div>
                </div>
                
                    <div className="CategoryContainerContainer">
                        {this.state.products.length && this.state.products.map((products, index) => (
                            <SingleCategoryCard {...products} key= {index} />
                        ))}             
                    </div>
            </div>
        )
    }
        
}

export default WithAuthConsumer (SingleCategory)