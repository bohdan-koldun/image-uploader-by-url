import { Types } from '../constants/image-types';
import imageAPI from '../../services/api/index';

export function uploadNewImage(newImage) {
  return async function (dispatch) {
    try {
      dispatch({ type: Types.UPLOAD_NEW_IMAGE });
      const { data } = await imageAPI.uploadImage(newImage);
      dispatch({ type: Types.UPLOAD_NEW_IMAGE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: Types.UPLOAD_NEW_IMAGE_FAILED, payload: error.response.data });
    }
  };
}

export function getAllImages() {
  return async function (dispatch) {
    try {
      dispatch({ type: Types.GET_IMAGE_LIST });
      const { data } = await imageAPI.fetchAllImages();
      dispatch({ type: Types.GET_IMAGE_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: Types.GET_IMAGE_LIST_FAILED });
    }
  };
}

export function getFilteredImages(filter) {
  return async function (dispatch) {
    try {
      dispatch({ type: Types.GET_IMAGE_LIST });
      const { data } = await imageAPI.fetchFilteredImages(filter);
      dispatch({ type: Types.GET_IMAGE_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: Types.GET_IMAGE_LIST_FAILED });
    }
  };
}