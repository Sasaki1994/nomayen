import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Card from './Card';
import DrinkEmoji from './utils/DrinkEmoji';
import YenFormat from './utils/YenFormat';
import { useDispatch, useSelector } from 'react-redux';
import { readyEditDrink, resetEdit } from '../store/actions/ui';
import EditDrinkModal from './EditDrinkModal';

const DrinkCard = ({ drink }) => {
  const dispatch = useDispatch();
  const { drinkEdit } = useSelector(state => state.ui)

  return (
    <Card>
      <TouchableOpacity
        style={styles.touchableCard}
        activeOpacity={0.2}
        onPress={() => dispatch(readyEditDrink(drink))}
      >
        <Text style={styles.created_at}>{drink.created_at}</Text>
        <View style={styles.sideStyle}>
          <Text style={styles.price}>{YenFormat(drink.price)}</Text>
          <Text style={styles.nDrinks}>
            {drink.nDrinks}
            {DrinkEmoji(drink.drinkType)}
          </Text>
        </View>
      </TouchableOpacity>
      {drinkEdit.isEdit && <EditDrinkModal/>}
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

export default DrinkCard;