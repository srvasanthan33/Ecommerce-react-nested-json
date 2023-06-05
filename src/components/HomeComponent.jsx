import React from 'react'
import './HomeComponent.css'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
import products from '../Products/products'
function HomeComponent() {

  for (let i in products)
  {
    for (let j in products[i].categoryItems)
    {
      for (let k in products[i].categoryItems[j].subCategoryItems)
      {
        console.log(products[i].categoryItems[j].subCategoryItems[k].productName)
      }
    }
  }

  // console.log(products[0].categoryItems[0].subCategoryItems[0].productName)
  
  return (
    <div>
        <h1>Products</h1>
        {products.map(category => {
         return category.categoryItems.map(sub =>{
            return sub.subCategoryItems.map(pdt => {
              return <Clothing id = {pdt.productId} name = {pdt.productName} price = {pdt.price} type = {category.categoryName}/>
            })
          })
        })}
    </div>
  )
}

function Clothing(props) {
  return (
    <>
    <div className="item" id ={props.id} key = {props.id} >
      <h2> {props.name} </h2>
      <h2> {props.price} Rs. </h2>
      <h3> <b>Type: </b> {props.type} </h3>
      <button onClick ={ () => alert(`${props.name} brought`)}><h2>Buy</h2></button>
    </div>
    </>
  )
    
  
}

export default HomeComponent