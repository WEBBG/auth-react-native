import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  state = { loggedIn: null };

  componentWillMount(){
    // Initialize Firebase
    firebase.initializeApp({
      apiKey: 'AIzaSyB27IBkV7ijTMu9UULLfV1E3Xz6Dy1o-SQ',
      authDomain: 'auth-4bc97.firebaseapp.com',
      databaseURL: 'https://auth-4bc97.firebaseio.com',
      storageBucket: 'auth-4bc97.appspot.com',
      messagingSenderId: '410779656731'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({ loggedIn: true });
      }else{
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View style={styles.logoutStyle}>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </View>
        );
        break;
      case false:
        return <LoginForm />;
      break;
      default:
        return <Spinner size='large' />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
          { this.renderContent() }
      </View>
    );
  }
}

const styles = {
  logoutStyle: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
  }
}

export default App;
