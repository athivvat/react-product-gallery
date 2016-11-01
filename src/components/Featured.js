import React, { Component } from 'react';

const featuredStyle = {
  marginLeft: 100,
  maxWidth: 480,
  maxHeight: 750,
  textAlign: 'center'
};

export default class Featured extends Component {
  render () {
    return (
      <div style={featuredStyle}>Featured</div>
    );
  }
}
