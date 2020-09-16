import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Card from './Card';
import ButtonIcon from './ButtonIcon';
import { useDispatch, useSelector } from 'react-redux';
import { readyAddPeople } from '../store/actions/ui';
import AddPeopleModal from './AddPeopleModal';

const PeopleAddCard = () => {
  const dispatch = useDispatch()
  const {peopleEdit} = useSelector(state => state.ui)
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
      {peopleEdit.isAdd && <AddPeopleModal />}
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

export default PeopleAddCard