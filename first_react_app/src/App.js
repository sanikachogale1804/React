import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Name from './Components/Name';
import Student from './Components/Student';
import Employee from './Components/Employee';

function App() {
  return (
    <div className="App">
        <h1>Hello</h1>
        {/* <Header/>
        <Footer/> */}
        <Name/>
        {/* my Components has been renderd two times here  */}
        {/* we are reusing Components */}
        <Student id={101} name="Nikita"/>
        <Student id={102} name="Ankita"/>

        <Employee id={201} name={"Siddhesh"}/>
    </div>
  );
}

export default App;
//export default function_name