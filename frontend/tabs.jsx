import React from 'react';

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selected: 0};
    this.selectTab = this.selectTab.bind(this);
  }

  selectTab(num) {
    this.setState({selected: num})
  }

  render() {
    let pane = this.props.panes[this.state.selected]

    return(
      <div>
      <Headers
          selectedPane={this.state.selected}
          onTabChosen={this.selectTab}
          panes={this.props.panes}>
        </Headers>
        <div>
          <article>{pane.content}</article>
        </div>
      </div>
    )
  }
}

class Headers extends React.Component {
  render() {
    let selected = this.props.selectedPane;
    let headers = this.props.panes.map((pane, index) => {
      let title = pane.title;
      return (
        <li
          onClick={this.props.onTabChosen.bind(null, index)}>
          {title}
        </li>
      );
    });
    return (
      <ul className='tab-header'>
        {headers}
      </ul>

    );

 }
}
