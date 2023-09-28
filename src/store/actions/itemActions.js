export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';


export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item
});

export const deleteItem = (index) => ({
  type: DELETE_ITEM,
  payload: index
});

export const INCREASE_ITEM_LEVEL = 'INCREASE_ITEM_LEVEL';
export const DECREASE_ITEM_LEVEL = 'DECREASE_ITEM_LEVEL';
export const CHANGE_ITEM = 'CHANGE_ITEM'

export const increaseItemLevel = (itemId) => ({
  type: INCREASE_ITEM_LEVEL,
  payload: itemId
});

export const decreaseItemLevel = (itemId) => ({
  type: DECREASE_ITEM_LEVEL,
  payload: itemId
});

export const changeItem = (item) => ({
  type: CHANGE_ITEM,
  payload: item
})