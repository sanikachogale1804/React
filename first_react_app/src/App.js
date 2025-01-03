import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Name from './Components/Name';
import Student from './Components/Student';
import Employee from './Components/Employee';
import Product from './Components/Product';
import Demo from './Components/Demo';
import MyName from './Components/MyName';
import ChangeName from './Components/ChangeName';
import Counter from './Components/Counter';
import EvenOdd from './Components/EvenOdd';
import DisplayName from './Components/DisplayName';
import ChangeAge from './Components/ChangeAge';
import LoggedIn from './Components/LoggedIn';

function App() {
  return (
    <div className="App">
      <LoggedIn/>
      <ChangeAge/>
      <DisplayName/>
      <EvenOdd/>
      <Counter/>
      <ChangeName/>
        {/* <h1>Hello</h1> */}
        {/* <Header/>
        <Footer/> */}
        <Name/>
        {/* my Components has been renderd two times here  */}
        {/* we are reusing Components */}
        <Student id={101} name="Nikita"/>
        <Student id={102} name="Ankita"/>

        {/* <Employee id={201} name={"Siddhesh"}/> */}
        <Product name={"Mobile"} price={50000}/>
        {/* mount matlab web page pe aayega */}
        <Demo message="Happy New Year" year="2025" />
        <MyName/> 
        
    </div>
  );
}

export default App;
//export default function_name