import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Components life cycle</h2>
        </div>
        <Body />
      </div>
    );
  }
}


class Body extends Component {

  constructor(props){
    super(props);
  
    this.state = {
      r: 0
    };
    this.getRandomNumber = this.getRandomNumber.bind(this);
  }

  getRandomNumber() {
    // console.log("random number called");
    this.setState({r: Math.floor(Math.random()*10) });
  }
  render() {
    return(
      <div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.getRandomNumber}>Random Number</button>
        <Numbers myNumber={this.state.r} />

      </div>
    )
  }
}

class Numbers extends Component {
  componentWillMount() {
    console.log("componentWillMount called here");
  }
  componentDidMount() {
    console.log("componentDidMount called here");
  }
  componentWillReceiveProps(newProps) {
    console.log("componentWillReceiveProps called")
  }
  shouldComponentUpdate(newProps, nextState) {
    console.log("shouldComponentUpdate called");
    return true;
  }
  componentWillUpdate(newProps, nextState) {
    console.log("componentWillUpdate called");
  }
  componentDidUpdate(newProps, nextState) {
    console.log("called component did update");
  }
  componentWillUnmount() {
    console.log("called componentwill un mount");
  }
  render() {
    return(
      <div>
        <br />
        {this.props.myNumber}
      </div>
    )
  }
}

export default App;
