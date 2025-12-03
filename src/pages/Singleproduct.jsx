import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { faHeart,faStar } from '@fortawesome/free-solid-svg-icons';
import { useNavigate} from "react-router-dom";
import { ContextData } from "../contex/contex";
import Cart from "./Cart";


const Singleproduct = (props) => {
 const {count,Cart,setcount,addToCart,subtract}= useContext(ContextData)
    const nav = useNavigate()
  const { prod } = useParams();
  const [data, setdata] = useState([]);

  const singleData = async () => {
    const res = await fetch(`https://fakestoreapi.com/products/${prod}`);
    const Udata = await res.json();
    setdata(Udata);
  };
  useEffect(() => {
    singleData();
  }, []);

  const Quali = Cart.find(elem => elem.id==data.id)
const [Color, setColor] = useState('star')
// if (data.rating.rate==1) {
//   setColor('one')
// }
//   console.log(prod);
  return (
    <div >

      <h2 className="category">{data.category}</h2>
      <div className="singleData">
        <div>
          <img className="singleImage" src={data.image} alt="" />
        </div>
        <div className="content">
          <h2>
            Rating : {data.rating?.rate ? data.rating.rate : "loading..."}, 
            <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} /> 
            Count
            : {data.rating?.count ? data.rating.count : "loading.."}
          </h2>
          <h3>{data.title}</h3>
          <p className="description">{data.description}</p>
          <p className="price">Price :<FontAwesomeIcon icon={faDollarSign} />{data.price}</p>
          
{/* star */}
<div className="star">
  
      <FontAwesomeIcon className={Color} icon={faStar} />
      <FontAwesomeIcon className={Color} icon={faStar} />
      <FontAwesomeIcon className={Color} icon={faStar} />
      <FontAwesomeIcon className={Color} icon={faStar} />
<FontAwesomeIcon className={Color} icon={faStar}  />
</div>


{/* cart  */}

    
<h2 className="cart"
onClick={()=>{
  
}}>
  <FontAwesomeIcon icon={faShoppingCart} onClick={()=>{
addToCart(data)
 setcount(count+1)
nav('/')
  }
  } />Add to Cart


<button onClick={()=>{
              setcount(count+1)
              addToCart(data)
            }}>+</button>

{Quali?Quali.quantity:0}

 <button onClick={()=>{
             if (Quali.quantity>0) {
              setcount(count-1)
              subtract(data)
            }
            }
            }>-</button>
            


   </h2>
        </div>
      </div>
    </div>
  );
};

export default Singleproduct;
