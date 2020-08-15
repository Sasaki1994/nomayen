import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

export default function ({ check, size }) {
  if (check) {
    return <FontAwesome5 name="check-circle" size={size} color="red" />;
  } else {
    return <FontAwesome5 name="circle" size={size} color="#1f1f1f" />;
  }
}
