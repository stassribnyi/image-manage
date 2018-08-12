import { combineReducers } from 'redux';

import imageReducer from './imageReducer';
import imagesReducer from './imagesReducer';
import paginationReducer from './paginationReducer';

export default combineReducers({
  images: imagesReducer,
  currentImage: imageReducer,
  pagination: paginationReducer
});
