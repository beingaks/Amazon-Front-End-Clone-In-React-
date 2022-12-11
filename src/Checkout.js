import React from "react";
import Header from "./Header";

import Subtotal from "./Subtotal";


import "./checkout.css";

import CheckoutProduct from "./CheckoutProduct";

import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <>
      <Header />
      <div className="checkout">
        <div className="checkout__left">
          <img
            className="checkout__ad"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          />

          {basket.length === 0 ? (
            <div>
              <h2>Your Basket Is Empty</h2>
              <p>
                You Have No Items In Your Basket. Click On Add To Basket On Ite
              </p>
            </div>
          ) : (
            <div>
              <h2>Your Shopping List Is</h2>

              {basket.map((item) => {
                return (
                  <CheckoutProduct
                    id={item.id}
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    rating={item.rating}
                  />
                );
              })}
            </div>
          )}
        </div>
        {basket.length > 0 && <div className="checkout__right">
              
              <Subtotal/>
              
          </div>}
      </div>
    </>
  );
}

export default Checkout;
