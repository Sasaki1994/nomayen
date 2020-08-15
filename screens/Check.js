import React from 'react';
import { useSelector } from 'react-redux';
import CheckCard from '../components/CheckCard';
import ListScreen from '../components/ListScreen';
import { sin } from 'react-native-reanimated';

export default Check = ({ route, navigation }) => {
  const { check } = route.params;
  const people = useSelector((state) => state.people);
  const sumDrinksPrice = (person) =>
    person.drinks.reduce((sum, drink) => sum + drink.nDrinks * drink.price, 0);
  const sumAllDrinksPrice = people.reduce(
    (sum, person) => sum + sumDrinksPrice(person),
    0
  );
  const otherPrice = (check.price - sumAllDrinksPrice) / people.length;
  return (
    <ListScreen
      data={people}
      renderItem={({ item }) => (
        <CheckCard people={item} otherPrice={otherPrice} />
      )}
      keyExtractor={(item) => item.key.toString()}
      footerIcon={'backward'}
      footerIconText={'戻る'}
      footerOnPress={() => navigation.navigate('Home')}
    />
  );
};
