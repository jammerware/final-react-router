import React, { Component } from 'react';
import './new-tweet.css';
import { TweetsService } from '../services/tweets-service';

class NewTweet extends Component {
  constructor(state) {
    super(state);
    this.state = { tweetText: null };
    
    // bind event handlers to access "this"
    this.handleSubmit = this.submitClick.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.tweetsService = new TweetsService();
  }
  
  render() {
    return (
      <div className="new-tweet-component">
        <form id="new-tweet-form" onSubmit={this.handleSubmit}>
          <textarea 
            className="new-tweet-text" 
            rows="6" 
            required 
            minLength="6" 
            onChange={this.handleTextChange}
            placeholder="What's on your mind?"></textarea>
          <input type="text" required minLength="2" placeholder="What's your Twitter handle?"></input>
          <input type="submit" value="Post my tweet!"></input>
        </form>
      </div>
    );
  }
  
  handleAuthorChange(event) {
    this.setState({ newTweetAuthor: event.currentTarget.value });
  }
  
  handleTextChange(event) {
    this.setState({ newTweetText: event.currentTarget.value });
  }
    
  submitClick(event) {
    const form = document.getElementById("new-tweet-form");
    if (form.checkValidity()) {
      event.preventDefault();
      
      console.log("new tweet", this.state.newTweetText, this.state.newTweetAuthor);
      // this.tweetsService.push({
      //   text: ""
      // })
    }
  }
}

export { NewTweet };
