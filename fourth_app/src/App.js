import logo from './logo.svg';
import './App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Contact from './Components/Contact';
import Courses from './Components/Courses';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import NotFound from './Components/NotFound';

const router=createBrowserRouter([
    {
      path:"/contact/:id",
      element:<> <Navbar/> <Contact/> </>
    },
    {
      path:"/courses",
      element:<Courses/>
    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/",
      element:<Navbar/>
    },
   { path:"/footer",
    element:<Footer/>
   },
   {
    path:"*",
    element:<NotFound/>
   }
])

function App() {
  return (
    <div className="App">
       
       <RouterProvider router={router}/>
    </div>
  );
}

export default App;
