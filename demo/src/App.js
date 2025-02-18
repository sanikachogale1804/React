import logo from './logo.svg';
import './App.css';
import A from './Components/A';
import UseRefExample from './Components/UseRefExample';
import UseReducerExample from './Components/UseReducerExample';
import FormExample2 from './Components/FormExample2';

function App() {
  return (
    <div className="App">
      <h1>React</h1>
      <hr/>
      {/* <A/>
      <UseRefExample/> */}
      <UseReducerExample/>
      <br/>
      <FormExample2/>
    </div>
  );
}

export default App;
