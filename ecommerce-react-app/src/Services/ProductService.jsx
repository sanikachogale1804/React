//Logic

import { data } from "react-router-dom";

//method banate samay hi likh do export matlab import karne ke time hi export ho jayega(jab bhohot jyada function hai to)

//base URL api_link ke andar pest karna
//bar bar pura URL likhne ki jarurat nahi
const API_LINK="http://localhost:8080/products";

export const getProducts=()=>{
    //jo bhi return karoge uska return type promise hi rakho
    return fetch(API_LINK)
       .then(data=>data.json())  //whatever data we will get it will be converted into JSON
       .then(data=>data["_embedded"]["products"])
}

export const addProduct=(product)=>{
    return fetch(API_LINK,{method:"POST",headers:{
        "Content-Type":"application/json"
    },body:JSON.stringify(product)}).then(data=>data.json()).then(data=>data)//object product me store hora hai is liye product ko hi stringfy kardo
}

//to update products
export const getProductById=(product_link)=>{
    // getProductById id nahi de sakti kuynki postman ka Response link hai id nahi
    return fetch(product_link)
       .then(data=>data.json())
       .then(data=>data)
}

//updateProduct("products/1",{})
export const updateProduct=(product_id_link,product)=>{

    return fetch(product_id_link,{
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(product)
    }).then(data=>data.json().then(data=>data))
}

export const deleteProduct=(product_id_link)=>{
    return fetch(product_id_link,{method:"DELETE"})
    .then(data=>data.json())
    .then(data=>data)
}

export const getProductsLowToHigh=()=>{
    return fetch("http://localhost:8080/products/search/findByOrderByProductPriceAsc")
       .then(data=>data.json())  
       .then(data=>data["_embedded"]["products"])
}

export const getProductsHighToLow=()=>{
    return fetch("http://localhost:8080/products/search/findByOrderByProductPriceDesc")
       .then(data=>data.json())  
       .then(data=>data["_embedded"]["products"])
}

export const getProductsOrderByProductNameAsc=()=>{
    return fetch("http://localhost:8080/products/search/findByOrderByProductNameAsc")
       .then(data=>data.json())  
       .then(data=>data["_embedded"]["products"])
}

export const getProductsOrderByProductNameDesc=()=>{
    return fetch("http://localhost:8080/products/search/findByOrderByProductNameDesc")
       .then(data=>data.json())  
       .then(data=>data["_embedded"]["products"])
}

export const uploadProductImage=(product_link,file)=>{
    let  formdata=new FormData();
    formdata.append("productImage",file);
   
    return fetch(product_link+"/image",
    {
       method:"POST",
       body:formdata
    }).then(data=>data.text())
    .then(data=>data)
   }