import React, { Component } from 'react';
import './view-tweet.css';

class ViewTweet extends Component {
  
  constructor(state) {
    super(state);
    
    this.state = { likeCount: 0 };
    this
  }
  
  render() {
    return <div className="view-tweet-component">
      <div className="tweet-content">
        View tweet
      </div>
      <div className="likes">{this.state.likeCount} like(s)</div>
      <input className="like-button" type="button" value="Like"></input>
    </div>;
  }
  
  handleLikeClick() {
    // This seems to be where the problem is - when the like button is clicked, 
    // no code runs at all! That can't be right. Write some code here to respond
    // appropriately. When you're done, you should see the like count in the component
    // increase by one every time "Like" is clicked.
    
  }
}

export { ViewTweet }