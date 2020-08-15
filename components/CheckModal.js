import React, { useState } from 'react';
import Modal from 'react-native-modal';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TextInput,
} from 'react-native';
import { Button, StyleProvider } from 'native-base';

import YenFormat from './utils/YenFormat';
import DrinkEmoji, { drinkTypeList } from './utils/DrinkEmoji';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import { addDrink } from '../store/actions/people';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

export default checkModal = ({ isVisible, toggleVisible, check, setCheck }) => {
  const navigation = useNavigation();
  const checking = () => {
    toggleVisible();
    navigation.navigate('Check', {
      check: check,
    });
  };
  return (
    <Modal isVisible={isVisible}>
      <View style={styles.window}>
        <View style={styles.textBox}>
          <Text style={styles.text}>会計</Text>
        </View>
        <View style={styles.priceBox}>
          <TextInput
            keyboardType={'numeric'}
            style={styles.priceText}
            onChangeText={(text) => setCheck({ ...check, price: text })}
            value={check.price}
            autoFocus={true}
          />
        </View>

        <View style={styles.decisionBox}>
          <TouchableOpacity onPress={checking} style={styles.orderButton}>
            <Text style={styles.orderText}>決定</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleVisible} style={styles.cancelButton}>
            <Text style={styles.cancelText}>キャンセル</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  window: {
    flex: 0.6,
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textBox: {
    flex: 1,
    width: 250,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceBox: {
    flex: 1,
    width: 250,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  drinkBox: {
    flex: 1,
    width: 250,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  text: {
    letterSpacing: 2,
    fontWeight: 'bold',
    fontSize: 32,
  },
  priceText: {
    fontSize: 42,
  },
  button: {
    marginRight: 12,
    marginLeft: 40,
  },
  drinkButtonOff: {
    marginLeft: 30,
    padding: 5,
    width: 50,
    backgroundColor: '#9F9F9F',
    borderRadius: 5,
  },
  drinkButtonOn: {
    marginLeft: 30,
    padding: 5,
    width: 50,
    backgroundColor: '#FFCA6A',
    borderRadius: 5,
  },
  drinkText: {
    textAlign: 'center',
    fontSize: 32,
  },
  decisionBox: {
    flex: 1,
    width: 250,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  orderButton: {
    height: 40,
    width: 90,
    margin: 20,
    borderRadius: 5,
    backgroundColor: '#FFCA6A',
  },
  orderText: {
    lineHeight: 40,
    letterSpacing: 3,
    textAlign: 'center',
    fontSize: 24,
    color: '#707070',
    fontWeight: 'bold',
  },
  cancelButton: {
    height: 40,
    width: 90,
    margin: 20,
    borderRadius: 5,
  },
  cancelText: {
    lineHeight: 40,
    textAlign: 'center',
    fontSize: 18,
    color: '#707070',
    fontWeight: 'bold',
  },
});
