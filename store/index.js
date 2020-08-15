import { createStore, combineReducers } from 'redux';
import peopleReducer from './reducers/people';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  people: peopleReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
