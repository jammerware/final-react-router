import React, { Component } from "react";
import "./App.css";
import { NewTweet } from './components/new-tweet';
import { TweetsService } from' ./services/tweets-service';

class App extends Component {
  constructor(state) {
    super(state);
    
    this.state = { tweets: [] };
    this.tweetsService = new TweetsService();
  }
  
  componentDidMount() {
    const tweets = this.tweetsService.getTweets();
    this.setState({ tweets });
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
          <hr />
          
        </section>
      </div>
    );
  }
}

export default App;
