import logo from './logo.svg';
import './App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import About from './Components/About';

const router=createBrowserRouter([
  {
      path:"/about",
      element:<About/>
  },
  {
    path:"/http://localhost:8080/users",
    element:<User/>
  }
])

function App() {
  return (
    <div className="App">
       <About/>
       <User/>
    </div>
  );
}

export default App;
