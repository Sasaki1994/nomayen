export const readyEditPeople = (people) => {
  return {
    type: 'READY_EDIT_PEOPLE',
    people,
  };
};

export const addPeople = (people) => {
  return {
    type: 'ADD_PEOPLE',
    people,
  };
};

export const deletePeople = (people) => {
  return {
    type: 'DELETE_PEOPLE',
    people,
  };
};

export const changeCheck = (people) => {
  return {
    type: 'CHANGE_CHECK',
    people,
  };
};

export const addDrink = (drink, people) => {
  return {
    type: 'ADD_DRINK',
    drink,
    people,
  };
};

export const editDrink = (drink, people) => {
  return {
    type: 'EDIT_DRINK',
    drink,
    people,
  };
};

export const deleteDrink = (drink, people) => {
  return {
    type: 'DELETE_DRINK',
    drink,
    people,
  };
};

export const resetEdit = () => {
  return {
    type: 'RESET_EDIT',
  };
};
