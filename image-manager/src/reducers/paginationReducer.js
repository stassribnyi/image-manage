import {
  SET_PAGE_NUMBER,
  SET_ITEMS_COUNT,
  SET_PAGE_SIZE
} from '../actions/types';

const DEFAULT_PAGE_SIZE_OPTIONS = [1, 5, 25, 50];

const initialState = {
  pageNumber: 1,
  itemsCount: 1,
  pageSize: DEFAULT_PAGE_SIZE_OPTIONS[0],
  pageSizeOptions: DEFAULT_PAGE_SIZE_OPTIONS
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_PAGE_NUMBER:
      return {
        ...state,
        pageNumber: action.payload
      };
    case SET_ITEMS_COUNT:
      return {
        ...state,
        itemsCount: action.payload
      };
    case SET_PAGE_SIZE:
      return {
        ...state,
        pageSize: action.payload
      };
    default:
      return state;
  }
}
