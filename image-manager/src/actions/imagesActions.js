import imageApi from '../apis/imageApi';

import { FETCH_IMAGES, DELETE_IMAGE, SET_ITEMS_COUNT } from './types';

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

export const deleteImage = id => dispatch => {
  imageApi.deleteImage(id).then(() =>
    dispatch({
      type: DELETE_IMAGE,
      payload: id
    })
  );
};
