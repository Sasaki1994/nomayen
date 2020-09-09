import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Card from './Card';
import ButtonIcon from './ButtonIcon';
import { readyAddDrink, resetEdit } from '../store/actions/ui';
import AddDrinkModal from './AddDrinkModal';
import { useDispatch, useSelector } from 'react-redux';

const DrinkAddCard = ({ people }) => {
  const { drinkEdit } = useSelector(state => state.ui);
  const dispatch = useDispatch();
  return (
    <Card>
      <TouchableOpacity
        activeOpacity={0.2}
        style={styles.iconCard}
        onPress={() => dispatch(readyAddDrink())}
      >
        <ButtonIcon
          iconName={'beer'}
          text={'追加'}
          size={48}
          onPress={() => dispatch(readyAddDrink())}
        />
      </TouchableOpacity>
      <AddDrinkModal people={people} />
    </Card>
  );
};

const styles = StyleSheet.create({
  iconCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DrinkAddCard;