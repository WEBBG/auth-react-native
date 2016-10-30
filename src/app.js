import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  componentWillMount(){
    // Initialize Firebase
    firebase.initializeApp({
      apiKey: 'AIzaSyB27IBkV7ijTMu9UULLfV1E3Xz6Dy1o-SQ',
      authDomain: 'auth-4bc97.firebaseapp.com',
      databaseURL: 'https://auth-4bc97.firebaseio.com',
      storageBucket: 'auth-4bc97.appspot.com',
      messagingSenderId: '410779656731'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
