import React, { Component } from 'react';

class Response extends Component {
  render() {
    return <div>
      <textarea readOnly
        ref={e => this._text=e}
        value={this.props.text}
      />
      <button onClick={() => {
          this._text.select();
          document.execCommand('copy');
        }}>Copy</button>
    </div>;
  }
}

export default Response;
