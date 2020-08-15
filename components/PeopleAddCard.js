import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Card from './Card';
import ButtonIcon from './ButtonIcon';
import PeopleNewCard from './PeopleNewCard';

export default PeopleAddCard = () => {
  const [edit, setEdit] = useState(false);

  if (edit) {
    return <PeopleNewCard cancelPress={() => setEdit(false)} />;
  } else {
    return (
      <Card>
        <TouchableOpacity
          activeOpacity={0.2}
          style={styles.iconCard}
          onPress={() => setEdit(true)}
        >
          <ButtonIcon
            iconName={'user-plus'}
            text={'追加'}
            size={48}
            onPress={() => setEdit(true)}
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
