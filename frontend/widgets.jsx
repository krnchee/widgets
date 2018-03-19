import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tabs from './tabs';
import Autocomplete from './autocomplete';

const Panes = [
  {title: 'one', content: 'pane1'},
  {title: 'two', content: 'pane2'},
  {title: 'three', content: 'pane3'}
];

const Names = [
  'Abba',
  'Barney',
  'Barbara',
  'Jeff',
  'Jenny',
  'Sarah',
  'Sally',
  'Xander'
];

class Root extends React.Component {
  render() {
    return(
      <div>
        <Clock />
        <Tabs panes={Panes} />
        <Autocomplete names={Names} />
      </div>
    )
  }
}

document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root");
	ReactDOM.render(<Root/>, root);
});
