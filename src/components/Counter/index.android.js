import React, { Component, View, Text } from 'react-native';
import Button from '../Button';

const Counter = ({player, value, handleValueInc, handleValueDec}) => (
  <View>
    <Text>
      Player {player}
    </Text>
    <Text>
      {value}
    </Text>
    <Button text="Inc" onPress={() => handleValueInc()} />
    <Button text="Dec" onPress={() => handleValueDec()} />
  </View>
)

export default Counter;
