import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    // JSX COMPILES DOWN TO ES5 browser compatible code through Babel
    // return React.createElement(
    //   "div", //element
    //   { className: "App" }, // attributes
    //   React.createElement("h1", null, "The App Component") //content
    // );
    // EXAMPLE OF USING JSX EXPRESSIONS TO HAVE VARIABLES IN YOOUR JSX
    const name = "Larry";
    const showHello = true;
    const showMath = true;
    const num1 = 40
    const num2 = 23

    let math;

    if (showMath) {
      math = <h4>{num1} + {num2} = {num1 + num2}</h4>
    } else {
      math = null
    }

    return (
      <div className="App">
        <h1>The App Component</h1>
        {showHello ? <h4>Hello {name.toUpperCase()} </h4> : null}
        {math}
      </div>
    );
  }
}

export default App;
