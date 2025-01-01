import React from "react";
//import {Component} from "react"; aisa bhi lhikh sakte hai

//class ko componenet banana hai to React ko inmport karna padega
//React ke andar componenet name ka class hai and usko inherit karna padega
//render method html return karegi
class Demo extends React.Component
{
   render()
   {
     return(
        <div>
            <h1>Class Based Component</h1>
            <p>{this.props.message}</p>
            <p>{this.props.year}</p>
        </div>
     );
   }
}

export default Demo;
