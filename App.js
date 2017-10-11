import React, {Component} from 'react';
import { Provider } from 'react-redux';
import Calc from './src/containers/Calc';
import configureStore from './src/store/configureStore'

const store = configureStore()

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Calc />
      </Provider>
    );
  }
}
