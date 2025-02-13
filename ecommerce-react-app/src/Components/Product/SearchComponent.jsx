import React, { useState } from 'react'
import Navbar from './Navbar'
import Product from './Product'

//navbar se data aayega serachcomponenet me and serachcomponenet data product from tak pahuchayega
function SearchComponent() {
    let[searchQuery,setSearchQuery]=useState("");
    //ye function navbar call keraga and then queryFromNavbar me navbar ka data aayega 
    const handleSearchQuery=(queryFromNavbar)=>{
        setSearchQuery(queryFromNavbar);
        console.log("New query from navbar::::::",searchQuery)
    }
  return (
    <div>
       <Navbar handleSearchQuery={handleSearchQuery}/>
       {/* data product ko bhej rahe hai ,searchquery me sab data hai*/}
       <Product queryFromNavbar={searchQuery}/>
    </div>
  )
}

export default SearchComponent
