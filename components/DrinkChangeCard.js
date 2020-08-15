import React from 'react';
import { StyleSheet, View } from 'react-native';
import Card from './Card';
import ButtonIcon from './ButtonIcon';

export default DrinkChangeCard = () => {
  return (
    <Card>
      <View style={styles.iconCard}>
        <ButtonIcon iconName={'yen-sign'} text={'金額'} size={36} />
        <ButtonIcon iconName={'beer'} text={'杯数'} size={36} />
        <ButtonIcon iconName={'trash'} text={'削除'} size={36} />
      </View>
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
