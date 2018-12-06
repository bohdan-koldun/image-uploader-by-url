import React, { Component } from 'react';
import './images.css';

export default class Image extends Component {
  render() {
    const { image } = this.props;
    return (
      <div className='img-wrap'>
        <div className='img-card'>
          <img src={image.sourceURL} alt={image.name} />
          <div>{image.name}</div>
          <div>{`size: ${image.width}x${image.height}, ${Math.round(image.size / 1024, -1)} KB`}</div>
        </div>
      </div>
    );
  }
}