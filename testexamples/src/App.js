import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Card from './Components/Card';

function App() {
  return (
    <div >
       <Navbar/>
       <h1 className='text-center'>Welcome User</h1>
       <div class="card-group">

       <Card title={"XYZ"} description={"dummy description"}/>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
       </div>
    </div>
  );
}

export default App;
