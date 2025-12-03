import React, { useContext, useState } from "react";
import { ContextData } from "../contex/contex";

const Carts = () => {
  const { Cart, Theme ,addToCart,setcount,count,subtract} = useContext(ContextData);
//  const [add, setadd] = useState(1)

  console.log(Cart);
  return (
    <div>
      <div className={Theme}>
        {Cart.map((el, idx) => (
          <div key={idx} className="CartChild">
            <img src={el.image} alt="" />
            <div>{el.title}</div>
            <div>$ {parseFloat(el.price*el.quantity).toFixed(2)}</div>
            <div>
            
            <button onClick={()=>{
              setcount(count+1)
              addToCart(el)
            }}>+</button>  {el.quantity} 

            <button onClick={()=>{
              setcount(count-1)
              subtract(el)
            }
            }>-</button>
            </div>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default Carts;
