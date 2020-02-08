import React, { Component } from "react";
import "./App.css";
import { TweetsService } from './tweets-service';

class App extends Component {
  constructor(state) {
    super(state);
    this.state = {};
  }
  
  componentDidMount() {
    this.loadTrendingItems();
  }
  
  render() {
    // build a list of li elements to represent trending info
    // based on state
    const trendingElements = this.buildTrendingElements();
    
    // now we just describe how we want our trending panel to look:
    return (
      <div className="app">
        <header className="App-header">
          <h1>{this.props.greeting}</h1>
        </header>

        <section className="content">
          {/* We create a ul, and we put the li items we created inside it */}
          <ul className="trending-list">{trendingElements}</ul>t
        </section>
      </div>
    );
  }
  
  loadTrendingItems() {
    // this TweetsService object is a thing our app can use to get up-to-the-second
    // information from Twitter.
    const service = new TweetsService();
    this.setState({ trending: service.getTrending() });
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
