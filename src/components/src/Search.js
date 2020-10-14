import React, { Component } from 'react'
import Products from '../misc/Products'
import ToyslandService from '../../services/ToyslandService'

class Search extends Component {

        state = {
            product: [],
            search: ''
        }

        findProducts = () => {
            ToyslandService.getAll().then(product => {
                this.setState({products: product.data})
            })
        }

        searchProducts = () => {
            ToyslandService.search(this.state.search).then(search => {
                this.setState({product: search.data})
            })
        }

        handleChange = (event) => {
            this.setState({
                search: event.target.value
            }, () => {
                this.searchProducts()
            })
        }

        componentDidMount() {
            this.findProducts()
        }

        render() {
            return(
            <div className="SearchContainer">
                <div className="SearchCont">

                    <input value={this.state.search} onChange={this.handleChange} placeholder="Buscar..." />

                    {this.state.product.map(p => <Products {...p} key={p.id} />)}
                </div>
            </div>
            )
        }
}

export default Search