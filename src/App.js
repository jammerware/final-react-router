import React, { Component } from "react";
import "./App.css";
import { MySpecialComponent } from './my-special-component';

class App extends Component {
  constructor(state) {
    super(state);
    this.state = {};
  }
  
  render() {
    // now we just describe how we want our trending panel to look:
    return (
      <div className="app">
        <header>
          <h1>Better Twitter (probably)</h1>
        </header>

        <section className="content">
          <MySpecialComponent imgSrc="https://lh6.googleusercontent.com/proxy/ZqLnXoC9mxrxP_J_AAgfc6mXwGCvKZOF5gzeXFnVfQKKcF1jUKJN7jdQ3PBuB-tNB_PyuuUtXZIqul9hvDxOJlwHxtSBN5lQANI5GVS3YMechCC7wxZufkg8t9oWO-jNXrjVCp7mVwyD"></MySpecialComponent>
        </section>
      </div>
    );
  }
}

export default App;
