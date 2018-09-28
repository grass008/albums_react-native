/** @format */
// Import a library to help create a component
import React from 'React';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// Create a component
const App = () => (
   <Header headerText={'Albums111'} />
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App)