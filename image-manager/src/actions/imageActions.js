import imageApi from '../apis/imageApi';

import * as TYPES from './types';

export const fetchImages = (start, limit) => dispatch => {
  imageApi.getImages(start, limit).then(response => {
    dispatch({
      type: TYPES.FETCH_IMAGES,
      payload: response.data
    });

    dispatch({
      type: TYPES.SET_ITEMS_COUNT,
      payload: parseInt(response.headers['x-total-count'] || 0, 10)
    });
  });
};

export const fetchImage = (id) => dispatch => {
  imageApi.getImage(id).then(response => {
    dispatch({
      type: TYPES.FETCH_IMAGE,
      payload: response.data
    });
  });
};

export const editImage = (image) => {
  return {
    type: TYPES.EDIT_IMAGE,
    payload: image
  };
};

export const updateImage = (image) => dispatch => {
  return imageApi.updateImage(image).then(response => {
    dispatch({
      type: TYPES.UPDATE_IMAGE,
      payload: response.data
    });
  });
};

export const addImage = (image) => dispatch => {
  return imageApi.addImage(image).then(response => {
    dispatch({
      type: TYPES.ADD_IMAGE,
      payload: response.data
    });
  });
};

export const deleteImage = (id) => dispatch => {
  imageApi.deleteImage(id).then(_ => {
    dispatch({
      type: TYPES.DELETE_IMAGE,
      payload: id
    });
  });
};

export const resetImage = () => {
  return {
    type: TYPES.RESET_IMAGE
  }
};