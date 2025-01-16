import logo from './logo.svg';
import './App.css';
// this function used to create routes
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Product from './Components/Product/Product';
import Navbar from './Components/Product/Navbar';


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
