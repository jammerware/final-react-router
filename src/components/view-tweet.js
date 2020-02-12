import React, { Component } from 'react';
import './view-tweet.css';

class ViewTweet extends Component {
  
  render() {
    return <div className="view-tweet-component">
      <div class="tweet-content">
        View tweet
      </div>
      <input class="like-button" type="button" value="Like"></input>
    </div>;
  }
}

export { ViewTweet }