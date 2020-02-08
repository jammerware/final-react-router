import React, { Component } from "react";
import "./App.css";
import { ProgressBar } from './progress-bar'
import { TweetsService } from './tweets-service';

class App extends Component {
  constructor(state) {
    super(state);
    this.state = {};
  }
  
  componentDidMount() {
    this.loadTrendingItems();
    setInterval(() => {
      this.loadTrendingItems();
    }, 10000);
  }
  
  render() {
    const trendingElements = this.buildTrendingElements();
    
    // now we just describe how we want our trending panel to look:
    return (
      <div className="app">
        <header className="App-header">
          <h1>Trending on Twitter</h1>
        </header>

        <section className="content">
          {/* Don't worry about this progress bar stuff. */}
          {!this.state.trending && <ProgressBar></ProgressBar>}
          
          {/* We create a ul, and we put the li items we created inside it */}
          <ul className="trending-list">{trendingElements}</ul>
        </section>
      </div>
    );
  }
  
  loadTrendingItems() {
    // this TweetsService object is a thing our app can use to get up-to-the-second
    // information from Twitter.
    const service = new TweetsService();
    
    this.setState({ trending: null });
    setTimeout(() => {
      // get the trending items and store them so we can render them on the page
      this.setState({ trending: service.getTrending() });
    }, 1000);
  }
  
  buildTrendingElements() {
    const trendingElements = []; 

    // create a list item for each item that our service says is trending!
    if (this.state.trending) {
      for (let i = 0; i < this.state.trending.length; i++) {
        const trend = this.state.trending[i];

        trendingElements.push(
          <li key={trend.text}>
            <h2 className="trending-text">{trend.text}</h2>
            <p>
              <span className="trending-type">{trend.type}</span>
              &nbsp;•&nbsp;
              <span>{trend.tweetCount} tweets</span>
            </p>
          </li>
        );
      } 
    }
    // now the variable trendingElements has an li per item that the service
    // says is trending
    
    return trendingElements;
  }
}

export default App;
