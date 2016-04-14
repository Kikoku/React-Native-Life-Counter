import React, { Component, View, Text, StyleSheet } from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as counterActions from '../actions/counterActions';

import Counter from '../components/Counter';
import Button from '../components/Button';

const styles = StyleSheet.create({
  playerTwo: {
    transform: [{rotate: '180deg'}]
  }
});

class GamePad extends Component {
  constructor() {
    super();
  }

  render() {
    const {players} = this.props.state;
    const {actions} = this.props;

    return (
      <View>
        <View style={styles.playerTwo}>
          <Counter
            handleValueInc={actions.incrementPlayerOne}
            handleValueDec={actions.decrementPlayerOne}
            player={players[0].player}
            value={players[0].value}
          />
        </View>
        <View>
          <Button
            onPress={() => actions.reset()}
            text="reset"
          />
        </View>
        <View>
          <Counter
            handleValueInc={actions.incrementPlayerTwo}
            handleValueDec={actions.decrementPlayerTwo}
            player={players[1].player}
            value={players[1].value}
          />
        </View>
      </View>
    )
  }
}

export default connect(state => ({
  state: state.counter
}),
(dispatch) => ({
  actions: bindActionCreators(counterActions, dispatch)
}))(GamePad);
