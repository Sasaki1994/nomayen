import React,{ useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Card from './Card';
import DrinkEmoji from './utils/DrinkEmoji';
import YenFormat from './utils/YenFormat';
import CheckMark from './utils/CheckMark';
import { changeCheck } from '../store/actions/people';
import { sumDrinksAndSumPrice } from '../store/services/drinkService';

const CheckCard = ({ people, otherPrice }) => {
  const {drinks} = useSelector((state) => state);
  const [_, sumPrice] = sumDrinksAndSumPrice(drinks, people)
  const dispatch = useDispatch();
  const [checkNum, setCheckNum] = useState(0);
  const checking = () => {
    const updateCheckNum =  (checkNum + 1) % (people.number + 1);
    if (checkNum === people.number || updateCheckNum === people.number){
      dispatch(changeCheck(people));
    }
    setCheckNum(updateCheckNum);
  }

  return (
    <Card>
      <TouchableOpacity
        style={styles.touchableCard}
        activeOpacity={0.2}
        onPress={checking}
      >
        <View style={styles.sideStyle}>
          <Text style={styles.name}>{people.name}</Text>
          <CheckMark check={people.check} size={32} />
        </View>
        <View style={styles.sideStyle}>
          <Text style={styles.price}>{YenFormat(otherPrice + sumPrice / people.number)}</Text>
          <Text style={styles.nDrinks}>
            {checkNum}{'/'}{people.number}
            {'人'}
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

export default CheckCard;