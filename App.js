import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/Stores';
import Main from './src/Screens/Auth/Containers/main';


export default class App extends Component {
  render() {
      return (
        <Provider store={store}>
          <Main/>
        </Provider>
      );
  }
}