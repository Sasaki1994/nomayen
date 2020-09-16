import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Card from './Card';
import PeopleChangeCard from './PeopleChangeCard';
import DrinkEmoji from './utils/DrinkEmoji';
import YenFormat from './utils/YenFormat';
import { sumDrinksAndSumPrice } from '../store/services/drinkService';
import { useSelector } from 'react-redux';

const PeopleCard = ({ people, onPress }) => {
  const {drinks} = useSelector(state => state);
  const {peopleEdit} = useSelector(state => state.ui);
  const [sumDrinks, sumPrice] = sumDrinksAndSumPrice(drinks, people)

  if (peopleEdit.isEdit && people.id === peopleEdit.peopleId) {
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
              {people.number}
              {'人'}
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

export default PeopleCard;
