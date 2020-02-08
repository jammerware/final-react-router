import React, { Component } from 'react';
import './progress-bar.css';

class ProgressBar extends Component {
  render() {
    // http://codepen.io/shalimano/pen/wBmNGJ
    return <div className="slider">
      <div className="line"></div>
      <div className="subline inc"></div>
      <div className="subline dec"></div>
    </div>
  }
}

export { ProgressBar }