import React, { createContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import drink from '../dummies/drink';
import PeopleCard from '../components/PeopleCard';
import PeopleAddCard from '../components/PeopleAddCard';
import ListScreen from '../components/ListScreen';
import { readyEditPeople, addPeople } from '../store/actions/people';
import { View } from 'native-base';
import CheckModal from '../components/CheckModal';

export default HOME = ({ navigation }) => {
  const people = useSelector((state) => state.people);
  const [isVisible, setIsVisible] = useState(false);
  const initialCheck = { price: 10000 };
  const [check, setCheck] = useState(initialCheck);
  const dipatch = useDispatch();
  return (
    <>
      <ListScreen
        data={people}
        renderItem={({ item }) => (
          <PeopleCard
            people={item}
            onPress={() => dipatch(readyEditPeople(item))}
          />
        )}
        keyExtractor={(item) => item.key.toString()}
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
