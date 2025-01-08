import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import NotFound from './Components/NotFound';

//is function me jo bhi hai usko hum variable me store karte hai
const router=createBrowserRouter([
  {
    path:"/about",   //tume jo url chahiye vo lhikh sakte hai
    element:<> <Navbar/> <About/> <Footer/></>
  },
  {
    path:"/contact/:id",
    element:<><Navbar/> <Contact/> <Footer/></>
  }, 
  {
    //  "" matlab home page
    path:"",
    element:<>
        <Navbar/>
        <Footer/>
        
    </>
  },
  {
    // "*" matlab all web pages
    //jo route banaya nahi hai vo sab "*" me aaynge
    path:"*",
    element:<NotFound/>
  }  
])


function App() {
  return (
    <div >
      {/* <Navbar/> */}

      {/* without this we can not work */}
      <RouterProvider router={router}/>   
    </div>
  );
}

export default App;
