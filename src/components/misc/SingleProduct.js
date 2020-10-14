import React, {Component} from 'react'
import ToyslandService from '../../services/ToyslandService'
import { WithAuthConsumer } from '../context/AuthContext'
import { Link, Redirect } from 'react-router-dom'


class SingleProduct extends Component {

    constructor(props) {
        super(props)

        this.state = {
            product: {},
            error: false,
            loading: false,
        }
    }


    componentDidMount() { 
        ToyslandService.getThisProduct(this.props.match.params.id)
            .then(product => {
                this.setState({product}, () => console.log(this.state.product))
            }, () =>     console.log(this.state.product)
            )
    }


    handleSubmit = (event) => {
        event.preventDefault() 

        this.setState({loading: true, error: false}, () =>
            ToyslandService.createLike(this.props.currentUser.id, this.state.product.id)
                .then((like) => { // Siempre devuelve lo que devuelve el back
                    console.log(like)
                })
                .catch(() => {
                    this.setState({error: true, loading: false})
                })
        )
    }

    handleChat = (event) => {
        event.preventDefault()

        this.setState({loading: true, error: false}, () =>
            ToyslandService.createChat(this.props.currentUser.id, this.state.product.user.id, this.state.product.id)
                .then((chat) => {
                    this.setState({ redirect: true })
                })
                .catch(() => {
                    this.setState({error: true, loading: false})
                })
        )
    }
    

    render() {    
        if (this.state.redirect) {
            return <Redirect to={`/chat/${this.props.match.params.id}`} />
        }
        return(
    
            
    <div className="SingleProductContainer">
        <div className="SingleProductContainerContainer">

            <div className="Preheader">
                <div className="Preheader-title">{this.state.product.name}</div>
                <div className="Preheader-cat"><Link to={`/categories/${this.state.product.category}`}>{this.state.product.category}</Link> </div>
            </div>

            <div className="SingleProductContainerContainerContainer">

                <div className="single-card-image">
                    <div className="header-container">
                        <div className="header-user-container">
                            <div className="user-pic"><img src={this.state.product.user && this.state.product.user.profilePicture} alt="" /></div>
                            <div className="user-username">{this.state.product.user && this.state.product.user.username}</div>
                            
                        </div>

                        <div className="buttons-container"> 

                                <div>
                                    <form onSubmit={this.handleChat}>
                                        <div className="button-message">
                                            <button type="submit">
                                                chat
                                            </button>
                                        </div>
                                    </form>
                                </div>
        
                                <div>
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="button-lovit">
                                            <button type="submit">
                                                Like
                                            </button>
                                        </div>  
                                    </form>
                                </div>   
                        
                        </div>
                    </div>
                    <div className="single-card-image-container">
                        <img src={this.state.product.productPicture} alt="" />
                    </div>
                    <div className="card-data-container">
                        <div className="single-card-price">{this.state.product.price}€</div>
                        <div className="single-card-name">{this.state.product.name}</div>
                        <div className="single-card-description">{this.state.product.description}</div>                                  
                        <div className="single-card-date">{this.state.product.createdAt}</div>                                  
                    </div>
                </div>
            
            </div>
        </div>
    </div>
        )
    }



}

export default WithAuthConsumer (SingleProduct)