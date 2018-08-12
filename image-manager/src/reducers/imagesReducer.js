import { ADD_IMAGE, EDIT_IMAGE, FETCH_IMAGES } from '../actions/types';

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_IMAGES:
      return action.payload;
    case ADD_IMAGE:
      return [
        ...state,
        action.payload
      ];
    case EDIT_IMAGE: {
      const itemIndex = state.findIndex(img => img.id === action.payload.id);

      if (itemIndex < 0) {
        return state;
      }

      const newState = [...state];
      newState.splice(itemIndex, 1, action.payload);

      return newState;
    }
    default:
      return state;
  }
}
