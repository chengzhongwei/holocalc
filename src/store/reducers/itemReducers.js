import {
  ADD_ITEM,
  DELETE_ITEM,
  INCREASE_ITEM_LEVEL,
  DECREASE_ITEM_LEVEL,
  CHANGE_ITEM
} from "../actions/itemActions";

const initialState = [];

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];
    case DELETE_ITEM:
      return state.filter((item) => item.index !== action.payload);
    case INCREASE_ITEM_LEVEL:
      return state.map((item) =>
        item.index === action.payload ? { ...item, level: item.level + 1 } : item
      );
    case DECREASE_ITEM_LEVEL:
      return state.map((item) =>
        item.index === action.payload ? { ...item, level: item.level - 1 } : item
      );
    case CHANGE_ITEM:
      return state.map((item) =>
        item.index === action.payload.index ? { ...item, name: action.payload.name, label: action.payload.label } : item
      );
    default:
      return state;
  }
};

export default itemReducer;
