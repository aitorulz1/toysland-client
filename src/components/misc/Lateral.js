import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { WithAuthConsumer } from '../context/AuthContext'
import Logout from '../../assets/images/menu/logout-button.png'
import Product from '../../assets/images/menu/product.png'
import Star from '../../assets/images/menu/star.png'
import Message from '../../assets/images/menu/message.png'


 
class Lateral extends Component {
    
constructor(props){
    super(props)
    this.state = {
        data: {
            profilePicture: this.props.currentUser.profilePicture,
        }
    }

}
   handleLogout = () => {
       this.props.logout()
        .then(result => {
            return <Redirect to="/"/>
        })
       
   }

    render(){
        console.log(this.props)
            return (
                    
                        <div className="LateralContainer">

                            <div className="Lateral">
                                <ul>
                                    <Link to= "/profile">
                                        <li>
                                            <img className="smile" src= {this.props.currentUser.profilePicture} alt="" />
                                            <p>Perfil</p>
                                    </li>
                                    </Link>
                                    <Link to= "/products">
                                    <li>
                                        <img className="product" src= {Product} alt="" />
                                        <p>Productos</p>
                                    </li>
                                    </Link>
                                    <Link to= "/likes">
                                    <li>
                                        <img className="star" src= {Star} alt="" />
                                        <p>Favoritos</p>
                                    </li>
                                    </Link>
                                    <Link to= "/chats">
                                    <li>
                                        <img className="envelope" src= {Message} alt="" />
                                        <p>Mensajes</p>
                                    </li>
                                    </Link>
                                    <li>                                                                         
                                        <button className="BtnLogOutLateral" onClick={() => this.props.logout  ()}><img className="LateralLogout" src= {Logout} alt="" />Out</button>                                           
                                    </li>
                                </ul>
                            </div>
                        </div>           
                
                
                    )
                }


}

export default WithAuthConsumer (Lateral)