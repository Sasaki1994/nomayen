import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {entityToList} from '../store/services/commonService';
import PeopleCard from '../components/PeopleCard';
import PeopleAddCard from '../components/PeopleAddCard';
import ListScreen from '../components/ListScreen';
import {  readyEditPeople } from '../store/actions/ui';
import CheckModal from '../components/CheckModal';

const HOME = ({ navigation }) => {
  const { people } = useSelector((state) => state);
  const dispatch = useDispatch();
  const peopleList = entityToList(people).filter(person => !person.deleted);
  const [isVisible, setIsVisible] = useState(false);
  const [check, setCheck] = useState({ price: 0 });
  return (
    <>
      <ListScreen
        data={peopleList}
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

export default HOME;