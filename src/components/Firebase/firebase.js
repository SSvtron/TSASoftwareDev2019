import app from 'firebase/app';
import 'firebase/auth';

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

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);

    this.auth = app.auth();
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
}

export default Firebase;
