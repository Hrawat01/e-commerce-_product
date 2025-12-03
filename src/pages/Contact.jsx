import React, { useContext } from 'react'
import { ContextData } from '../contex/contex'
const Contact = () => {
  const {Theme} =useContext(ContextData)
  return (
    <div className={Theme}  style={{ height: "80vh" }}>
  Contact Pagesh1
 </div>
    
  )
}

export default Contact
