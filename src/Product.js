import React from 'react'
import "./product.css";
function Product({id,title,image,price,rating}) {
  return (
    <div className="product">
      <div className="product__info">
      <p>{title}</p>
      <p className="product__price">
        <small>Rs-</small>
        <strong>{ price}</strong>
      </p>
      <p className="product__rating">
        {
          Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))
        }
      </p>
      </div>
      
      <img src={image} alt="" className="product__image" />
      <button className="product__button">Add to Basket</button>
    </div>
  )
}

export default Product
