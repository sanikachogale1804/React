import React, { useEffect, useState } from 'react'
import { deleteProduct, getProductById } from '../../Services/ProductService'


//product_link product.jsx se milegi
//onSelectProduct matlab kisine product select kiya to kya karna hai
function ProductItem({ productName, productDescription, productPrice, product_link, onSelectProduct, onDeleteProduct, image }) {


  let [categories, setCategories] = useState([])
  let [searchQuery, setSearchQuery] = useState("")
  //getCategories me jo last return kiya vo yaha pe promise me wrap karke milega
  const fetchCategories = async () => {
    setCategories(await getCategories())
  }

  useEffect(() => {
    fetchCategories();
  }, [])
  // ================================================================
  const onSelectUpdate = async (link) => {
    //is function deni hai link
    //console.log(link)
    let product = await getProductById(link)  //yaha pe product milega jo update hua hai
    //product.jsx ke through mai ek function call karna chahti hu(matlab aage koi function milega and age mai usko call karungi)
    //product me argument pass kiya matlab product.jsx me hume product milega(jiske update button pe click kiya)
    onSelectProduct(product);
  }
  //=================================================

  //function to delete product
  //user ne jo bhi linke pass kiya vo product_id_link me pass hoga
  const onSelectDelete = async (product_id_link) => {

    //productItem se last me jo data mil raha hai usko wrap karna padega promise me
    const deletedProduct = await deleteProduct(product_id_link)
    onDeleteProduct();
  }

  //=================================================


  const handleCategory = (category_link, product_link) => {

    setCategory(product_link + "/category", category_link)
  }

  //====================================================
  return (
    <div>
      <div className="search-container mb-3">
        <input
          type="text"
          className="form-control"
          id="search-input"
          placeholder="Search here..."
          onChange={(e) => { setSearchQuery(e.target.value) }}
        />
      </div>

      {/* Categories Search */}
      <div className="search-container mb-3">
        <input
          type="text"
          className="form-control"
          id="search-input"
          placeholder="Search here..."
          onChange={(e)=>{setSearchQuery(e.target.value)}}
        />
      </div>

      {/*  Categories Search End*/}

      <div className="col">
        <div class="card w-30">
          <div class="card-body">
            <img src={`${image}/image`} alt="" />
            <h5 class="card-title">{productName}</h5>
            <p class="card-text">{productDescription}</p>
            <p class="card-text">Price: {productPrice}</p>


            {/* Showing Categories */}
            <div class="dropdown mb-3">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                Select Category
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                {
                  categories.map((category) => {
                    return (
                      <li><button class="dropdown-item" type="button"
                        onClick={() => { handleCategory(category._links.self.href, product_link) }}
                      >{category.categoryName}</button></li>
                    )
                  })
                }
              </ul>
            </div>


            {/* showing categories end======================== */}
            {/* update button */}
            <button className='btn btn-success'
              onClick={() => { onSelectUpdate(product_link) }}>
              Update</button>
            {/* delete button */}
            <button className='btn btn-danger'
              onClick={() => { onSelectDelete(product_link) }}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductItem
