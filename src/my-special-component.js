import React, { Component } from "react";
import './my-special-component.css';

class MySpecialComponent extends Component {
  constructor(state) {
    super(state);
    this.state = { clickCount: 0 };
  }
  
  componentDidMount() {
  }
  
  render() {
    return <div className="my-special-component" onClick={this.componentOnClick.bind(this)}>
      <p>
        Hi from <code>MySpecialComponent</code>!
      </p>
      <p>
          This component has a special power. Whenever you click your mouse inside it, a 
          property called <code>clickCount</code> in the <code>state</code> of the component increases. 
      </p>
      
      { /* This is the image with the src attribute that you should set */ }
      <img src={/* What goes here? It returns null right now, but... */null} alt="A funny comic about a Heart and a Brain"></img>
      
      { /* Maybe you could add your new HTML element here? */ }
      { /* (After you do, inside it, render the clickCount property of state!) You'll need these: {}*/}
    </div>;
  }
  
  componentOnClick(event) {
    this.setState({ clickCount: this.state.clickCount + 1 });
  }
}

export { MySpecialComponent };
