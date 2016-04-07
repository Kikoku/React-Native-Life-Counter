import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Counter from './components/Counter';

class counter extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.playerTwo}>
          <Counter/>
        </View>
        <View>
          <Counter />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  playerTwo: {
    transform: [{rotate: '180deg'}]
  }
});

AppRegistry.registerComponent('counter', () => counter);
