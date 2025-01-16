import React from 'react'

function ProductItem({productName,productDiscription,productPrice}) {
  return (
    <div>
      <div className="col">
      <div class="card w-30">
        <div class="card-body">
          <h5 class="card-title">{productName}</h5>
          <p class="card-text">{productDiscription}</p>
          <p class="card-text">Price: {productPrice}</p>
          <button className='btn btn-success'>Update</button>
          <button className='btn btn-danger'>Delete</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default ProductItem
