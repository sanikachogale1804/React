import logo from './logo.svg';
import './App.css';
import ChangeName from './Components/ChangeName';
import AreaOfRectangle from './Components/AreaOfRectangle';
import Header from './Components/Header';
import ChangeYear from './Components/ChangeYear';

function App() {
  return (
    <div className="App">
      <ChangeYear/>
      <Header/>
      <ChangeName/>
      <AreaOfRectangle/>   
    </div>
  );
}

export default App;
