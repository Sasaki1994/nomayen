

export const addPeople = (people) => {
  return {
    type: 'ADD_PEOPLE',
    payload: people,
  };
};

export const deletePeople = (people) => {
  return {
    type: 'DELETE_PEOPLE',
    payload: people.id,
  };
};

export const changeCheck = (people) => {
  return {
    type: 'CHANGE_CHECK',
    payload: people.id,
  };
};


export const resetEdit = () => {
  return {
    type: 'RESET_EDIT',
  };
};
