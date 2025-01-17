
import React, { useEffect, useState } from 'react'
import { getProducts } from '../../Services/ProductService'
import ProductItem from './ProductItem'
import ProductForm from '../ProductForm'
import { data } from 'react-router-dom'

function Product() {
  //yaha pe ek variable leke products usme store karne hai
  let [products, setProducts] = useState([])
  let[searchQuery,setSearchQuery]= useState("");
  let [selectedProduct,setSelectedProduct]=useState(null);
  //atleast once to vo dhikhe
  //baad me samjo sort kiya to vo vaha pe hi refresh karke dega
  useEffect(() => {
    //getProducts ne promise return kiya
    //data me apko products ka array mila
    getProducts().then(data => {
      setProducts(data);
    })

  }, [])

  // we are giving function product form ko dere hai to call
  //to refresh all product when you add product
  const refreshProduct=()=>{
    getProducts().then(data=>{
      setProducts(data)
    })
  }

  //to see selected product
  const handleSelectProduct=(selectedProduct)=>{

    //procuctItem se jo product mil raha hai vo hum setSelectedProduct ko dere hai(value change karne ke liye)
    setSelectedProduct(selectedProduct);
    console.log(selectedProduct);
  }

  
  return (
    //md-3 matlab par row mujhe kitne dhekhna hai
    <div >
      <div class="container">
        <div class="row">
          <div class="col">
            {/* Product Form: Start */}

            <ProductForm onAddProduct={refreshProduct}
//propery(product form ki)   value(useState ki)
             selectedProduct={selectedProduct}
             />
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
                    product_link={p._links.self.href}
                    //i am sending this function to productItem
                    onSelectProduct={handleSelectProduct}
                    //productForm ka prop hai
        
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
