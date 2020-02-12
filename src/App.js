import React, { Component } from "react";
import "./App.css";
import { NewTweet } from './components/new-tweet';
import { ViewTweet } from './components/view-tweet';
import { TweetsService } from './services/tweets-service';

class App extends Component {
  constructor(state) {
    super(state);
    
    this.state = { tweets: [] };
  }
  
  componentDidMount() {
    const tweetsService = new TweetsService();
    const tweets = tweetsService.getTweets();
    this.setState({ tweets });
  }
  
  render() {
    const tweetElements = this.state.tweets.map(tweet => <ViewTweet>hi</ViewTweet>);
    
    return (
      <div className="app">
        <header>
          <h1>Better Twitter (probably)</h1>
        </header>

        <section className="content">
          <NewTweet></NewTweet>
          <hr />
          {tweetElements}
        </section>
      </div>
    );
  }
}

export default App;
