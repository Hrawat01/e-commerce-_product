import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { ContextData } from '../contex/contex';


const Navigation = () => {
 const {count} = useContext(ContextData)

  return (
        <div className="nav">
        <h2>
          <FontAwesomeIcon icon={faBars} style={{ fontSize: "24px", color: "black" }} /> Website.cloth </h2>
        <div>
           <Link to={'/'} >Home</Link>
           <Link to={'/about'} >About</Link>
           <Link to={'/contact'} >Contact</Link>
           <Link to={'/product'} >Product</Link>

           <Link to={'/cart'} >
            <FontAwesomeIcon className='cart2'
      icon={faShoppingCart}  />

      <p className='cart-num'>+{count}</p>
           </Link>
          
        </div>
      </div>
  )
}

export default Navigation
