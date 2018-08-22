import { SELECT_LIBRARY } from '../constants';

const selectionReducer = (state = null, action) => {
  switch (action.type) {
    case SELECT_LIBRARY:
      return action.payload;
    default:
      return state;
  }
};

export default selectionReducer;
