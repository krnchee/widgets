import React from 'react';

export default class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {inputVal: ''};
    this.handleInput = this.handleInput.bind(this);
    this.selectName = this.selectName.bind(this);
  }

  handleInput(event) {
    this.setState({inputVal: event.target.value})
  }

  selectName(event) {
    let name = event.currentTarget.innerText;
    this.setState({inputVal: name});
  }

  matches() {
    const matches = [];
    let inputVal = this.state.inputVal;

    if (inputVal.length === 0) {
      return this.props.names
    }

    this.props.names.forEach(name => {
      let sub = name.slice(0, inputVal.length)
      if (sub.toLowerCase() === inputVal.toLowerCase()) {
        matches.push(name);
      }
    });

    if (matches.length === 0) {
      matches.push('no matches')
    }

    return matches
  }

  render() {

  let results = this.matches().map((name, idx) => {
    return (
      <li key={idx} onClick={this.selectName}>{name}</li>
    );
  });

  return(
  <div>
    <input
      onChange={this.handleInput}
      value = {this.state.inputVal}
      placeholder = 'Search...'
    />
    <ul>
      {results}
    </ul>
  </div>
  );
  }
}
