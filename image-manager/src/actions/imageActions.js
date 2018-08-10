import imageApi from '../apis/imageApi';

import { ADD_IMAGE, EDIT_IMAGE, FETCH_IMAGES } from './types';

export const fetchImages = () => dispatch => {
  imageApi.getImages().then(images =>
    dispatch({
      type: FETCH_IMAGES,
      payload: images
    })
  );
};
