import React from 'react';
import { Footer, FooterTab } from 'native-base';
import { StyleSheet, Text } from 'react-native';
import Card from './Card';
import ButtonIcon from './ButtonIcon';

export default ({ iconName, text, onPress }) => {
  return (
    <Footer>
      <FooterTab style={styles.iconCard}>
        <ButtonIcon
          iconName={iconName}
          text={text}
          size={28}
          onPress={onPress}
        />
      </FooterTab>
    </Footer>
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
