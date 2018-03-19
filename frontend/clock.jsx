import React from 'react';

export default class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {time: new Date()};
    this.tick = this.tick.bind(this);
  }

  tick() {
    this.setState({time: new Date()})
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000)
  }

  compontentWillUnmount() {
    clearInterval(this.interval);
  }


  render() {
    let hours = this.state.time.getHours()
    let minutes = this.state.time.getMinutes()
    let seconds = this.state.time.getSeconds()


    return(
      <div>
      <h1>Clock</h1>
      <h2>Time: {hours}:{minutes}:{seconds}</h2>
      <h2>Date: {this.state.time.toDateString()}</h2>
      </div>
    )
  }

};
