import { combineReducers } from 'redux';

import imageReducer from './imageReducer';
import paginationReducer from './paginationReducer';

export default combineReducers({
  images: imageReducer,
  pagination: paginationReducer
});
