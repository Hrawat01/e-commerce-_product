import React, { useContext } from 'react'
import { ContextData } from '../contex/contex'

const About = () => {
  const {Theme} =useContext(ContextData)
  return (
  <div className={Theme}  style={{ height: "80vh" }}>
      About Pages 
    </div>
  )
}

export default About
