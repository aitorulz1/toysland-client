import React from 'react'
import { Link } from 'react-router-dom'

const ChatSingleRow = ({users, product}) => (

<div className="singleChatCard">
<Link to={`/chat/${product.id}`}>
    <div className="productToShowContainer">
        <div className="chatImageContainerChatSingleRow">
            <img src={product.productPicture} alt="" />
        </div>
        <div className="chatInfoContainer">
            <div className="chatLinkContainer">
                <Link to={product.category}>{product.category}</Link>
            </div>
        </div>
        <div className="chatNameContainer">
            {product.name}
        </div> 
    </div>
</Link>
</div>    

)

export default ChatSingleRow