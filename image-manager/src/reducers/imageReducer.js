import { ADD_IMAGE, EDIT_IMAGE, FETCH_IMAGES } from '../actions/types';

const initialState = {
  items: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_IMAGES:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}
