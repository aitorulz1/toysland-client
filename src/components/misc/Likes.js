import React, { Component } from 'react'
import ToyslandService from '../../services/ToyslandService'
import Lateral from '../misc/Lateral'
import { WithAuthConsumer } from '../context/AuthContext'
import LikeCard from '../misc/LikeCard'


class Likes extends Component {

    constructor(props) {
        super(props)


        this.state = {
            likes: [],             
            }
    }

        onClickDeleteLike(like) {

            this.setState({
                likes: this.state.likes.filter(l => l._id !== like._id)
            })
        }


        componentDidMount() {
            ToyslandService.showLikes(this.props.currentUser.id)
                .then(likes => {
                    this.setState({likes: likes}, () => console.log(this.state.likes))                    
                })
        }

        render() {
            console.log('likes')
            return(
                <div className="EditContainer">

                    <div className="LateralDiv">
                        <Lateral />
                    </div>
                
                     <div className='EditContainerContainerLike'>

                         <div class="EditContainerContainerContainer">

                             <div className="TuPerfilContainer">
                                 <p className="tit">Producto Like</p>
                                 <p className="subtit">Estos son los Productos que te Gustan</p>
                             </div>

                        <div className="MyProducts">
                            <div className="target">

                                {this.state.likes.map((like, index) => (
                                    <LikeCard {...like} key={index}
                                        onClickDeleteLike = {() => this.onClickDeleteLike(like)}
                                    />
                                ))}
                                

                            </div>
                        </div>

                         </div>
                    </div>
                </div>
            )
        }



}

export default WithAuthConsumer (Likes)


