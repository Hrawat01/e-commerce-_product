import React, { createContext, useState } from 'react'

export const ContextData =createContext()

const Contex = ({children}) => {
  const [Theme, setTheme] = useState('dark')
  const [count,setcount] =useState(0)
  const [Cart, setCart] = useState([])


    const subtract = (el)=>{
   const exist = Cart.find((ec) => ec.id === el.id);

  if (exist) {
    if (exist.quantity === 1) {
     
      setCart(Cart.filter((exist) => exist.id !== el.id));
    } else {
      const updated = Cart.map((ec) =>
        ec.id === el.id ? { ...ec, quantity: ec.quantity - 1 } : ec
      );
      setCart(updated);
    }
   }
  }



  const addToCart=(e)=>{
    // console.log(e.id)
     const exist = Cart.find((el) => el.id === e.id);

     if (exist) {
    // update only the matched item
    const updated = Cart.map((el) =>
      el.id === e.id ? { ...el, quantity: el.quantity + 1 } : el
    );
    setCart(updated);

     }
   else{
      setCart([...Cart,{...e,quantity:1}])
      // setQuantity(Quantity+1)
    }
  
  }
  console.log(Cart)
  // console.log(addToCart)
  return (

    <ContextData.Provider value={{Theme,setTheme,count,setcount,Cart,addToCart,subtract}}>
        {children}
        </ContextData.Provider>
  
  )
}

export default Contex
