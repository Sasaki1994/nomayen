import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Card from './Card';
import ButtonIcon from './ButtonIcon';

export default DrinkAddCard = ({ onPress }) => {
  return (
    <Card>
      <TouchableOpacity
        activeOpacity={0.2}
        style={styles.iconCard}
        onPress={onPress}
      >
        <ButtonIcon
          iconName={'beer'}
          text={'追加'}
          size={48}
          onPress={onPress}
        />
      </TouchableOpacity>
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
