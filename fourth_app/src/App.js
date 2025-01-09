import logo from './logo.svg';
import './App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Contact from './Components/Contact';
import Courses from './Components/Courses';
import About from './Components/About';

const router=createBrowserRouter([
    {
      path:"/contact/:id",
      element:<Contact/>
    },
    {
      path:"/courses",
      element:<Courses/>
    },
    {
      path:"/about",
      element:<About/>
    }
])

function App() {
  return (
    <div className="App">
       <About/>
       <Contact/>
    </div>
  );
}

export default App;
