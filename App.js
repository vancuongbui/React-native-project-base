import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';   //a middleware, therefoere need to use with applyMiddleware
// import reducers from folder reducers
import firebase from 'firebase';
import { YellowBox } from 'react-native';
import reducers from './src/reducers';
import { StyleSheet, Text, View } from 'react-native';
import Main from './src/app/Main';

export default class App extends React.Component {
  constructor(props) {
    super(props);        
    YellowBox.ignoreWarnings(['Warning: isMounted', 'Warning: Failed', 'warning: Setting']);
    this.state = { loggedIn: null, };    //null mean the state is unknown
    const config = ({
        apiKey: 'AIzaSyA8ryJnTd9JUbW12F4d91ZyAQAiWfQRD40',
        authDomain: 'iapetus-auth.firebaseapp.com',
        databaseURL: 'https://iapetus-auth.firebaseio.com',
        projectId: 'iapetus-auth',
        storageBucket: 'iapetus-auth.appspot.com',
        messagingSenderId: '80149794474'
    });
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Main />
        </View>
      </Provider>      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    flex: 1,
    backgroundColor: '#fff',
  },
});
