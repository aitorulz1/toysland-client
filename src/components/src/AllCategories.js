import React, { useState, useEffect } from 'react'
import Toysland  from '../../services/ToyslandService'
import Categories from '../src/Categories'
import ItemsCarousel from 'react-items-carousel'

const AllCategories = () => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const [categories, setCategories] = useState([])

    useEffect(() => {
        Toysland.categories()
        .then(categories => {
            setCategories(categories)
        })    
    }, [])

    return(
    <div>
        <div className="CategoriesContainer">
            <ItemsCarousel
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={7}
                leftChevron={<button className="arrow" >{'<'}</button>}
                rightChevron={<button className="arrow" >{'>'}</button>}
                outsideChevron
                chevronWidth={40}
            >
                {categories.map(category => (
                    <Categories {...category} />
                ))}
            </ItemsCarousel>
        </div>
    </div>
    )
}

export default AllCategories