import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Card from './Card';
import DrinkChangeCard from './DrinkChangeCard';
import DrinkEmoji from './utils/DrinkEmoji';
import YenFormat from './utils/YenFormat';
import TimeFormat from './utils/TimeFormat';
import DrinkModal from './DrinkModal';
import { useDispatch } from 'react-redux';
import { readyEditPeople } from '../store/actions/people';

export default DrinkCard = ({ drink, people }) => {
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();

  const editReady = () => {
    dispatch(readyEditPeople(people));
    setIsVisible(!isVisible);
  };

  return (
    <Card>
      <TouchableOpacity
        style={styles.touchableCard}
        activeOpacity={0.2}
        onPress={editReady}
      >
        <Text style={styles.created_at}>{TimeFormat(drink.created_at)}</Text>
        <View style={styles.sideStyle}>
          <Text style={styles.price}>{YenFormat(drink.price)}</Text>
          <Text style={styles.nDrinks}>
            {drink.nDrinks}
            {DrinkEmoji(drink.drinkType)}
          </Text>
        </View>
      </TouchableOpacity>
      <DrinkModal
        isVisible={isVisible}
        toggleVisible={() => setIsVisible(!isVisible)}
        people={people}
        selectDrink={drink}
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  touchableCard: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  created_at: {
    fontSize: 32,
  },

  sideStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  price: {
    fontSize: 32,
  },

  nDrinks: {
    fontSize: 32,
  },
});
