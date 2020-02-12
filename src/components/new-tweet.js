import React, { Component } from 'react';
import './new-tweet.css';
import { TweetsService } from '../services/tweets-service';

class NewTweet extends Component {
  constructor(state) {
    super(state);
    this.state = { tweetText: null };
    
    // bind event handlers to access "this"
    this.handleSubmit = this.submitClick.bind(this);
    this.tweetsService = new TweetsService();
  }
  
  render() {
    return (
      <div className="new-tweet-component">
        <textarea className="new-tweet-text" rows="6" placeholder="What's on your mind?"></textarea>
        <input type="button" value="Post my tweet!"></input>
      </div>
    );
  }
    
  submitClick() {
    
  }
}

export { NewTweet };
