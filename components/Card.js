import React from 'react';
import { View } from 'react-native';

export default Card = ({ children }) => {
  return <View style={cardStyle}>{children}</View>;
};

const cardStyle = {
  height: 115,
  minWidth: 300,
  paddingTop: 15,
  paddingRight: 30,
  paddingBottom: 15,
  paddingLeft: 30,
  backgroundColor: '#fafafa',
  borderRadius: 5,
  color: '1f1f1f',
};
