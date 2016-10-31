import React, { Component } from 'react';
import Thumbnails from './Thumbnails';
import Featured from './Featured';

export default class Gallery extends Component {
  render() {
    return (
      <div>
        <Thumbnails />
        <Featured />
      </div>
    );
  }
}
