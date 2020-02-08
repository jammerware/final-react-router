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
    this.loadTweets();
    setInterval(() => {
      this.loadTweets();
    }, 5000);
  }
  
  loadTweets() {
    const service = new TweetsService();
    this.setState({ trending: null });
    setTimeout(() => {
      this.setState({ trending: service.getTrending() });
    }, 1000);
  }
  
  render() {
    const trendingElements = []; 

    if (this.state.trending) {
      for (let i = 0; i < this.state.trending.length; i++) {
        const trend = this.state.trending[i];

        trendingElements.push(
          <li key={trend.text}>
            <h2 className="trending-text">{trend.text}</h2>
            <p className="trending-type">{trend.type}</p>
          </li>
        );
      } 
    }
    
    return (
      <div className="app">
        <header className="App-header">
          <h1>Trending on Twitter</h1>
        </header>

        <section className="content">
          {!this.state.trending && <ProgressBar></ProgressBar>}
          <ul className="trending-list">{trendingElements}</ul>
        </section>
      </div>
    );
  }
}

export default App;
