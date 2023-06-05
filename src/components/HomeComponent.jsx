import React from 'react'
import './HomeComponent.css'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
import products from '../Products/products'
function HomeComponent() {

  console.log(products)
  return (
    <div>
        Home
        
    </div>
  )
}

export default HomeComponent