import React, { Component, View, Text } from 'react-native';
import Button from './Button';

const Counter = ({player, value, handleValueUpdate}) => (
  <View>
    <Text>
      Player {player}
    </Text>
    <Text>
      {value}
    </Text>
    <Button text="Inc" onPress={() => handleValueUpdate(player, 1)} />
    <Button text="Dec" onPress={() => handleValueUpdate(player, -1)} />
  </View>
)

export default Counter;
