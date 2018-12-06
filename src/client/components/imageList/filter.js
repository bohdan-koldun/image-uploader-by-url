import React, { Component } from 'react';
import { FaSearch } from 'react-icons/fa';
import './images.css';

export default class Filter extends Component {
  state = {
    keyword: '',
    minHeight: 0,
    maxHeight: Number.MAX_SAFE_INTEGER,
    minWidth: 0,
    maxWidth: Number.MAX_SAFE_INTEGER,
    startDate: new Date(1976).toISOString().substring(0, 16),
    endDate: new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toISOString().substring(0, 16)
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = () => {
    const { getFilteredImages } = this.props;
    getFilteredImages(this.state);
  }

  render() {
    const {
      keyword,
      minHeight,
      maxHeight,
      minWidth,
      maxWidth,
      startDate,
      endDate
    } = this.state;

    return (
      <div className='images-filter'>
        <input name='keyword' value={keyword} placeholder='search...' onChange={this.handleChange} />
        <span>min<br />height:</span>
        <input type='number' name='minHeight' value={minHeight} min='0' onChange={this.handleChange} />
        <span>max<br />height:</span>
        <input type='number' name='maxHeight' value={maxHeight} min='1' onChange={this.handleChange} />
        <span>min<br />width:</span>
        <input type='number' name='minWidth' value={minWidth} min='0' onChange={this.handleChange} />
        <span>max<br />width:</span>
        <input type='number' name='maxWidth' value={maxWidth} min='1' onChange={this.handleChange} />
        <span>start<br />date:</span>
        <input type='datetime-local' name='startDate' value={startDate} onChange={this.handleChange} />
        <span>end<br />date:</span>
        <input type='datetime-local' name='endDate' value={endDate} onChange={this.handleChange} />
        <button type='button' onClick={this.handleSubmit}>
          <FaSearch size='16px' />
          <span>find</span>
        </button>
      </div>
    );
  }
}