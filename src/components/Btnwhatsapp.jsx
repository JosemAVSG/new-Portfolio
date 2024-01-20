import React from 'react'
import whatsapp from '../assets/imagenes/whatsapp (1).png'

export const Btnwhatsapp = () => {
  return (
    <a href="https://wa.me/+573042885833" target={"_blank"} className="btn-flotante"><img alt="whatsapp"src={whatsapp} style={{height:"60px", width:"60px"}}/></a>
  )
}
