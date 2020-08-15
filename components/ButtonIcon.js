import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default ButtonIcon = ({ iconName, text, size, onPress, style }) => {
  // iconName : FontAwoesome5 of https://icons.expo.fyi/
  return (
    <TouchableOpacity activeOpacity={0.2} onPress={onPress} style={style}>
      <FontAwesome5
        name={iconName}
        size={size}
        color="#707070"
        style={{ marginBottom: 5 }}
      />
      {!!text && (
        <Text style={{ ...styles.textStyle, fontSize: 0.3 * size }}>
          {text}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: '#707070',
    letterSpacing: 2.0,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
