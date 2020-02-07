import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import YouTube from 'react-youtube';

class App extends Component {
  constructor(state) {
    super(state);
    
    this.state = { theDate: null };
  }
  
  componentDidMount() {
    // setInterval(() => this.setState({ theDate: new Date() }), 1000);
  }
  
  render() {
    
    return (
      <div className="app">
        <header className="App-header">
          <h1>Hi, INFSCI 2560!</h1>
          <img src={logo} className="app-logo" alt="logo" />
        </header>

        <section className="content">
          {this.state.theDate && <p>It's currently {this.state.theDate.toString()}.</p>}
          <p>Here are my favorite things about you, as a class:</p>
          <ul>
            <li>You're brilliant!</li>
            <li>
              You ask&nbsp;
              <a href="https://www.google.com/search?q=why+do+we+drive+on+parkways+and+park+on+driveways&oq=why+do+we+drive+on+parkways+&aqs=chrome.0.0j69i57j0l5.3070j0j7&sourceid=chrome&ie=UTF-8">great questions</a>
            </li>
            <li>You're awake and paying rapt attention (... right?)</li>
          </ul>
          
          <YouTube videoId="iTvBy_TjUR4" width="100%"></YouTube>
        </section>
      </div>
    );
  }
}

export default App;
