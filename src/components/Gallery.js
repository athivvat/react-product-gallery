import React, { Component } from 'react';
import Thumbnails from './Thumbnails';
import Featured from './Featured';

const productImages = {
  position: 'relative'
};

export default class Gallery extends Component {
  render() {
    return (
      <div style={productImages}>
        <Thumbnails thumbsnails={this.props.thumbsnails}/>
        <Featured />
      </div>
    );
  }
}
