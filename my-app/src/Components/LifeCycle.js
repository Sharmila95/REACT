// we want to create a class component that will have a state and a lifecycle methods

//lifecycle

import React, { Component } from "react";

class lifecycle extends Component {
  constructor(props) {
    console.log("Constructor");
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  decrementCount = () => {
    this.setState((prevState) => {
      return { count: prevState.count - 1 };
    });
  };

  componentDidMount() {
    console.log("Component did mount");
  }
  componentDidUpdate(prevState, props) {
    console.log(`${prevState},${props}`);
    console.log("Component did update");
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.count > 10) {
      return false;
    }
    console.log(`${nextState},${nextProps}`);
    console.log("Component should update");
    return true;
  }

  componentWillMount() {
    console.log("Component will mount");
  }

  render() {
    return (
      <div>
        <h1>Count : {this.state.count}</h1>
        <button onClick={this.incrementCount}>Increment Count</button>
        <button onClick={this.decrementCount}>Decrement Count</button>
      </div>
    );
  }
}

export default lifecycle;
