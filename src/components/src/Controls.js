import React from 'react'

const Controls = ({ onClickDeleteProduct, onClickOrderByExpensive }) => {
    return(
        <div className="buttonsOrder" >
            <button className="" onClick={onClickDeleteProduct}>Ordenar Más Barato</button>
            <button className="" onClick={onClickOrderByExpensive}>Ordenar Más Caro</button>
        </div>
    )
}

export default Controls