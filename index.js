/** @format */
// Import a library to help create a component
import React from 'React';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => (
	<View>
   		<Header headerText={'Albums111'} />
   		<AlbumList />
   	</View>
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App)