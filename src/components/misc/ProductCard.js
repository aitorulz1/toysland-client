import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ category, name, price, description, productPicture, id, createdAt, onClickDeleteProduct}) => (

        <div className="ProductListContainer">
                <div className="ProductListImage">
                        <img src={productPicture} alt="ProductList" />
                </div>
                <div className="ProductListData">
                        <div className="ProductListPrice">{price}€</div>
                        <div className="ProductListName">{name}</div>
                </div>

                <div className="ProductListData">
                        <div className="ProductListCategoryTitle">Categoría</div>
                        <div className="ProductListCategory"><Link to={`/categories/${category}`}>{category}</Link></div>
                </div>
                
                <div className="ProductListData">
                        <div className="ProductListCategoryTitle">Subido</div>
                        <div className="ProductListCreated">{createdAt}</div>
                </div>

                <div className="ProductListBoton">
                        <button className="ProductListBoton" onClick={onClickDeleteProduct}>X</button>
                </div>

                <div className="ProductListBoton">
                        <Link to={`/product/${id}/edit`}>Ver</Link>
                </div>
        </div>
)

export default ProductCard