import React, {Component} from 'react';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import * as reducers from '../../reducers';
import GamePad from '../GamePad';

const reducer = combineReducers(reducers)
const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GamePad />
      </Provider>
    )
  }
}

export default App;
