import React, { Component } from 'react';
import CheckList from './CheckList';
import items from './items.json';
import * as RecruiterState from './RecruiterState';

class RecruiterForm extends Component {

  constructor(props) {
    super(props);
    this.state = RecruiterState.fromQuery(window.location.search);
  }

  toggle(id, value) {
    const newState = RecruiterState.setEnabled(this.state, id, value);

    const location = window.location.href.split('?')[0];
    const query = RecruiterState.toQuery(this.state);
    window.history.replaceState('', '', `${location}?${query}`);

    this.setState(newState);
  }

  visibleItems() {
    return items.filter(i => this.state.visible.has(i.id));
  }

  render() {
    return <CheckList
      items={this.visibleItems()}
      onToggle={this.toggle.bind(this)}
      enabled={this.state.enabled}
    />;
  }
}

export default RecruiterForm;
