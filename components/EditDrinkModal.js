import React, { useState } from 'react';
import Modal from 'react-native-modal';
import { View, Text, StyleSheet } from 'react-native';
import ButtonIcon from './ButtonIcon';
import YenFormat from './utils/YenFormat';
import DrinkEmoji, { drinkTypeList } from './utils/DrinkEmoji';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { editDrink, deleteDrink } from '../store/actions/drink';
import { useDispatch, useSelector } from 'react-redux';
import { resetEdit } from '../store/actions/ui';

const EditDrinkModal = () => {
    const { drinks } = useSelector(state => state);
    const { drinkEdit } = useSelector(state => state.ui);
    const [drink, setDrink] = useState(drinks.byId[drinkEdit.drinkId]);
    const dispatch = useDispatch();
    const editOrder = () => {
      dispatch(editDrink(drink));
      dispatch(resetEdit());
    };

    return (
      <Modal isVisible={drinkEdit.isEdit}>
        <View style={styles.window}>
          <View style={styles.deleteBox}>
            <TouchableOpacity onPress={() => dispatch(deleteDrink(drink))} style={styles.deleteButton}>
              <Text style={styles.deleteText}>削除</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.priceBox}>
            <Text style={styles.text}>{YenFormat(drink.price)}</Text>
            <ButtonIcon
              iconName={'plus'}
              size={32}
              onPress={() => setDrink({ ...drink, price: drink.price + 100 })}
              style={styles.button}
            />
            <ButtonIcon
              iconName={'minus'}
              size={32}
              onPress={() => setDrink({ ...drink, price: drink.price - 100 })}
              style={styles.button}
            />
          </View>
          <View style={styles.priceBox}>
            <Text style={styles.text}>
              {drink.nDrinks}
              {'杯'}
            </Text>
            <ButtonIcon
              iconName={'plus'}
              size={32}
              onPress={() => setDrink({ ...drink, nDrinks: drink.nDrinks + 1 })}
              style={styles.button}
            />
            <ButtonIcon
              iconName={'minus'}
              size={32}
              onPress={() => setDrink({ ...drink, nDrinks: drink.nDrinks - 1 })}
              style={styles.button}
            />
          </View>
          <View style={styles.drinkBox}>
            {drinkTypeList.map((drinkType) => (
              <TouchableWithoutFeedback
                onPress={() => setDrink({ ...drink, drinkType: drinkType })}
                key={drinkType}
                style={
                  drink.drinkType === drinkType
                    ? styles.drinkButtonOn
                    : styles.drinkButtonOff
                }
              >
                <Text style={styles.drinkText}>{DrinkEmoji(drinkType)}</Text>
              </TouchableWithoutFeedback>
            ))}
          </View>
          <View style={styles.decisionBox}>
            <TouchableOpacity onPress={editOrder} style={styles.orderButton}>
              <Text style={styles.orderText}>注文</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => dispatch(resetEdit())} style={styles.cancelButton}>
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
  deleteBox: {
    flex: 1,
    width: 250,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  deleteButton: {
    height: 30,
    width: 60,
    borderRadius: 5,
    backgroundColor: '#FF6A6A',
  },
  deleteText: {
    lineHeight: 30,
    letterSpacing: 1,
    textAlign: 'center',
    fontSize: 18,
    color: '#FAFAFA',
    fontWeight: 'bold',
  },
  priceBox: {
    flex: 1,
    width: 250,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
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
    fontSize: 32,
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

export default EditDrinkModal;