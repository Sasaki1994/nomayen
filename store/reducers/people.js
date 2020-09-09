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

    case 'CHANGE_CHECK':
      const checkedPeople = {...state.byId}
      checkedPeople[action.payload].check = !checkedPeople[action.payload].check
      return {...state, byId:{...checkedPeople}};

    case 'DESTROY':
      return {byId:{}, allIds:[]};

    default:
      return state;
  }
};

export default reducer;
