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