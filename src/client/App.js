import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { uploadNewImage, getAllImages } from './redux/actions/image-action';
import ImageUrlForm from './forms/ImageUrlForm';
import './app.css';

class App extends Component {
  render() {
    const { uploadNewImage, getAllImages } = this.props;
    return (
      <div>
        <h1>
          Image uploader by URL
        </h1>
        <div>
          <ImageUrlForm uploadNewImage={uploadNewImage} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    imageList: state.images.imageList,
    image: state.images.image,
    isFetching: state.images.isFetching
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ uploadNewImage, getAllImages }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
