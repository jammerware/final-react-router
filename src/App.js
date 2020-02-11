import React, { Component } from "react";
import "./App.css";
import { MySpecialComponent } from './my-special-component';
import { TweetsService } from './tweets-service';

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
          <h1>Hi, INFSCI 2560. You're React engineers now!</h1>
        </header>

        <section className="content">
          <MySpecialComponent></MySpecialComponent>
        </section>
      </div>
    );
  }
}

export default App;
