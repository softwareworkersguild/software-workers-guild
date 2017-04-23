import React, { Component } from 'react';
import CheckList from './CheckList';
import items from './items.json';
import * as RecruiterState from './RecruiterState';

class RecruiterForm extends Component {

  constructor(props) {
    super(props);
    this.state = RecruiterState.fromQuery(window.location.search);
  }

  visibleItems() {
    return items.filter(i => this.state.visible.has(i.id));
  }

  render() {
    return <CheckList
      items={this.visibleItems()}
      onToggle={() => {}}
      enabled={new Set()}
    />;
  }
}

export default RecruiterForm;
