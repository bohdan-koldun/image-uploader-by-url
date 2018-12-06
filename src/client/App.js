import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Loader from 'react-loader-spinner';
import { uploadNewImage, getAllImages } from './redux/actions/image-action';
import ImageUrlForm from './components/forms/ImageUrlForm';
import ImagesList from './components/imageList';
import './app.css';

class App extends Component {
  componentDidMount() {
    const { getAllImages } = this.props;
    getAllImages();
  }

  render() {
    const {
      uploadNewImage,
      imageList,
      image,
      isFetching
    } = this.props;

    return (
      <div>
        <h1>
          Image uploader by URL
        </h1>
        <div>
          <ImageUrlForm uploadNewImage={uploadNewImage} />
          {
            image.successfuladd
              ? <div>
                <span>Last successfully uploaded image: </span>
                <b>{`${image.image.name}, ${Math.round(image.image.size / 1024, -2)} KB`}</b>
              </div>
              : image.errors.length > 0 && <div className='error'>
                <span>Cannot upload image from the URL : </span>
                <b><a href={image.errors}>{image.errors}</a></b>
              </div>
          }
          {isFetching && <Loader type="Bars" color="#somecolor" height={80} width={80} />}
          {imageList && <ImagesList imageList={imageList} />}
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
