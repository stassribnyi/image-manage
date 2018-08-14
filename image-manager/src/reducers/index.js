import { combineReducers } from 'redux';

import modalReducer from './modalReducer';
import imagesReducer from './imagesReducer';
import paginationReducer from './paginationReducer';
import currentImageReducer from './currentImageReducer';

export default combineReducers({
  modal: modalReducer,
  images: imagesReducer,
  pagination: paginationReducer,
  currentImage: currentImageReducer
});
