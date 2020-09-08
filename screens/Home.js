import React, { createContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { mockState } from '../dummies/state';
import PeopleCard from '../components/PeopleCard';
import PeopleAddCard from '../components/PeopleAddCard';
import ListScreen from '../components/ListScreen';
import { addPeople } from '../store/actions/people'
import { readyAddPeople, readyEditPeople } from '../store/actions/ui';
import { View } from 'native-base';
import CheckModal from '../components/CheckModal';

export default HOME = ({ navigation }) => {
  const people_obj = useSelector((state) => state.people);
  const people = people_obj.allIds.map(id => people_obj.byId[id]).filter(people => !people.deleted);
  const [isVisible, setIsVisible] = useState(false);
  const initialCheck = { price: 10000 };
  const [check, setCheck] = useState(initialCheck);
  const dispatch = useDispatch();
  const peopleEdit = useSelector((state) => state.ui.peopleEdit);
  return (
    <>
      <ListScreen
        data={people}
        renderItem={({ item }) => (
          <PeopleCard
            people={item}
            onPress={() => dispatch(readyEditPeople(item))}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        LastCard={<PeopleAddCard />}
        footerIcon={'money-check'}
        footerIconText={'会計'}
        footerOnPress={() => setIsVisible(!isVisible)}
      />
      <CheckModal
        isVisible={isVisible}
        toggleVisible={() => setIsVisible(!isVisible)}
        check={check}
        setCheck={setCheck}
      />
    </>
  );
};
