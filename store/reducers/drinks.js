import generateNewId from './utils/generateNewId';

const initialState = {byId:{}, allIds:[]};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_DRINK':
      const newId = generateNewId(state)
      const newDrink = {}
      newDrink[newId] = {
          id: newId,
          ...action.payload,
          deleted: false
        }
      return {byId:{...state.byId, ...newDrink }, allIds:[...state.allIds, newId]};

    case 'EDIT_DRINK':
      const editedDrink = {...state.byId}
      editedDrink[action.payload.id] = action.payload
      return {...state, byId: {...editedDrink}};

    case 'DELETE_DRINK':
      const deletedDrink = {...state.byId}
      deletedDrink[action.payload].deleted = true
      return {...state, byId:{...deletedDrink}};

    case 'DESTROY':
      return {byId:{}, allIds:[]};

    default:
      return state;
  }
};

export default reducer;
