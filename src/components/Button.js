import React, { Component, View, Text, TouchableWithoutFeedback } from 'react-native';

const Button = ({text, onPress}) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <Text>
      {text}
    </Text>
  </TouchableWithoutFeedback>
)

export default Button;
