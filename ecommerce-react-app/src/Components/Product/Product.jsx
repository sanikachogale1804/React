
import React, { useEffect, useState } from 'react'
import { getProducts } from '../../Services/ProductService'
import ProductItem from './ProductItem'
import ProductForm from '../ProductForm'

function Product() {
  //yaha pe ek variable leke products usme store karne hai
  let [products, setProducts] = useState([])

  //atleast once to vo dhikhe
  //baad me samjo sort kiya to vo vaha pe hi refresh karke dega
  useEffect(() => {
    //getProducts ne promise return kiya
    //data me apko products ka array mila
    getProducts().then(data => {
      setProducts(data);
    })

  }, [])
  return (
    //md-3 matlab par row mujhe kitne dhekhna hai
    <div >
      <div class="container">
        <div class="row">
          <div class="col">
            {/* Product Form: Start */}

            <ProductForm />
            {/* Product Form : end */}
          </div>
          <div class="col">
            {/* Displaying product: Start */}

            <div class="row row-cols-1 row-cols-md-2 g-2">
              {/* i am writing js code is liye {} ye liya */}
              {/* ek ek project ka object isme store hoga is liye map liya */}
              {products.map((p) => {
                return (
                  <ProductItem
                    // p.productName jo p ke sath likh rahi hu ye api se ara hai
                    //productName and ye props hai
                    productName={p.productName}
                    productDiscription={p.productDiscription}
                    productPrice={p.productPrice}
                  />
                )
              })}
              {/* Displaying product: End */}
            </div>
          </div>
          
        </div>
      </div>


    </div>
  )
}

export default Product
