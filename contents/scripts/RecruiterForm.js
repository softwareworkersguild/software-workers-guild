import React, { Component } from 'react';
import CheckList from './CheckList.js'
import items from './items.json';

class RecruiterForm extends Component {
  render() {
    return <CheckList
      items={items}
      onToggle={() => {}}
    />;
  }
}

export default RecruiterForm;
