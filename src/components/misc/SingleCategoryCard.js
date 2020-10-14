import React from 'react'
import { Link } from 'react-router-dom'



const productsByCategory = ({category, productPicture, name, description, price, id }) => (
    <div className="card-image">
        <div className="card-image-container">
            <img src={productPicture} alt="" />
        </div>
        <div className="card-data-container">
            <div className="card-price">{price}€</div>
            <div className="card-name">{name}</div>
            <div className="card-description">{description}</div>  
            <div className="card-button-container">
                <Link to={`/items/${id}`}>Ver</Link>          
            </div> 
        </div>
    </div>
)

export default productsByCategory

