import React from 'react';
import { useSelector } from 'react-redux';
import CheckCard from '../components/CheckCard';
import ListScreen from '../components/ListScreen';
import { sin } from 'react-native-reanimated';

export default Check = ({ route, navigation }) => {
  const { check } = route.params;
  const people_obj = useSelector((state) => state.people);
  const people = people_obj.allIds.map(id => people_obj.byId[id]).filter(people => !people.deleted);
  const drinks_obj = useSelector((state) => state.drinks);
  const drinks = drinks_obj.allIds.map(id => drinks_obj.byId[id]).filter(drink => !drink.deleted);

  const sumAllDrinksPrice = drinks.reduce(
    (sum, drink) => sum + drink.nDrinks * drink.price,
    0
  );
  const otherPrice = (check.price - sumAllDrinksPrice) / people.length;
  return (
    <ListScreen
      data={people}
      renderItem={({ item }) => (
        <CheckCard people={item} otherPrice={otherPrice} />
      )}
      keyExtractor={(item) => item.id.toString()}
      footerIcon={'backward'}
      footerIconText={'戻る'}
      footerOnPress={() => navigation.navigate('Home')}
    />
  );
};
