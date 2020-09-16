import React, { useState, useRef } from 'react';
import Modal from 'react-native-modal';
import { View, Text, StyleSheet } from 'react-native';
import DrinkEmoji, { drinkTypeList } from './utils/DrinkEmoji';
import { TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { resetEdit } from '../store/actions/ui';
import { addPeople } from '../store/actions/people';
import ButtonIcon from './ButtonIcon';
import {existPeopleName} from '../store/services/peopleService';
import generateNewId from '../store/reducers/utils/generateNewId';

const AddPeopleModal = () => {
  const { people } = useSelector(state => state)
  const existDrinking = existPeopleName(people, '飲む人');
  const existNotDrinking = existPeopleName(people, '飲まない人');
  let defaultName;
  if(existDrinking && existNotDrinking) {
    defaultName = ''
  } else if (existDrinking && !existNotDrinking) {
    defaultName = '飲まない人'
  } else {
    defaultName = '飲む人'
  }

  const initialState = {
    name: defaultName,
    number: 1
  };
  const [newPeople, setNewPeople] = useState(initialState);
  const { peopleEdit } = useSelector(state => state.ui)
  const dispatch = useDispatch();
  const textInputReference = useRef(null);
  const focusedHandler = () => {
    textInputReference.current.focus();
  }
  const register = () => {
    dispatch(addPeople(newPeople));
    dispatch(resetEdit());
  };

  return (
    <Modal isVisible={peopleEdit.isAdd}>
      <View style={styles.window}>
        <TouchableWithoutFeedback style={styles.inputBox} onPress={focusedHandler}>
          <TextInput
            ref={textInputReference}
            style={{textAlign:'center'}}
            maxLength={7}
            onChangeText={(text) => setNewPeople({ ...newPeople, name: text })}
            value={newPeople.name}
            autoFocus={true}
          />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback style={styles.nameBox} onPress={focusedHandler}>
              <Text style={styles.text}>{newPeople.name}</Text>
        </TouchableWithoutFeedback>
        <View style={styles.priceBox}>
          <Text style={styles.numberText}>
            {newPeople.number}
            {'人'}
          </Text>
          <ButtonIcon
            iconName={'plus'}
            size={32}
            onPress={() => setNewPeople({ ...newPeople, number: newPeople.number + 1 })}
            style={styles.button}
          />
          <ButtonIcon
            iconName={'minus'}
            size={32}
            onPress={() => setNewPeople({ ...newPeople, number: newPeople.number - 1 })}
            style={styles.button}
          />
        </View>
        <View style={styles.decisionBox}>
          <TouchableOpacity onPress={register} style={styles.orderButton}>
            <Text style={styles.orderText}>追加</Text>
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
    flex: 1.0,
    borderRadius: 5,
    marginBottom: '75%',
    padding: 40,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputBox: {
    height: 40,
    width: 250,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#EEEEEE',
    borderWidth: 1,
    borderColor: '#9F9F9F',
    borderRadius: 5,
  },
  nameBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
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
    width: 250,
    color: '#707070',
    fontWeight: 'bold'
  },
  numberText: {
    fontSize: 32,
    color: '#707070',
    fontWeight: 'bold'
  },
  priceBox: {
    flex: 1,
    width: 250,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
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
    width: 100,
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

export default AddPeopleModal;