// write code for Welcome component here
import React, { Component } from "react";

function Welcome(props) {
  return (
    <div>
      <h1>Hey {props.name}!</h1>
      <h2>Welcome to Newton School.</h2>
    </div>
  );
}

// const Welcome = (name) => <h1>Hey Saurabh</h1>

// class Welcome extends Component {
//   render() {
//     return <h1>Hey Saurabh</h1>
//   }
// }

export default Welcome;
