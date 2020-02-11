import React, { Component } from "react";

class MySpecialComponent extends Component {
  constructor(state) {
    super(state);
    this.state = {};
  }
  
  componentDidMount() {
  }
  
  render() {
    return <div>Hi from my special component!</div>;
  }
}

export { MySpecialComponent };
