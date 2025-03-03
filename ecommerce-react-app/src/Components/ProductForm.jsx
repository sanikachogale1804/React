import React, { useEffect, useState } from 'react'
import { addProduct, updateProduct, uploadProductImage } from '../Services/ProductService'
import { data } from 'react-router-dom'

//onAddProduct prop hai and runtime pe call hoga
//selectedProduct product.jsx se milega
function ProductForm({ onAddProduct, selectedProduct, setSelectedProduct }) {
    //function to be called when form will be submited

    //hum object banare hai jo postman me hai(ye data form me jara hai)
    let [product, setProduct] = useState({ productId: "", productName: "", productDescription: "", productPrice: "" });

    const submitHandler = (e) => {
        e.preventDefault();
        addProduct({
            // postman value       input form value    
            productId: e.target.productId.value,
            productName: e.target.productName.value,
            productDescription: e.target.productDescription.value,
            productPrice: e.target.productPrice.value
        }).then(data => {
            uploadProductImage(data._links.self.href,e.target.productImage.files[0])
            .then(data=>data)
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
    useEffect(() => {
        //selectedProduct ki value change ki to product ki value bhi change hogi(ye setProduct karega)
        //product ki value vahi kar do jo selected product ki hai
        //agar selectedProduct notnull hai tabhi dikhega
        if (selectedProduct)
            setProduct(selectedProduct)
    }, [selectedProduct])

    //to change control in input box
    //because we want to contol input box
    const handleChange = (e) => {
        //target mai tabhi value aayegi jab value change hogi(handlechange chalega)
        console.log(e.target);
        let { name, value } = e.target;
        console.log(name + " " + value);
        //hume previous object dhekhna hai is liye setproduct liya 
        setProduct((prevProduct) => {

            console.log(prevProduct);
            //nayi chije kya chahiye product ke andar vo return karna hai
            return { ...prevProduct, [name]: value };
        })
    }

    //===========================================


    //agar maine update button pe click kiya and selected product is coming then updateHandler chalega 
    //first time submitHandler chalega and 
    //if selectedproduct present hai to update handler chalega
    //To Handle update
    const updateHandler = (e) => {
        e.preventDefault();
        // console.log("Update Handler called");
        //console.log(selectedProduct._links.self.href);
        updateProduct(selectedProduct._links.self.href, {
            //i am giving new object from here
            productName: e.target.productName.value,
            productDescription: e.target.productDescription.value,
            productPrice: e.target.productPrice.value
        }).then((data) => {
            onAddProduct();
            //value reset keli
            setProduct({ productId: "", productName: "", productDescription: "", productPrice: "" });
            setSelectedProduct(null);
        });


    }

    //===========================================

    return (
        //my matlab m:margin y:axis 
        <div className='container border border-primary border-1 p-3 my-3' >
            {/* form ke submit button pe click kiya to submitHandler function call hoga */}
            {/* if it has nonnull value updatehandler will be called and null value hai to submithandler */}
            <form onSubmit={selectedProduct ? updateHandler : submitHandler}>
                <h1 className='bg-primary p-3 text-white text-center'>Add Product</h1>
                {/* Product Id */}
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Product Id</label>
                    <input type="number" className="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" name='productId'
                        //useState ke object hai ye(bracket ke andar ki key)
                        value={product.productId} onChange={handleChange} />
                </div>
                {/* Product Name */}
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Product Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" name='productName'
                        value={product.productName} onChange={handleChange} />
                </div>
                {/* Product Description */}
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Product Description</label>
                    <input type="text" className="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" name='productDescription'
                        value={product.productDescription} onChange={handleChange} />
                </div>
                {/* Product Price */}
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Product Price</label>
                    <input type="number" className="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" name='productPrice'
                        value={product.productPrice} onChange={handleChange} />
                </div>
                {/* Product Image */}
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Product Image</label>i
                    {/* file array return karega and usme sub uploaded images add honge and hume jo file milegi vo 0 index pe hi hogi */}
                    <input type="file" className="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" name='productImage'
                        onChange={handleChange} />
                </div>
                {/* Button to submit form */}

                <button type="submit" className="btn btn-primary" >
                    {selectedProduct ? "Update" : "Submit"}
                </button>
            </form>
        </div>
    )
}

export default ProductForm
