import React, { Component } from 'react';

class Response extends Component {
  render() {
    return <div>
      <p className="response">
      {this.props.text}
      </p>
      <button onClick={() => {
          this._text.select();
          document.execCommand('copy');
        }}>Copy</button>
    </div>;
  }
}

export default Response;
