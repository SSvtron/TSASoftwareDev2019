import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require('firebase/app');

// Add the Firebase products that you want to use
require('firebase/auth');
require('firebase/firestore');

// TODO: Replace the following with your app's Firebase project configuration
var firebaseConfig = {
	apiKey: 'AIzaSyAaivfEfCkBl5UR6bJqqlwhDhlceFzrxJA',
	authDomain: 'studyzone-official.firebaseapp.com',
	databaseURL: 'https://studyzone-official.firebaseio.com',
	projectId: 'studyzone-official',
	storageBucket: 'studyzone-official.appspot.com',
	messagingSenderId: '214583740333',
	appId: '1:214583740333:web:03111cc9f885a33de20324',
	measurementId: 'G-FX04ERNDHY'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

import './styles/index.css';

class App extends React.PureComponent {
	render() {
		return (
			<Switch>
				<Route exact path='/' component={SignUp} />
				<Route path='/signin' component={Login} />
			</Switch>
		);
	}
}

export default App;
