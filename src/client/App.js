import React, { Component } from 'react';
import ImageUrlForm from './forms/ImageUrlForm';
import './app.css';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>
          Image uploader by URL
        </h1>
        <div>
          <ImageUrlForm />
        </div>
      </React.Fragment>
    );
  }
}
