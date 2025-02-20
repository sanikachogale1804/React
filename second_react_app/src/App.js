import React from 'react';
import ChangeName from './Components/ChangeName';
// import { BrowserRouter as Router, Route, Routes, RouterProvider, createBrowserRouter } from 'react-router-dom';  // Import Routes instead of Switch
// import Home from './Components/Home';


// const routes=createBrowserRouter([
//   {
//     path:"NavigationBar",
//     element:<><Home/></>
//   }
  
//   ])

function App() {
  return (
    <div className="App">
      <ChangeName/>
    </div>
  );
}

export default App;
