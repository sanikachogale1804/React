import logo from './logo.svg';
import './App.css';
import ChangeName from './Components/ChangeName';
import AreaOfRectangle from './Components/AreaOfRectangle';
import Header from './Components/Header';


function App() {
  return (
    <div className="App">
      <Header/>
      <ChangeName/>
      <AreaOfRectangle/>   
    </div>
  );
}

export default App;
