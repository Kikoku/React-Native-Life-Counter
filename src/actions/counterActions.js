import * as types from './actionTypes';

export function incrementPlayerOne() {
  return {
    type: types.INCREMENT_PLAYER_ONE
  }
}

export function decrementPlayerOne() {
  return {
    type: types.DECREMENT_PLAYER_ONE
  }
}

export function incrementPlayerTwo() {
  return {
    type: types.INCREMENT_PLAYER_TWO
  }
}

export function decrementPlayerTwo() {
  return {
    type: types.DECREMENT_PLAYER_TWO
  }
}

export function reset() {
  return {
    type: types.RESET
  }
}
