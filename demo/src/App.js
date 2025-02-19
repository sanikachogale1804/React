import logo from './logo.svg';
import './App.css';
import A from './Components/A';
import UseRefExample from './Components/UseRefExample';
import UseReducerExample from './Components/UseReducerExample';
import FormExample2 from './Components/FormExample2';
import FormExample3 from './Components/FormExample3';
import FormExample4 from './Components/FormExample4';
import useInternet from './Components/useInternet';
import Parent from './Components/Parent';

function App() {
  let internetStatus = useInternet();
  return (
    <div className="App">
      <h1>{internetStatus ? "You are online" : "You are offline"}</h1>
      <Parent />

      <h1>React</h1>
      <hr />
      {/* <A/>
      <UseRefExample/> */}
      <UseReducerExample />
      <br />
      <FormExample2 />
      <br />
      <FormExample3 />
      <FormExample4 />
    </div>
  );
}

export default App;
