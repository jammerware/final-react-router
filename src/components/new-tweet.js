import React, { Component } from 'react';
import './new-tweet.css';
import { TweetsService } from '../services/tweets-service';

class NewTweet extends Component {
  constructor(state) {
    super(state);
    this.state = { 
      author: '',
      text: '',
    };
    
    // bind event handlers to access "this"
    this.handleSubmit = this.submitClick.bind(this);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
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
            placeholder="What's on your mind?"
            value={this.state.text}></textarea>
          <input 
            type="text" 
            required minLength="2" 
            onChange={this.handleAuthorChange}
            placeholder="What's your Twitter handle?"
            value={this.state.author}></input>
          <input type="submit" value="Post my tweet!"></input>
        </form>
        
        {this.state.isNewTweetPosted && <p>Your tweet has been posted!</p>}
      </div>
    );
  }
  
  handleAuthorChange(event) {
    this.setState({ author: event.currentTarget.value });
  }
  
  handleTextChange(event) {
    this.setState({ text: event.currentTarget.value });
  }
    
  submitClick(event) {
    const form = document.getElementById("new-tweet-form");
    if (form.checkValidity()) {
      event.preventDefault();
      
      console.log("new tweet", this.state.text, this.state.author);
      // this.tweetsService.push({
      //   text: ""
      // })
      this.setState({ text: '', author: '', isNewTweetPosted: true });
    }
  }
}

export { NewTweet };
