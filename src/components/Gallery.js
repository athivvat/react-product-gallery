import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import thumbnailStyle from '../styles/thumbnails.css';
import featuredStyle from '../styles/featured.css';

const productImages = {
  position: 'relative'
};

let thumbnailsView = {
  width: 100,
  height: 450,
  position: 'absolute'
};

let featured = {
  display: 'block',
  marginLeft: 150,
  maxWidth: 480,
  maxHeight: 750,
  textAlign: 'center',
  position: 'relative'
};

let featuredImageWrapper = {
  position: 'absolute'
}

let thumbControl = {
  display: 'block',
  visibility: 'visible',
  cursor: 'pointer',
  padding: 20,
};

let closeZoomContainer = {
  visibility: 'hidden',
  opacity: 0
}

let openZoomContainer = {
  visibility: 'visible',
  opacity: 1,
  position: 'absolute',
  width: '100%',
  height: 750,
  backgroundColor: '#fff',
  backgroundRepeat: 'no-repeat'
}

export default class Gallery extends Component {
  constructor(props) {
    super(props);

    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);

    this.state = {
      thumbnail: 0,
      mousePosX: 0,
      mousePosY: 0,
      className: closeZoomContainer,
      backgroundImage: 'url(' + this.props.featured[0] + ')'
    }
  }

  renderThumbnail () {
    let thumbnails = this.props.thumbsnails;
    return (
      thumbnails.map((thumbnail, index)=> {
        return (
          <div className="product-thumbnail-wrapper" key={index}>
            <a className={thumbnailStyle.thumbnail} onClick={this.thumbnailOnClick.bind(this, index)}>
              <img src={thumbnail} />
            </a>
          </div>
        )
      })
    )
  }

  renderFeatured() {
    let featuredImage = this.state.thumbnail;
    return (
      <div style={featuredImageWrapper}>
        <img src={this.props.featured[featuredImage]} onMouseOver={this.onMouseOver} />
      </div>
    )
  }
  renderZoomContainer() {
    // fix mutating `style` is deprecated
    // see more http://stackoverflow.com/questions/35683000/react-how-to-update-style-coordinates
    let cloneStyle = Object.assign({}, this.state.className, {backgroundImage: this.state.backgroundImage, backgroundPositionX: this.state.mousePosX, backgroundPositionY: this.state.mousePosY})
    return(
      <div style={cloneStyle} onMouseOut={this.onMouseOut} onMouseMove={this.onMouseMove}></div>
    )
  }

  onMouseOver(e){
    this.setState({
      className: openZoomContainer
    });
  }

  onMouseOut() {
    this.setState({
      className: closeZoomContainer
    });
  }

  onMouseMove (e) {
      this.setState({
          mousePosX: e.nativeEvent.offsetX * -1.2,
          mousePosY: e.nativeEvent.offsetY * -1.2
      });
    }

  thumbnailOnClick(index) {
    this.setState({
      thumbnail: index,
      backgroundImage: 'url(' + this.props.featured[index] + ')'
    });
  }

  render() {
    return (
      <div style={productImages}>
        <div style={thumbnailsView}>
          <div style={thumbControl}>
            <span className={thumbnailStyle.prev}></span>
          </div>
          { this.renderThumbnail() }
          <div style={thumbControl}>
            <span className={thumbnailStyle.next}></span>
          </div>
        </div>
        <div style={featured}>
          { this.renderFeatured() }
          { this.renderZoomContainer() }
        </div>
      </div>
    );
  }
}
