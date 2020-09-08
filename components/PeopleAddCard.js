import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Card from './Card';
import ButtonIcon from './ButtonIcon';
import PeopleNewCard from './PeopleNewCard';
import { useDispatch, useSelector } from 'react-redux';
import { readyAddPeople, resetEdit } from '../store/actions/ui';

export default PeopleAddCard = () => {
  // const peopleEdit = useSelector(state => state.ui.peopleEdit)
  const dispatch = useDispatch()
  // const [isAdd, setIsAdd] = useState(false);
  // const changeAdd = (isAdd) => {
  //   if (isAdd){
  //     setIsAdd(false);
  //     dispatch(resetEdit());
  //   } else {
  //     setIsAdd(true);
  //     dispatch(readyAddPeople());
  //   }
  // }
  const {peopleEdit} = useSelector(state => state.ui);
  if (peopleEdit.isAdd) {
    return <PeopleNewCard cancelPress={()=>dispatch(resetEdit())} />;
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
