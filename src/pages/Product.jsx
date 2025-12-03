import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { ContextData } from '../contex/contex'

const Product = () => {
 const {Theme} =useContext(ContextData) 
 return (
    <div>
      <div className={Theme} >
        <Link to={'/product/mens'}>Mens</Link>
        <Link to={'/product/woman'}>Women</Link>
      </div>
      <Outlet />
   {/* <h1>Product Page</h1> */}
   </div>
  )
}

export default Product
