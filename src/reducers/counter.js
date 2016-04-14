import * as types from '../actions/actionTypes';

const defaultState = {
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

const counter = (state = defaultState, action = {}) => {
  switch (action.type) {

    case types.RESET:
      return {
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
      }

    case types.INCREMENT_PLAYER_ONE:
      return {
        ...state,
        players: state.players.map((player) => {
          if(player.player == 1) {
            player.value = player.value + 1
          }
          return player;
        })
      }

    case types.DECREMENT_PLAYER_ONE:
      return {
        ...state,
        players: state.players.map((player) => {
          if(player.player == 1) {
            player.value = player.value - 1
          }
          return player;
        })
      }

    case types.INCREMENT_PLAYER_TWO:
      return {
        ...state,
        players: state.players.map((player) => {
          if(player.player == 2) {
            player.value = player.value + 1
          }
          return player;
        })
      }

    case types.DECREMENT_PLAYER_TWO:
      return {
        ...state,
        players: state.players.map((player) => {
          if(player.player == 2) {
            player.value = player.value - 1
          }
          return player;
        })
      }

    default:
      return state;
  }
}

export default counter;
