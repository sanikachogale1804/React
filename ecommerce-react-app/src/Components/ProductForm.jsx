import React, { useEffect, useState } from 'react'
import { addProduct } from '../Services/ProductService'
import { data } from 'react-router-dom'

//onAddProduct prop hai and runtime pe call hoga
//selectedProduct product.jsx se milega
function ProductForm({onAddProduct,selectedProduct} ) {
    //function to be called when form will be submited

    //hum object banare hai jo postman me hai(ye data form me jara hai)
    let[product,setProduct]= useState({productId:"",productName:"",productDescription:"",productPrice:""});
    
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
    //selectedProduct ki value change hori hai to tume kya karna hai ye useeffect mai lhikhenge
    //update button pe click karne pe selectedProduct milega
    useEffect(()=>{
        //selectedProduct ki value change ki to product ki value bhi change hogi(ye setProduct karega)
        //product ki value vahi kar do jo selected product ki hai
        //agar selectedProduct notnull hai tabhi dikhega
        if(selectedProduct)
            setProduct(selectedProduct)
    },[selectedProduct])
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
                        aria-describedby="emailHelp" name='productId' 
                        //useState ke object hai ye(bracket ke andar ki key)
                        value={product.productId}/>
                </div>
                {/* Product Name */}
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Product Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" 
                        aria-describedby="emailHelp" name='productName'
                        value={product.productName}/>
                </div>
                {/* Product Description */}
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Product Description</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" 
                        aria-describedby="emailHelp" name='productDescription'
                        value={product.productDescription}/>
                </div>
                {/* Product Price */}
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Product Price</label>
                    <input type="number" className="form-control" id="exampleInputEmail1" 
                        aria-describedby="emailHelp" name='productPrice'
                        value={product.productPrice}/>
                </div>
                {/* Button to submit form */}
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
    )
}

export default ProductForm
