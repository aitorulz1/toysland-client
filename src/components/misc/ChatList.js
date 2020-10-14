import React, { Component } from 'react'
import ToyslandService from '../../services/ToyslandService'
import { WithAuthConsumer} from '../context/AuthContext'
import Lateral from '../misc/Lateral'
import ChatSingleRow from './ChatSingleRow'

class ChatList extends Component {

    constructor(props) {
    super(props)

        this.state = {
            chats: []
        }
    }

    componentDidMount() {
        ToyslandService.showAllMyChats(this.props.currentUser.id) 
            .then(chats => {
                this.setState({chats: chats}, () => console.log(this.state.chats))                    
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
                                

                                {this.state.chats ? this.state.chats.map((chat, index) => (
                                    <ChatSingleRow {...chat} key= {index}                                     
                                />
                            
                        )): 'Aún no tienes productos caballero'}
                                </div>
                      
                    
                    </div>

                    <div className="blockTwo"></div>
                    <div className="blockThree"></div>

                </div>
            </div>
        )
    }



}

export default WithAuthConsumer (ChatList)
