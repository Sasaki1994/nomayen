import people from '../../dummies/people';
import { readyEdit, editDrink } from '../actions/people';

const initialState = {
    peopleEdit:{
      isEdit: false,
      peopleId: null,
      isAdd: false
    },

    drinkEdit:{
      isEdit: false,
      drinkId: null,
      isAdd: false
    }
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'READY_ADD_PEOPLE':
      const peopleAddState = {...initialState}
      peopleAddState.peopleEdit.isEdit = false;
      peopleAddState.peopleEdit.isAdd = true;
      return peopleAddState;

    case 'READY_EDIT_PEOPLE':
      const peopleEditState = {...initialState}
      peopleEditState.peopleEdit.isEdit = true;
      peopleEditState.peopleEdit.peopleId = action.payload;
      return peopleEditState;

    case 'RESET_EDIT':
      const resetState = {...state}
      resetState.peopleEdit.isEdit = false;
      resetState.peopleEdit.isAdd = false;
      resetState.peopleEdit.peopleId = null;
      resetState.drinkEdit.isEdit = false;
      resetState.drinkEdit.isAdd = false;
      resetState.drinkEdit.drinkId = null;
      return resetState;

    case 'READY_ADD_DRINK':
          const drinkAddState = {...initialState}
          drinkAddState.drinkEdit.isEdit = false;
          drinkAddState.drinkEdit.isAdd = true;
          return drinkAddState;

    case 'READY_EDIT_DRINK':
      const drinkEditState = {...initialState}
      drinkEditState.drinkEdit.isEdit = true;
      drinkEditState.drinkEdit.drinkId = action.payload;
      return drinkEditState;

    case 'RESET_EDIT_DRINK':
      const resetDrinkState = {...initialState}
      resetDrinkState.drinkEdit.isEdit = false;
      resetDrinkState.drinkEdit.drinkId = null;
      return resetDrinkState

    default:
      return state;
  }
};

export default reducer;
