import React, { Component } from "react";

class MySpecialComponent extends Component {
  constructor(state) {
    super(state);
    this.state = {};
  }
  
  componentDidMount() {
  }
  
  render() {
    return <div>
      <p>Hi from my special component!</p>
      <p>
        In this activity, we're going to improve <code>MySpecialComponent</code>
        a little. 
      </p>
      <p>Do the following:</p>
      <ul>
        <li>
          The component is being passed a string <strong>property</strong> called imgSrc from the 
          <code>App</code> component. Change the component so that the <code>img</code> tag
          below has its <code>src</code> attribute set to the value of the propery.
        </li>
      </ul>
      <img src={/* What goes here? It returns null right now, but... */null} alt="A funny comic about a Heart and a Brain"></img>
    </div>;
  }
}

export { MySpecialComponent };
