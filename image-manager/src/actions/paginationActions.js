import { SET_PAGE_NUMBER, SET_PAGE_SIZE } from './types';

export const setPageNumber = pageNumber => {
  return {
    type: SET_PAGE_NUMBER,
    payload: pageNumber
  };
};

export const setPageSize = pageSize => {
    return {
      type: SET_PAGE_SIZE,
      payload: pageSize
    };
  };
  
