import TimeFormat from '../../components/utils/TimeFormat';

export const addDrink = (drink) => {
  return {
    type: 'ADD_DRINK',
    payload: {...drink, created_at: TimeFormat(new Date())},
  };
};

export const editDrink = (drink) => {
  return {
    type: 'EDIT_DRINK',
    payload: drink,
  };
};

export const deleteDrink = (drink) => {
  return {
    type: 'DELETE_DRINK',
    payload: drink.id,
  };
};

export const destroyDrinks = () => {
  return {
    type: 'DESTROY'
  };
}