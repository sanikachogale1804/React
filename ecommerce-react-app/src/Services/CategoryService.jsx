const API_LINK="http://localhost:8080/category"

export const getCategories=()=>{

    return fetch(API_LINK)
    .then(data=>data.json())
    .then(data=>data["_embedded"]["categories"])

}

//kisi product ko category me add karna hai
export const setCategory=(product_link,category_link)=>{

    return fetch(product_link,
        {method:"PUT",headers:{
            "Content-Type":"text/uri-list"
        },body:category_link})
        //yaha pe postman me bu status code deta tha(return me kuch nahi deta tha) is liye return karne ki jarurat nahi

}