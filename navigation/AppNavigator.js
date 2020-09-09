import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ButtonIcon from '../components/ButtonIcon';
import Home from '../screens/Home';
import Check from '../screens/Check';
import Drink from '../screens/Drink';
import { destroyPeople } from '../store/actions/people';
import { destroyDrinks } from '../store/actions/drink';
import { useDispatch } from 'react-redux';

const Stack = createStackNavigator();

const headerIcon = (position, iconName, onPress) => {
  let style;
  switch (position) {
    case 'Left':
      style = styles.leftButton;
      break;
    case 'Right':
      style = styles.rightButton;
      break;
    default:
      style = styles.leftButton;
      break;
  }

  return () => (
    <View style={style}>
      <ButtonIcon iconName={iconName} text={''} size={18} onPress={onPress}/>
    </View>
  );
};

const AppNavigator = () => {
  const dispatch = useDispatch();
  const destroy = () => {
    dispatch(destroyPeople());
    dispatch(destroyDrinks());
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: '参加者一覧',
            headerLeft: headerIcon('Left', 'sync-alt', destroy),
          }}
        />
        <Stack.Screen
          name="Check"
          component={Check}
          options={{
            headerTitle: '会計',
          }}
        />
        <Stack.Screen
          name="Drink"
          component={Drink}
          options={({ route }) => ({
            headerTitle: route.params.title,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  leftButton: {
    flex: 1,
    marginLeft: 20,
    justifyContent: 'center',
  },

  rightButton: {
    flex: 1,
    marginRight: 20,
    justifyContent: 'center',
  },
});

export default AppNavigator;
