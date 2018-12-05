import React, { Component } from 'react';
import { FaUpload } from 'react-icons/fa';
import './images.css';

export default class ImagesList extends Component {
  render() {
    const { imageList } = this.props;
    const listItems = imageList.map((image) => <Image image={image} />);
    return (
      <div className='image-list'>
        {listItems}
      </div>
    );
  }
}

function Image(props) {
  const { image } = props;
  return (
    <div key={image._id} className='img-wrap'>
      <img src={image.sourceURL} alt={image.name} />
    </div>

  );
}