import React, { Component } from 'react';

import CheckList from './CheckList.js'
import * as WorkerState from './WorkerState.js';
import items from './items.json';

class WorkerForm extends Component {

  constructor(props) {
    super(props);
    this.state = WorkerState.fromQuery(window.location.search);
  }

  toggle(id, value) {
    const newState = WorkerState.setEnabled(this.state, id, value);

    const location = window.location.href.split('?')[0];
    const query = WorkerState.toQuery(this.state);
    window.history.replaceState('', '', `${location}?${query}`);

    this.setState(newState);
  }

  render() {
    return <CheckList items={items} enabled={this.state.enabled} onToggle={this.toggle.bind(this)}/>
  }
}

export default WorkerForm;
