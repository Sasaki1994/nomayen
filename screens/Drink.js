import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text } from 'react-native';
import TimeFormat from '../components/utils/TimeFormat';

import {resetEditDrink, readyEditDrink} from '../store/actions/ui';
import DrinkCard from '../components/DrinkCard';
import DrinkAddCard from '../components/DrinkAddCard';
import ListScreen from '../components/ListScreen';
import AddDrinkModal from '../components/AddDrinkModal';
import EditDrinkModal from '../components/EditDrinkModal';
import { editDrink } from '../store/actions/drink';

export default Drink = ({ route, navigation }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isEditVisible, setIsEditVisible] = useState(false);
  const dispatch = useDispatch();
  const { people } = route.params;
  const drinks = useSelector(state => state.drinks)
  const peopleDrinkIds = drinks.allIds.filter(id=>drinks.byId[id].peopleId === people.id)
  const peopleDrinks = peopleDrinkIds.map(id => drinks.byId[id]).filter(drink => !drink.deleted)
  const drinkEdit = useSelector(state => state.ui.drinkEdit)
  const editReady = (drink) =>{
    dispatch(readyEditDrink(drink));
    setIsEditVisible(!isEditVisible);
  }
  const editReset = () =>{
    dispatch(resetEditDrink());
    setIsEditVisible(!isEditVisible);
  }
  return (
    <>
      <ListScreen
        data={peopleDrinks}
        renderItem={({ item }) => (
          <DrinkCard
            drink={item}
            onPress={() => editReady(item)}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        LastCard={<DrinkAddCard onPress={() => setIsVisible(!isVisible)} />}
        footerIcon={'backward'}
        footerIconText={'戻る'}
        footerOnPress={() => navigation.navigate('Home')}
      />
      <AddDrinkModal
        isVisible={isVisible}
        toggleVisible={() => setIsVisible(!isVisible)}
        people={people}
      />
      <EditDrinkModal
        isVisible={isEditVisible}
        toggleVisible={() => editReset()}
        drinkId={drinkEdit.drinkId}
      />
    </>
  );
};
