import React, { Component } from "react";
import { SiteBanner } from './components/site-banner';
import { NewTweet } from './components/new-tweet';
import { ViewTweet } from './components/view-tweet';
import { TweetsService } from './services/tweets-service';

import './App.css';

class App extends Component {
  constructor(state) {
    super(state);
    
    this.state = { tweets: [] };
  }
  
  componentDidMount() {
    this._loadTweets();
  }
  
  render() {
    const tweetElements = this.state.tweets.map(tweet => <ViewTweet key={tweet.id}>hi</ViewTweet>);
    
    return (
      <div className="app">
        <SiteBanner bannerText="My Twitter is the best twitter" />
        <section className="content">
          <NewTweet onTweetPosted={this._loadTweets.bind(this)}></NewTweet>
          <hr />
          {tweetElements}
        </section>
      </div>
    );
  }
  
  _loadTweets() {
    const tweetsService = new TweetsService();
    const tweets = tweetsService.getTweets();
    this.setState({ tweets });
  }
}

export default App;
