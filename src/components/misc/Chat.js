import React, { Component } from 'react'
import ToyslandService from '../../services/ToyslandService'
import Lateral from '../misc/Lateral'
import { WithAuthConsumer } from '../context/AuthContext'
import { Link } from 'react-router-dom'
import ChatMessage from '../misc/ChatMessage'


class Chat extends Component {

    constructor(props) {
        super(props)

        this.state = {
            message: '',
            messages: [],
            chat: {}
        }
    }


        componentDidMount() {

            ToyslandService.showChat(this.props.match.params.id) // Porqué esto? Por que la url matchae con el 
                .then(chat => {
                    console.log(chat)
                    this.setState({
                        chat: chat,
                        messages: chat.messages
                    })
            });

            ToyslandService.findMessages().then(messages => {
                this.setState({messages: messages.filter(message => message.user.id === this.props.match.params.id)})
            })
        }

        handleChange = (event) => {
            const {name, value} = event.target
    
            this.setState({                                
                    [name]: value                             
            })
        }
 
    

        createComment = (event) => {
            event.preventDefault()
            
        
            ToyslandService.createMessage(this.state.chat.id, {'message':this.state.message})
                .then((message) => {
                    this.setState({messages: [...this.state.messages, message]})
                    
                })
                .catch( error => {
                    console.log(error)
                })
        }

        render() {  
          
            return(
                <div className="EditContainer">

                    <div className="LateralDiv">
                        <Lateral />
                    </div>
                
                     <div className='EditContainerContainerChat'>



                        <div className="blockOne">
                            <div className="bandeja">
                                Bandeja de Entrada
                            </div>

                            <div className="productToShow">
                                    <div className="productToShowContainer">
                                        <div className="chatImageContainer">
                                            <img src={this.state.chat.product && this.state.chat.product.productPicture} alt="" />
                                        </div>
                                        <div className="chatInfoContainer">
                                            <div className="chatLinkContainer">
                                                <Link to={this.state.chat.product && this.state.chat.product.category}>{this.state.chat.product && this.state.chat.product.category}</Link>
                                            </div>
                                            <div className="chatNameContainer">
                                                {this.state.chat.product && this.state.chat.product.name}
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        
                        </div>

                        


                        <div className="blockTwo">

                            <div className="bandeja">

                            
                                <div className="productToShowContainerChat">
                                            <div className="chatImageContainerChat">
                                                <img src={this.state.chat.product && this.state.chat.product.user.profilePicture} alt="" />
                                            </div>
                                            <div className="chatInfoContainer">
                                                <div className="chatLinkContainer">
                                                    {this.state.chat.product && this.state.chat.product.user.username}
                                                </div>
                                                <div className="chatNameContainer">
                                                    {this.state.chat.product && this.state.chat.product.user.name}
                                                </div>
                                            </div>
                                </div>
                                
                            </div>


                            <div className="SalerMessage">
                                {this.state.messages.map((message, index) => (
                                    <ChatMessage {...message} key= {index} currentUser={this.props.currentUser}/>
                                ))}
                            </div>

                            <form className="SalerMessage" onSubmit={this.createComment}>
                                <div className="SendMessage">
                                    <div className="SendMessageContainer">
                                        <input type="text" class="chat-footer__form-input" value={this.state.message} name='message' placeholder="New message" onChange={this.handleChange} />
                                        <button type="submit">Enviar</button>
                                    </div>
                                </div>
                            </form>

                        </div>






                        <div className="blockThree">

                            <div className="productCard">

                            <div className="productToShowSummary">
                                    <div className="productToShowContainerSummary">
                                        <div className="productToShowContainerContainerSummary">
                                            <div className="chatImageContainerSummary">
                                                <img src={this.state.chat.product && this.state.chat.product.productPicture} alt="" />
                                            </div>
                                            <div className="chatInfoContainer">
                                                <div className="chatUserNameContainer">
                                                    {this.state.chat.product && this.state.chat.product.price}
                                                </div>
                                                <div className="chatNameContainer">
                                                    {this.state.chat.product && this.state.chat.product.name}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                                
                            </div>

                        </div>

                    </div>
                </div>
            )
        }



}

export default WithAuthConsumer  (Chat)


