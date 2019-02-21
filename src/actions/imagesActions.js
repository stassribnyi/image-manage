import imageApi from '../apis/imageApi';

import {
  FETCH_IMAGES,
  DELETE_IMAGE,
  SET_ITEMS_COUNT,
  SHOW_LOADER,
  HIDE_LOADER
} from './types';

export const fetchImages = (start, limit) => dispatch => {
  dispatch({ type: SHOW_LOADER });

  imageApi
    .getImages(start, limit)
    .then(response => {
      dispatch({
        type: FETCH_IMAGES,
        payload: response.data
      });

      dispatch({
        type: SET_ITEMS_COUNT,
        payload: parseInt(response.headers['x-total-count'] || 0, 10)
      });
    })
    .finally(() => dispatch({ type: HIDE_LOADER }));
};

export const deleteImage = id => dispatch => {
  dispatch({ type: SHOW_LOADER });

  imageApi
    .deleteImage(id)
    .then(() =>
      dispatch({
        type: DELETE_IMAGE,
        payload: id
      })
    )
    .finally(() => dispatch({ type: HIDE_LOADER }));
};
