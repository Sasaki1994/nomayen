import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Card from './Card';
import ButtonIcon from './ButtonIcon';
import { useDispatch } from 'react-redux';
import { deletePeople } from '../store/actions/people';
import AddDrinkModal from './AddDrinkModal';
import { useNavigation } from '@react-navigation/native';
import { readyAddDrink } from '../store/actions/ui';

const PeopleChangeCard = ({ people }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <Card>
      <View style={styles.iconCard}>
        <ButtonIcon
          iconName={'list-alt'}
          text={'詳細'}
          size={36}
          onPress={() =>
            navigation.navigate('Drink', {
              people: people,
              title: people.name,
            })
          }
        />
        <ButtonIcon
          iconName={'beer'}
          text={'注文'}
          size={36}
          onPress={() => dispatch(readyAddDrink())}
        />
        <ButtonIcon
          iconName={'trash'}
          text={'削除'}
          size={36}
          onPress={() => dispatch(deletePeople(people))}
        />
      </View>
      <AddDrinkModal people={people} />
    </Card>
  );
};

const styles = StyleSheet.create({
  iconCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default PeopleChangeCard;