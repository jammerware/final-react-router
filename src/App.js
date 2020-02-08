import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import YouTube from 'react-youtube';
import { TweetsService } from './tweets-service';

class App extends Component {
  constructor(state) {
    super(state);
    
    this.state = { theDate: null };
  }
  
  componentDidMount() {
    // setInterval(() => this.setState({ theDate: new Date() }), 1000);
    this.loadTweets();
  }
  
  loadTweets() {
    const service = new TweetsService();
    this.setState({ trending: service.getTrending() });
  }
  
  render() {
    const trendingElements = []; 

    if (this.state.trending) {
      for (let i = 0; i < this.state.trending.length; i++) {
        const trend = this.state.trending[i];

        trendingElements.push(
          <li>
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
          <ul className="trending-list">{trendingElements}</ul>
        </section>
      </div>
    );
  }
}

export default App;
