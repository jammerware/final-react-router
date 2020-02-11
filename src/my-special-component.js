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
    return <div className="my-special-component" onclick={this.componentOnClick}>
      <p>
        Hi from <code>MySpecialComponent</code>!
        In this activity, we're going to improve this component a little. 
      </p>
      <p>Do the following:</p>
      <ul>
        <li>
          The component is being passed a string <strong>property</strong> called imgSrc from the 
          <code>App</code> component. (If you want, you can see this on line 21 of <code>App.js</code>)
          Change the component so that the <code>img</code> tag
          below has its <code>src</code> attribute set to the value of the propery.
        </li>
        <li>
          Change the component so that it now <strong>renders</strong> a new HTML element that
          can contain text. A div or a p might be good.
        </li>
        <li>
          This component has a special power. Whenever you click your mouse inside it, a 
          property in the <code>state</code> of the component increases. Change the element
          you added in the previous step so that the <code>clickCount</code> property
          of the component's state gets displayed inside it.
        </li>
      </ul>
      {this.state.clickCount}
      
      { /* This is the image with the src attribute that you should set */ }
      <img src={/* What goes here? It returns null right now, but... */null} alt="A funny comic about a Heart and a Brain"></img>
      
      { /* Maybe you could add your new HTML element here? */ }
      { /* (After you do, inside it, render the clickCount property of state!) You'll need these: {}*/}
    </div>;
  }
  
  componentOnClick(event) {
    console.log('the thing happened')
    this.setState({ clickCount: this.state.clickCount++ });
  }
}

export { MySpecialComponent };
