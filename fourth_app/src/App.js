import logo from './logo.svg';
import './App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Contact from './Components/Contact';
import Courses from './Components/Courses';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import NotFound from './Components/NotFound';
import CourseItem from './Components/CourseItem';

const router=createBrowserRouter([
    {
      path:"/contact/:id",
      element:<> <Navbar/> <Contact/> </>
    },
    {
      path:"/courses",
      element:<><Navbar/> <Courses/> <Footer/></>,
      children:[
        {
          index:true,
          element:<>
          <CourseItem id={1} name={"web-desiging"} fees={20000}/>
          <CourseItem id={2} name={"SQL"} fees={30000}/>
          </>
          
        },
        {
          path:"web-designing",
          element:<CourseItem id={1} name={"web-desiging"} fees={20000}/>
        },
        {
          path:"sql",
          element:<CourseItem id={2} name={"SQL"} fees={30000}/>
        },
        {
          path:"Java",
          element:<CourseItem id={3} name={"Java"} fees={40000}/>
        }
      ]
    },
    {
      path:"/about",
      element:<><Navbar/><About/><Footer/></>
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
