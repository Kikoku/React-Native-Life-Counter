import React, { Component, View, Text } from 'react-native';
import Button from './Button';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      value: 20
    };
    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleValueChange(value) {
    this.setState({
      value: this.state.value + value
    })
  }

  handleReset() {
    this.setState({
      value: 20
    })
  }

  render() {
    return (
      <View>
        <Text>
          {this.state.value}
        </Text>
        <Button text="Inc" onPress={() => this.handleValueChange(1)} />
        <Button text="Dec" onPress={() => this.handleValueChange(-1)} />
        <Button text="Reset" onPress={() => this.handleReset()} />
      </View>
    )
  }
}

export default Counter;
