import { ADD_ITEM, DELETE_ITEM } from '../actions/itemActions';

const initialState = [];

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];
    case DELETE_ITEM:
      return state.filter((_, index) => index !== action.payload);
    default:
      return state;
  }
};

export default itemReducer;
