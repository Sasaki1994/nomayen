import React from 'react';
import { View } from 'react-native';

export default Card = ({ children }) => {
  return <View style={cardStyle}>{children}</View>;
};

const cardStyle = {
  // marginLeft: 20,
  // marginRight: 20,
  // marginTop: 20,
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
