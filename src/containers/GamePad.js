import React, { Component, View, Text, StyleSheet } from 'react-native';

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
    this.state = {
      players: [
        {
          player: 1,
          value: 20
        },
        {
          player: 2,
          value: 20
        }
      ]
    };
    this.handleReset = this.handleReset.bind(this);
    this.handleValueUpdate = this.handleValueUpdate.bind(this);
  }

  handleReset() {
    this.setState({
      players: [
        {
          player: 1,
          value: 20
        },
        {
          player: 2,
          value: 20
        }
      ]
    })
  }

  handleValueUpdate(playerNumber, valueChange) {
    this.setState({
      players: this.state.players.map((player, i) => {
        if(playerNumber == player.player) {
          player.value += valueChange;
        }
        return player;
      })
    })
  }

  render() {
    const {players} = this.state;
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

export default GamePad;
