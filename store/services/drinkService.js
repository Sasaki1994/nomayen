import {entityToList} from './commonService';

export const sumDrinksAndSumPrice = (drinks, people=null) => {
  const drinkList = entityToList(drinks).filter(drink => people ? drink.peopleId === people.id && !drink.deleted : !drink.deleted)
  const sumDrinks = drinkList.reduce(
    (sum, drink) => sum + drink.nDrinks,
    0
  );
  const sumPrice = drinkList.reduce(
    (sum, drink) => sum + drink.nDrinks * drink.price,
    0
  );
  return [sumDrinks, sumPrice]
}

export const sumDeletedPeoplePrice = (drinks, people) => {
  const deletedPeopleIds = entityToList(people).filter(person => person.deleted).map(person => person.id)
  const drinkList = entityToList(drinks).filter(drink => deletedPeopleIds.includes(drink.peopleId) && !drink.deleted)
  const sumPrice = drinkList.reduce(
    (sum, drink) => sum + drink.nDrinks * drink.price,
    0
  );
  return sumPrice;
}



