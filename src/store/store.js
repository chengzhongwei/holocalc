import { createStore, combineReducers } from 'redux';
import itemReducer from './reducers/itemReducers';

const rootReducer = combineReducers({
  items: itemReducer
});

const store = createStore(rootReducer);

export default store;
