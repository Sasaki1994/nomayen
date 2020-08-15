import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Card from './Card';
import PeopleChangeCard from './PeopleChangeCard';
import DrinkEmoji from './utils/DrinkEmoji';
import YenFormat from './utils/YenFormat';

export default PeopleCard = ({ people, onPress }) => {
  const sumPrice = people.drinks.reduce(
    (sum, drink) => sum + drink.nDrinks * drink.price,
    0
  );

  const sumDrinks = people.drinks.reduce(
    (sum, drink) => sum + drink.nDrinks,
    0
  );

  if (people.readyEdit) {
    return <PeopleChangeCard people={people} />;
  } else {
    return (
      <Card>
        <TouchableOpacity
          style={styles.touchableCard}
          activeOpacity={0.2}
          onPress={onPress}
        >
          <Text style={styles.name}>{people.name}</Text>
          <View style={styles.sideStyle}>
            <Text style={styles.price}>{YenFormat(sumPrice)}</Text>
            <Text style={styles.nDrinks}>
              {sumDrinks}
              {DrinkEmoji(people.drinkType)}
            </Text>
          </View>
        </TouchableOpacity>
      </Card>
    );
  }
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

  nDrinks: {
    fontSize: 32,
  },
});
