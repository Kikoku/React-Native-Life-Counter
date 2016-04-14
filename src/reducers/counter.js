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

const counter = (state = defaultState, action) = {
  switch (action.type) {

    case types.INCREMENT_PLAYER_ONE:
      return {
        ...state
      }

    case types.DECREMENT_PLAYER_ONE:
      return {
        ...state
      }

    case types.INCREMENT_PLAYER_TWO:
      return {
        ...state
      }

    case types.DECREMENT_PLAYER_TWO:
      return {
        ...state
      }

    default:
      return state;
  }
}

export default counter;
