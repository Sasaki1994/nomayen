import people from '../../dummies/people';
import { readyEdit, editDrink } from '../actions/people';

const initialState = [];
const reducer = (state = initialState, action) => {
  const keys = state.map((people) => people.key);
  let newState;
  let editIndex;
  let newDrinks;
  switch (action.type) {
    case 'READY_EDIT_PEOPLE':
      newState = state.map((people) => ({ ...people, readyEdit: false }));
      editIndex = keys.indexOf(action.people.key);
      action.people.readyEdit = true;
      return [
        ...newState.slice(0, editIndex),
        action.people,
        ...newState.slice(editIndex + 1),
      ];

    case 'ADD_PEOPLE':
      if (keys.length === 0) {
        action.people.key = 1;
      } else {
        action.people.key = Math.max(...keys) + 1;
      }
      return [...state, action.people];

    case 'DELETE_PEOPLE':
      return state.filter((people) => people.key !== action.people.key);

    case 'EDIT_PEOPLE':
      newState = state.map((people) => ({ ...people, readyEdit: false }));
      editIndex = keys.indexOf(action.people.key);
      return [
        ...newState.slice(0, editIndex),
        action.people,
        ...newState.slice(editIndex + 1),
      ];

    case 'CHANGE_CHECK':
      editIndex = keys.indexOf(action.people.key);
      action.people.check = !action.people.check;
      return [
        ...state.slice(0, editIndex),
        action.people,
        ...state.slice(editIndex + 1),
      ];

    case 'ADD_DRINK':
      newState = state.map((people) => ({ ...people, readyEdit: false }));
      editIndex = keys.indexOf(action.people.key);
      if (drinkKeys(action.people).length === 0) {
        action.drink.key = 1;
      } else {
        action.drink.key = Math.max(...drinkKeys(action.people)) + 1;
      }
      action.people.drinks.push(action.drink);
      action.people.readyEdit = false;
      return [
        ...newState.slice(0, editIndex),
        action.people,
        ...newState.slice(editIndex + 1),
      ];

    case 'EDIT_DRINK':
      newState = state.map((people) => ({ ...people, readyEdit: false }));
      newDrinks = [...action.people.drinks];
      let editDrinkIndex = drinkKeys(action.people).indexOf(action.drink.key);
      newDrinks = [
        ...newDrinks.slice(0, editDrinkIndex),
        action.drink,
        ...newDrinks.slice(editDrinkIndex + 1),
      ];
      editIndex = keys.indexOf(action.people.key);
      action.people.drinks = newDrinks;
      action.people.readyEdit = false;
      return [
        ...newState.slice(0, editIndex),
        action.people,
        ...newState.slice(editIndex + 1),
      ];

    case 'DELETE_DRINK':
      newState = state.map((people) => ({ ...people, readyEdit: false }));
      newDrinks = [...action.people.drinks];
      let deleteDrinkIndex = drinkKeys(action.people).indexOf(action.drink.key);
      newDrinks.splice(deleteDrinkIndex, 1);
      editIndex = keys.indexOf(action.people.key);
      action.people.drinks = newDrinks;
      action.people.readyEdit = false;
      return [
        ...newState.slice(0, editIndex),
        action.people,
        ...newState.slice(editIndex + 1),
      ];

    case 'RESET_EDIT':
      newState = state.map((people) => ({ ...people, readyEdit: false }));
      return newState;

    default:
      return state;
  }
};

function drinkKeys(people) {
  return people.drinks.map((drink) => drink.key);
}

export default reducer;
