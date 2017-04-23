import React, { Component } from 'react';

import CheckList from './CheckList.js'
import * as WorkerState from './WorkerState.js';
import * as UrlUtils from './UrlUtils.js';
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

  recruiterLink() {
    const blob = WorkerState.toBase64(this.state);
    return `${UrlUtils.resolvePath('./recruiters')}?i=${blob}`;
  }

  render() {
    return <div>
      <CheckList items={items} enabled={this.state.enabled} onToggle={this.toggle.bind(this)}/>

      Send this to recruiters:<p/> {this.recruiterLink()}

    </div>
  }
}

export default WorkerForm;
