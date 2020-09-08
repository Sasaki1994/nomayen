import people from '../../dummies/people';
import { readyEdit, editDrink } from '../actions/people';
import generateNewId from './utils/generateNewId';

const initialState = {byId:{}, allIds:[]};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PEOPLE':
      const newId = generateNewId(state)
      const addPeople = {}
      addPeople[newId] = {
          id: newId,
          name: action.payload.name,
          drinkType: action.payload.drinkType,
          deleted: false,
          check: false
        }
      return {byId:{...state.byId, ...addPeople }, allIds:[...state.allIds, newId]};

    case 'DELETE_PEOPLE':
      const deletedPeople = {...state.byId}
      deletedPeople[action.payload].deleted = true
      return {...state, byId:{...deletedPeople}};
    //
    // case 'EDIT_PEOPLE':
    //   newState = state.map((people) => ({ ...people, readyEdit: false }));
    //   editIndex = keys.indexOf(action.people.key);
    //   return [
    //     ...newState.slice(0, editIndex),
    //     action.people,
    //     ...newState.slice(editIndex + 1),
    //   ];
    //
    case 'CHANGE_CHECK':
      const checkedPeople = {...state.byId}
      checkedPeople[action.payload].check = !checkedPeople[action.payload].check
      return {...state, byId:{...checkedPeople}};
    //
    // case 'ADD_DRINK':
    //   newState = state.map((people) => ({ ...people, readyEdit: false }));
    //   editIndex = keys.indexOf(action.people.key);
    //   if (drinkKeys(action.people).length === 0) {
    //     action.drink.key = 1;
    //   } else {
    //     action.drink.key = Math.max(...drinkKeys(action.people)) + 1;
    //   }
    //   action.people.drinks.push(action.drink);
    //   action.people.readyEdit = false;
    //   return [
    //     ...newState.slice(0, editIndex),
    //     action.people,
    //     ...newState.slice(editIndex + 1),
    //   ];
    //
    // case 'EDIT_DRINK':
    //   newState = state.map((people) => ({ ...people, readyEdit: false }));
    //   newDrinks = [...action.people.drinks];
    //   editDrinkKey = action.people.drinks.find((drink) => drink.readyEdit).key;
    //   editDrinkIndex = drinkKeys(action.people).indexOf(editDrinkKey);
    //   action.drink.key = editDrinkKey;
    //   newDrinks.splice(editDrinkIndex, 1, [action.drink]);
    //   editIndex = keys.indexOf(action.people.key);
    //   action.people.drinks = newDrinks;
    //   action.people.readyEdit = false;
    //   return [
    //     ...newState.slice(0, editIndex),
    //     action.people,
    //     ...newState.slice(editIndex + 1),
    //   ];
    //
    // case 'DELETE_DRINK':
    //   newState = state.map((people) => ({ ...people, readyEdit: false }));
    //   newDrinks = [...action.people.drinks];
    //   let deleteDrinkIndex = drinkKeys(action.people).indexOf(action.drink.key);
    //   newDrinks.splice(deleteDrinkIndex, 1);
    //   editIndex = keys.indexOf(action.people.key);
    //   action.people.drinks = newDrinks;
    //   action.people.readyEdit = false;
    //   return [
    //     ...newState.slice(0, editIndex),
    //     action.people,
    //     ...newState.slice(editIndex + 1),
    //   ];
    //
    // case 'READY_EDIT_DRINK':
    //   newState = state.map((people) => ({ ...people, readyEdit: false }));
    //   newDrinks = [...action.people.drinks];
    //   editDrinkIndex = drinkKeys(action.people).indexOf(action.drink.key);
    //   action.drink.readyEdit = true;
    //   newDrinks = [
    //     ...newDrinks.slice(0, editDrinkIndex),
    //     action.drink,
    //     ...newDrinks.slice(editDrinkIndex + 1),
    //   ];
    //   editIndex = keys.indexOf(action.people.key);
    //   action.people.drinks = newDrinks;
    //   action.people.readyEdit = false;
    //   return [
    //     ...newState.slice(0, editIndex),
    //     action.people,
    //     ...newState.slice(editIndex + 1),
    //   ];
    //
    // case 'RESET_EDIT':
    //   newState = state.map((people) => ({ ...people, readyEdit: false }));
    //   return newState;

    default:
      return state;
  }
};

function drinkKeys(people) {
  return people.drinks.map((drink) => drink.key);
}

export default reducer;
