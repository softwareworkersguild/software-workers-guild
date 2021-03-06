import React, { Component } from 'react';

class CheckItem extends Component {

  render() {
    return <div>
      <input
        type="checkbox"
        name={this.props.item.id}
        onChange={e => this.props.onToggle(e.target.checked)}
        checked={this.props.checked}
        />
      {this.props.item.text}
      </div>
  }
}

export default class CheckList extends Component {
  render() {
    return <div> {
      this.props.items.map(item => {
          return <CheckItem
            item={item}
            key={item.id}
            checked={this.props.enabled.has(item.id)}
            onToggle={checked => this.props.onToggle(item.id, checked)}
          />
        })
    } </div>
  }
}
