import React from 'react';

export default class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {inputVal: ''};
  }


  render() {
    return({this.props.names.map((name, index) => {
      <li key={index}>{name}</li>
    });
  });
  }
}
