import React from 'react';
import { useSelector } from 'react-redux';
import DrinkCard from '../components/DrinkCard';
import DrinkAddCard from '../components/DrinkAddCard';
import ListScreen from '../components/ListScreen';
import { entityToList } from '../store/services/commonService';

const Drink = ({ route, navigation }) => {
  const { people } = route.params;
  const { drinks } = useSelector(state => state)
  const peopleDrinks = entityToList(drinks).filter(drink => drink.peopleId === people.id && !drink.deleted)
  return (
    <ListScreen
      data={peopleDrinks}
      renderItem={({ item }) => <DrinkCard drink={item} />}
      keyExtractor={(item) => item.id.toString()}
      LastCard={<DrinkAddCard people={people} />}
      footerIcon={'backward'}
      footerIconText={'戻る'}
      footerOnPress={() => navigation.navigate('Home')}
    />
  );
};

export default Drink;