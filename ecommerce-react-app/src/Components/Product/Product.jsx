
import React, { useEffect, useState } from 'react'
import { getProducts, getProductsHighToLow, getProductsLowToHigh, getProductsOrderByProductNameAsc, getProductsOrderByProductNameDesc } from '../../Services/ProductService'
import ProductItem from './ProductItem'
import ProductForm from '../ProductForm'
import { data } from 'react-router-dom'

function Product({queryFromNavbar}) {
  //yaha pe ek variable leke products usme store karne hai
  let [products, setProducts] = useState([])
  let [selectedProduct, setSelectedProduct] = useState(null);
  let [searchQuery, setSearchQuery] = useState("");
  //atleast once to vo dhikhe
  //baad me samjo sort kiya to vo vaha pe hi refresh karke dega
  useEffect(() => {
    //getProducts ne promise return kiya
    //data me apko products ka array mila
    getProducts().then(data => {
      setProducts(data);
      
    })
    
    //agar queryFromNavbar me kuch present hai to search query ko change karo
    if(queryFromNavbar)
    {
        setSearchQuery(queryFromNavbar)
    }

  }, [queryFromNavbar])

  // we are giving function product form ko dere hai to call
  //to refresh all product when you add product
  const refreshProduct = () => {
    getProducts().then(data => {
      setProducts(data)
    })
  }

  //to see selected product
  const handleSelectProduct = (selectedProduct) => {

    //procuctItem se jo product mil raha hai vo hum setSelectedProduct ko dere hai(value change karne ke liye)
    setSelectedProduct(selectedProduct);
    console.log(selectedProduct);
  }

  //to sort data

  const sort = async (choice) => {

    switch (choice) {
      case 1:
        setProducts(await getProductsLowToHigh());
        break;
      case 2:
        setProducts(await getProductsHighToLow());
        break;
      case 3:
        setProducts(await getProductsOrderByProductNameAsc());
        break;
      case 4:
        setProducts(await getProductsOrderByProductNameDesc());
        break;
    }
  }

  //======================================================

  return (
    //md-3 matlab par row mujhe kitne dhekhna hai
    <div >
      <div className="container">
        <div className="row">
          <div className="col">
            {/* Product Form: Start */}

            <ProductForm onAddProduct={refreshProduct}
              //propery(product form ki)   value(useState ki)
              selectedProduct={selectedProduct}
              //productForm tak selected product ko pohachana hai
              //setSelectedProduct ki value change karne ki capacity isme hai
              // prop                function  
              setSelectedProduct={setSelectedProduct} />
            {/* Product Form : end */}
          </div>
          <div className="col">
            {/* showing number of products start*/}
            <button type="button" className="btn btn-primary mb-3">
              Number Of Products <span className="badge bg-dark">{products.length}</span>
            </button>
            {/* showing number of products end */}

            {/* Sort Start */}

            <ul className="list-group mb-3">
              <li className="list-group-item" onClick={() => { sort(1) }}>Low to High</li>
              <li className="list-group-item" onClick={() => { sort(2) }}>High to Low</li>
              <li className="list-group-item" onClick={() => { sort(3) }}>A to Z</li>
              <li className="list-group-item" onClick={() => { sort(4) }}>Z to A</li>
            </ul>

            {/* Sort End */}
            <hr />
            {/* =========================Serach start============================*/}
            <div class="mb-3">
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
              onChange={(e)=>{setSearchQuery(e.target.value)}}/>
                <div id="emailHelp" class="form-text">Enter search query here.</div>
            </div>

            {/* =========================== serach end ================================== */}

            
            {/* Displaying product: Start */}

            <div className="row row-cols-1 row-cols-md-2 g-2">
              {/* i am writing js code is liye {} ye liya */}
              {/* ek ek project ka object isme store hoga is liye map liya */}
              {products.filter(p=>{
                
                return p.productName.toLowerCase().
                includes(searchQuery.toLowerCase())
              }).map((p) => {
                return (
                  <ProductItem
                    // p.productName jo p ke sath likh rahi hu ye api se ara hai
                    //productName and ye props hai
                    productName={p.productName}
                    productDescription={p.productDescription}
                    productPrice={p.productPrice}
                    product_link={p._links.self.href}
                    image={p._links.self.href}
                    //i am sending this function to productItem
                    onSelectProduct={handleSelectProduct}
                    //productForm ka prop hai
                    onDeleteProduct={refreshProduct}
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
