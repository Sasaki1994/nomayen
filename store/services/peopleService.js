import {entityToList} from './commonService';

export const sumPeople = (peopleList) => {
  const sumPeople = peopleList.reduce(
    (sum, people) => sum + people.number,
    0
  );
  return sumPeople
}

export const existPeopleName = (people, name) => {
  const peopleList = entityToList(people).filter(person => !person.deleted)
  const peopleNames = peopleList.map(person => person.name);
  return peopleNames.includes(name)
}
