import React from 'react';
import { useSelector } from 'react-redux';
import CheckCard from '../components/CheckCard';
import ListScreen from '../components/ListScreen';
import { sumDrinksAndSumPrice, sumDeletedPeoplePrice } from '../store/services/drinkService';
import { entityToList } from '../store/services/commonService';

const Check = ({ route, navigation }) => {
  const { check } = route.params;
  const {people, drinks} = useSelector((state) => state);
  const peopleList = entityToList(people).filter(person => !person.deleted);
  const [_, sumAllDrinksPrice] = sumDrinksAndSumPrice(drinks)
  const deletedPeoplePrice = sumDeletedPeoplePrice(drinks, people)
  const otherPrice = (check.price - sumAllDrinksPrice + deletedPeoplePrice) / peopleList.length;
  return (
    <ListScreen
      data={peopleList}
      renderItem={({ item }) => (
        <CheckCard people={item} otherPrice={otherPrice} />
      )}
      keyExtractor={(item) => item.id.toString()}
      footerIcon={'backward'}
      footerIconText={'戻る'}
      footerOnPress={() => navigation.navigate('Home')}
    />
  );
};

export default Check;