import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Card from './Card';
import { TextInput } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { addPeople } from '../store/actions/people';
import ButtonIcon from './ButtonIcon';

const PeopleNewCard = () => {
  const initialState = {
    name: '飲む人',
    drinkType: 'Hard',
  };
  const [people, setPeople] = useState(initialState);
  const dispatch = useDispatch();
  return (
    <Card>
      <View style={styles.touchableCard}>
        <TextInput
          style={styles.name}
          onChangeText={(text) => setPeople({ ...people, name: text })}
          value={people.name}
          autoFocus={true}
        />
        <View style={styles.sideStyle}>
          <ButtonIcon
            iconName={'plus'}
            onPress={() => dispatch(addPeople(people))}
            size={28}
          />
        </View>
      </View>
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
    justifyContent: 'flex-end',
  },

  price: {
    fontSize: 32,
  },

  nDrinks: {
    fontSize: 32,
  },
});

export default PeopleNewCard