import React, { Component, View, Text, StyleSheet } from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

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
    this.handleReset = this.handleReset.bind(this);
    this.handleValueUpdate = this.handleValueUpdate.bind(this);
  }

  handleReset() {

  }

  handleValueUpdate(playerNumber, valueChange) {

  }

  render() {
    const {players} = this.props.state;
    return (
      <View>
        <View style={styles.playerTwo}>
          <Counter
            handleValueUpdate={this.handleValueUpdate}
            player={players[0].player}
            value={players[0].value}
          />
        </View>
        <View>
          <Button
            onPress={() => this.handleReset()}
            text="reset"
          />
        </View>
        <View>
          <Counter
            handleValueUpdate={this.handleValueUpdate}
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
}), {

})(GamePad);
