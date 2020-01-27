import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// import the core Firebase SDK
import * as firebase from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAaivfEfCkBl5UR6bJqqlwhDhlceFzrxJA',
	authDomain: 'studyzone-official.firebaseapp.com',
	databaseURL: 'https://studyzone-official.firebaseio.com',
	projectId: 'studyzone-official',
	storageBucket: 'studyzone-official.appspot.com',
	messagingSenderId: '214583740333',
	appId: '1:214583740333:web:03111cc9f885a33de20324',
	measurementId: 'G-FX04ERNDHY'
};

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>, document.getElementById('root'));

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>, document.getElementById('root'));

firebase.analytics();
