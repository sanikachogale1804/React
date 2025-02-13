import logo from './logo.svg';
import './App.css';
// this function used to create routes
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Product from './Components/Product/Product';
import Navbar from './Components/Product/Navbar';
import SearchComponent from './Components/Product/SearchComponent';


//creating routs
//createBrowserRouter needs an array (array of objects(routes))
const routes=createBrowserRouter([
{
  path:"/products",
  element:<><Navbar/> <Product/></>
},
{
  path:"/",
  element:<Navbar/>
},
{
  path:"/searchProducts",
  element:<><SearchComponent/></>
}

])
function App() {
  return (
    <div >
       <RouterProvider router={routes}/>
    </div>
  );
}

export default App;
