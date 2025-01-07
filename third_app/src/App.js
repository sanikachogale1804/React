import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';

//is function me jo bhi hai usko hum variable me store karte hai
const router=createBrowserRouter([
  {
    path:"/about",   //tume jo url chahiye vo lhikh sakte hai
    element:<About/>
  }
])

const router2=createBrowserRouter([
  {
    path:"/contact",
    element:<Contact/>
  }
])
function App() {
  return (
    <div >
      {/* <Navbar/> */}

      {/* without this we can not work */}
      <RouterProvider router={router}/> 
      <RouterProvider router={router2}/>  
    </div>
  );
}

export default App;
