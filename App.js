import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/Stores';
import {AppNavigator}  from './src/Navigations/appNavigation';
import { createAppContainer } from 'react-navigation';

let Navigation = createAppContainer(AppNavigator); 
export default class App extends Component {
  render() {
      return (
        <Provider store={store}>
         <Navigation />
        </Provider>
      );
  }
}