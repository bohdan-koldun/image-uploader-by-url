import { combineReducers } from 'redux';
import { Types } from '../constants/image-types';

const initialState = {
  image: {
    successful: false,
    successfuladd: false,
    errors: [],
    image: null
  },
  imageList: [],
  isFetching: false
};

const image = (state = initialState.image, action) => {
  switch (action.type) {
    case Types.UPLOAD_NEW_IMAGE_SUCCESS:
      return {
        successfuladd: true,
        errors: [],
        image: action.payload
      };
    case Types.UPLOAD_NEW_IMAGE_FAILED:
      return {
        successfuladd: false,
        errors: [action.payload]
      };
    default:
      return state;
  }
};

const imageList = (state = initialState.imageList, action) => {
  switch (action.type) {
    case Types.GET_IMAGE_LIST_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};


const isFetching = (state = initialState.isFetching, action) => {
  switch (action.type) {
    case Types.UPLOAD_NEW_IMAGE:
    case Types.GET_IMAGE_BY_ID:
    case Types.GET_IMAGE_LIST:
      return true;
    case Types.UPLOAD_NEW_IMAGE_SUCCESS:
    case Types.UPLOAD_NEW_IMAGE_FAILED:
    case Types.GET_IMAGE_BY_ID_SUCCESS:
    case Types.GET_IMAGE_BY_ID_FAILED:
    case Types.GET_IMAGE_LIST_SUCCESS:
    case Types.GET_IMAGE_LIST_FAILED:
      return false;
    default:
      return state;
  }
};

export default combineReducers({ 
  image,
  imageList,
  isFetching
});