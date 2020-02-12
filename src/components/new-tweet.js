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
        <form>
          <textarea className="new-tweet-text" rows="6" required minLength="6" placeholder="What's on your mind?"></textarea>
          <input type="text" required minLength="2" placeholder="What's your Twitter handle?"></input>
          <input type="submit" onClick={this.handleSubmit} value="Post my tweet!"></input>
        </form>
      </div>
    );
  }
    
  submitClick() {
    
  }
}

export { NewTweet };
