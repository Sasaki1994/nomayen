import { createStore, combineReducers } from 'redux';
import peopleReducer from './reducers/people';
import drinkReducer from './reducers/drinks';
import uiReducer from './reducers/ui';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  people: peopleReducer,
  ui: uiReducer,
  drinks: drinkReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
