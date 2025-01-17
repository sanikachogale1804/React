import React from 'react'
import { getProductById } from '../../Services/ProductService'

//product_link product.jsx se milegi
function ProductItem({productName,productDiscription,productPrice,product_link}) {
  const onSelectUpdate=async (link)=>{
     //is function deni hai link
     //console.log(link)
     let product=await getProductById(link)  //yaha pe product milega jo update hua hai
  }
  return (
    <div>
      <div className="col">
      <div class="card w-30">
        <div class="card-body">
          <h5 class="card-title">{productName}</h5>
          <p class="card-text">{productDiscription}</p>
          <p class="card-text">Price: {productPrice}</p>
          {/* update button */}
          <button className='btn btn-success'
          onClick={()=>{onSelectUpdate(product_link)}}>
            Update</button>
          {/* delete button */}
          <button className='btn btn-danger'>Delete</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default ProductItem
