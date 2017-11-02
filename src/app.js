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
      apiKey: '*****',
      authDomain: '*****',
      databaseURL: '*****',
      storageBucket: '*******',
      messagingSenderId: '*******'
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
