import React, { Component } from 'react';
import Image from './image';
import Filter from './filter';
import './images.css';

export default class ImagesList extends Component {
  render() {
    const { imageList } = this.props;
    const listItems = imageList.map((image) => <Image image={image} key={image._id} />);
    return (
      <div className='image-list-wrapper'>
        <Filter />
        <div className='image-list'>
          {listItems}
        </div>
      </div>
    );
  }
}
