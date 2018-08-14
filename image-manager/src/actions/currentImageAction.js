import imageApi from '../apis/imageApi';

import {
  ADD_IMAGE,
  EDIT_IMAGE,
  FETCH_IMAGE,
  RESET_IMAGE,
  UPDATE_IMAGE
} from './types';

export const addImage = image => dispatch => {
  return imageApi.addImage(image).then(response =>
    dispatch({
      type: ADD_IMAGE,
      payload: response.data
    })
  );
};

export const editImage = image => {
  return {
    type: EDIT_IMAGE,
    payload: image
  };
};

export const fetchImage = id => dispatch => {
  imageApi.getImage(id).then(response =>
    dispatch({
      type: FETCH_IMAGE,
      payload: response.data
    })
  );
};

export const resetImage = () => {
  return {
    type: RESET_IMAGE
  };
};

export const updateImage = image => dispatch => {
  return imageApi.updateImage(image).then(response =>
    dispatch({
      type: UPDATE_IMAGE,
      payload: response.data
    })
  );
};
