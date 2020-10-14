import React from 'react'

const Controls = ({ onClickLike }) => {
    return(
        <div>
            <div className="button-lovit"><button onClick={onClickLike}>Like</button></div>  
        </div>
    )
}

export default Controls