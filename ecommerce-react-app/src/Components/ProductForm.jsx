import React from 'react'
import { addProduct } from '../Services/ProductService'
import { data } from 'react-router-dom'

//onAddProduct prop hai and runtime pe call hoga
function ProductForm(onAddProduct ) {
    //function to be called when form will be submited

    const submitHandler=(e)=>{
        e.preventDefault();
        addProduct({
        // postman value       input form value    
            productId:e.target.productId.value,
            productName:e.target.productName.value,
            productDescription:e.target.productDescription.value,
            productPrice:e.target.productPrice.value
        }).then(data=>{

            //to refresh the product list
            //onAddProduct prop me koi value aayegi and then submit karne pe vo function call hoga
            onAddProduct();
            return data;
        })
        //we are returning fetch from ProductService and usi ko hum yaha pe return kare hai
    }

    //===============================================
    return (
        //my matlab m:margin y:axis 
        <div className='container border border-primary border-1 p-3 my-3' >
            {/* form ke submit button pe click kiya to submitHandler function call hoga */}
            <form onSubmit={submitHandler}> 
                <h1 className='bg-primary p-3 text-white text-center'>Add Product</h1>
                {/* Product Id */}
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Product Id</label>
                    <input type="number" className="form-control" id="exampleInputEmail1" 
                        aria-describedby="emailHelp" name='productId'/>
                </div>
                {/* Product Name */}
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Product Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" 
                        aria-describedby="emailHelp" name='productName'/>
                </div>
                {/* Product Description */}
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Product Description</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" 
                        aria-describedby="emailHelp" name='productDescription'/>
                </div>
                {/* Product Price */}
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Product Price</label>
                    <input type="number" className="form-control" id="exampleInputEmail1" 
                        aria-describedby="emailHelp" name='productPrice'/>
                </div>
                {/* Button to submit form */}
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
    )
}

export default ProductForm
