import React from 'react'
import { Link } from 'react-router-dom' 

const Categories = ({ category, image }) => {

  return (
    
    <Link to={`/categories/${category}`}>
            <div className="categories" style={{ width: 150, height: 200, background: '#EEE' }}>
              <img src={image} alt="" />
              <p>{category}</p>
            </div>
      </Link>
    
    
  );
};

export default Categories