import React, { Component } from 'react';
import { FaUpload } from 'react-icons/fa';

import './form.css';

export default class ImageUrlForm extends Component {
  state = { url: '' }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = () => {
    const { url } = this.state;
    const { uploadNewImage } = this.props;
    uploadNewImage({ url });
    this.setState({ url: '' });
  }

  render() {
    const { url } = this.state;
    return (
      <div className='uploader-form'>
        <input name='url' value={url} placeholder='paste image url here...' onChange={this.handleChange} />
        <button type='button' onClick={this.handleSubmit}>
          <FaUpload size='16px' />
          <span>upload</span>
        </button>
      </div>
    );
  }
}
