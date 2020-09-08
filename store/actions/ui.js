export const readyAddPeople = () => {
  return {
    type: 'READY_ADD_PEOPLE',
  };
};

export const readyEditPeople = (people) => {
  return {
    type: 'READY_EDIT_PEOPLE',
    payload: people.id,
  };
};

export const resetEdit = () => {
  return {
    type: 'RESET_EDIT',
  };
};

export const readyAddDrink = () => {
  return {
    type: 'READY_ADD_DRINK',
  };
};

export const readyEditDrink = (drink) => {
  return {
    type: 'READY_EDIT_DRINK',
    payload: drink.id,
  };
};

export const resetEditDrink = () => {
  return {
    type: 'RESET_EDIT_DRINK',
  };
};