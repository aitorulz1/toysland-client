import React from 'react'




const ChatMessage = ({message, user, currentUser}) => {   
    console.log('Este es el message', user) 
return(

    <div className={` ${user === currentUser.id ? "cardMessageMe" : "cardMessage"}`}>
        <div className="card-data-container">           
            <div className="cardTextMessage">{message}</div>
        </div>
    </div>

)
}

export default ChatMessage

