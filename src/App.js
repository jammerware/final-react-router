import React, { Component } from "react";
import "./App.css";
import { NewTweet } from './components/new-tweet';

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
          <NewTweet />
        </section>
      </div>
    );
  }
}

export default App;
