import imageApi from '../apis/imageApi';

import { FETCH_IMAGE, RESET_IMAGE, FETCH_IMAGES, SET_ITEMS_COUNT } from './types';

export const fetchImages = (start, limit) => dispatch => {
  imageApi.getImages(start, limit).then(response => {
    dispatch({
      type: FETCH_IMAGES,
      payload: response.data
    });

    dispatch({
      type: SET_ITEMS_COUNT,
      payload: parseInt(response.headers['x-total-count'] || 0, 10)
    });
  });
};

export const fetchImage = (id) => dispatch => {
  imageApi.getImage(id).then(response => {
    dispatch({
      type: FETCH_IMAGE,
      payload: response.data
    });
  });
};

export const resetImage = () => {
  return {
    type: RESET_IMAGE
  }
};