import React from "react";

import './CheckoutProduct.css'

import {useStateValue} from "./StateProvider";

function CheckoutProduct({ id, title, image, rating, price }) {

const [{basket},dispatch] = useStateValue();

 const  removeFromBasket = ()=>{

  dispatch({
    type:"REMOVE_FROM_BASKET",
    id:id
  })

 }

  return (
    <div className="CheckoutProduct">
      <img src={image} alt="" className="CheckoutProduct__Image" />
      <div className="CheckoutProduct__Info">
        <p className="CheckoutProduct__Title">{title}</p>
        <p className="CheckoutProduct__Price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="CheckoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_) => {
              return <p>⭐</p>;
            })}
        </div>
        <button onClick={removeFromBasket}>Remove from basket</button>

      </div>
    </div>
  );
}

export default CheckoutProduct;
