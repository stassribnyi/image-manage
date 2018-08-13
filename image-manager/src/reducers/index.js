import { combineReducers } from 'redux';

import modalReducer from './modalReducer';
import imageReducer from './imageReducer';
import imagesReducer from './imagesReducer';
import paginationReducer from './paginationReducer';

export default combineReducers({
  modal: modalReducer,
  images: imagesReducer,
  currentImage: imageReducer,
  pagination: paginationReducer
});
