import { combineReducers } from 'redux';

import modalReducer from './modalReducer';
import imagesReducer from './imagesReducer';
import loaderReducer from './loaderReducer';
import paginationReducer from './paginationReducer';
import currentImageReducer from './currentImageReducer';

export default combineReducers({
  modal: modalReducer,
  images: imagesReducer,
  loader: loaderReducer,
  pagination: paginationReducer,
  currentImage: currentImageReducer
});
