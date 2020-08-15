import React, { useState } from 'react';
import { Text } from 'react-native';
import TimeFormat from '../components/utils/TimeFormat';
import DrinkCard from '../components/DrinkCard';
import DrinkAddCard from '../components/DrinkAddCard';
import ListScreen from '../components/ListScreen';

export default Drink = ({ route, navigation }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { people } = route.params;
  return (
    <>
      <ListScreen
        data={people.drinks}
        renderItem={({ item }) => <DrinkCard drink={item} people={people} />}
        keyExtractor={(item) => item.key.toString()}
        LastCard={<DrinkAddCard onPress={() => setIsVisible(!isVisible)} />}
        footerIcon={'backward'}
        footerIconText={'戻る'}
        footerOnPress={() => navigation.navigate('Home')}
      />
      <DrinkModal
        isVisible={isVisible}
        toggleVisible={() => setIsVisible(!isVisible)}
        people={people}
      />
    </>
  );
};
