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
      const peopleAddState = {...state}
      peopleAddState.peopleEdit.isEdit = false;
      peopleAddState.peopleEdit.isAdd = true;
      return peopleAddState;

    case 'READY_EDIT_PEOPLE':
      const peopleEditState = {...state}
      peopleEditState.peopleEdit.isEdit = true;
      peopleEditState.peopleEdit.peopleId = action.payload;
      peopleEditState.peopleEdit.isAdd = false;
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
      const drinkAddState = {...state}
      drinkAddState.drinkEdit.isEdit = false;
      drinkAddState.drinkEdit.isAdd = true;
      return drinkAddState;

    case 'READY_EDIT_DRINK':
      const drinkEditState = {...state}
      drinkEditState.drinkEdit.isEdit = true;
      drinkEditState.drinkEdit.drinkId = action.payload;
      return drinkEditState;

    case 'RESET_EDIT_DRINK':
      const resetDrinkState = {...state}
      resetDrinkState.drinkEdit.isEdit = false;
      resetDrinkState.drinkEdit.drinkId = null;
      return resetDrinkState

    default:
      return state;
  }
};

export default reducer;
