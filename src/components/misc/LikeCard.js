import React from 'react'
import { Link } from 'react-router-dom'

const LikeCard = ({ product, onClickDeleteLike }) => (
    

    <div className="card-image-likes">
        <div className="card-image-container">
            <img src={product.productPicture} alt="" />
        </div>
        <div className="card-data-container">
            <div className="card-price">{product.price}€</div>
            <div className="card-name">{product.name}</div>            
            <div className="card-button-container-likes">
                <Link to={`/items/${product.id}`}>Ver</Link>          
            </div> 
            <div className="ProductListBoton">                
                        <button className="btn btn-danger" onClick={onClickDeleteLike}>X</button>
            </div>
        </div>
    </div>
)

export default LikeCard;