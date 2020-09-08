import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Card from './Card';
import DrinkEmoji from './utils/DrinkEmoji';
import YenFormat from './utils/YenFormat';
import CheckMark from './utils/CheckMark';
import { changeCheck } from '../store/actions/people';

export default CheckCard = ({ people, otherPrice }) => {
  const drinks = useSelector(state => state.drinks);
  const drinkList = drinks.allIds.map(id => drinks.byId[id]);
  const peopleDrinkList = drinkList.filter(drink => drink.peopleId === people.id && !drink.deleted);
  const sumPrice = peopleDrinkList.reduce(
    (sum, drink) => sum + drink.nDrinks * drink.price,
    0
  );

  const sumDrinks = peopleDrinkList.reduce(
    (sum, drink) => sum + drink.nDrinks,
    0
  );
  const dispatch = useDispatch();

  return (
    <Card>
      <TouchableOpacity
        style={styles.touchableCard}
        activeOpacity={0.2}
        onPress={() => dispatch(changeCheck(people))}
      >
        <View style={styles.sideStyle}>
          <Text style={styles.name}>{people.name}</Text>
          <CheckMark check={people.check} size={32} />
        </View>
        <View style={styles.sideStyle}>
          <Text style={styles.price}>{YenFormat(otherPrice + sumPrice)}</Text>
          <Text style={styles.nDrinks}>
            {sumDrinks}
            {DrinkEmoji(people.drinkType)}
          </Text>
        </View>
      </TouchableOpacity>
    </Card>
  );
};

const styles = StyleSheet.create({
  touchableCard: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  name: {
    fontSize: 32,
  },

  sideStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  price: {
    fontSize: 32,
  },

  check: {
    fontSize: 32,
  },

  nDrinks: {
    fontSize: 32,
  },
});
