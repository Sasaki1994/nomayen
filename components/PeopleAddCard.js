import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Card from './Card';
import ButtonIcon from './ButtonIcon';
import PeopleNewCard from './PeopleNewCard';
import { useDispatch, useSelector } from 'react-redux';
import { readyAddPeople } from '../store/actions/ui';

const PeopleAddCard = () => {
  const { peopleEdit } = useSelector(state => state.ui);
  const dispatch = useDispatch()

  if (peopleEdit.isAdd) {
    return <PeopleNewCard />;
  } else {
    return (
      <Card>
        <TouchableOpacity
          activeOpacity={0.2}
          style={styles.iconCard}
          onPress={()=>dispatch(readyAddPeople())}
        >
          <ButtonIcon
            iconName={'user-plus'}
            text={'追加'}
            size={48}
            onPress={() => dispatch(readyAddPeople())}
          />
        </TouchableOpacity>
      </Card>
    );
  }
};

const styles = StyleSheet.create({
  iconCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PeopleAddCard