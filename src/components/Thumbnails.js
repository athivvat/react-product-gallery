import React, { Component } from 'react';

const thumbsnails = {
  width: 100,
};

export default class Thumbnails extends Component {
  render () {
    return (
      <div style={thumbsnails}>
        <img src={this.props.thumbsnails[0]} />
        <img src={this.props.thumbsnails[1]} />
        <img src={this.props.thumbsnails[2]} />
      </div>
    )
  }
}
