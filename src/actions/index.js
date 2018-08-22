import { SELECT_LIBRARY } from '../constants';

export const selectLibrary = selectedId => {
  return {
    type: SELECT_LIBRARY,
    payload: selectedId
  };
};
