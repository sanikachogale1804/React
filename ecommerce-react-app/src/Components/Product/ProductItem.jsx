import React from 'react'
import { getProductById } from '../../Services/ProductService'

//product_link product.jsx se milegi
//onSelectProduct matlab kisine product select kiya to kya karna hai
function ProductItem({ productName, productDiscription, productPrice, product_link, onSelectProduct }) {
  const onSelectUpdate = async (link) => {
    //is function deni hai link
    //console.log(link)
    let product = await getProductById(link)  //yaha pe product milega jo update hua hai
    //product.jsx ke through mai ek function call karna chahti hu(matlab aage koi function milega and age mai usko call karungi)
    //product me argument pass kiya matlab product.jsx me hume product milega(jiske update button pe click kiya)
    onSelectProduct(product);
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
              onClick={() => { onSelectUpdate(product_link) }}>
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
