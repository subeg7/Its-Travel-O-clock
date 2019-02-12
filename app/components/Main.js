import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../reducers/test';
import Home from './home';
// import AppNavigator from './AppNavigator';

const store = createStore(reducer);

export default class Main extends React.Component {
  constructor(props) {
    super(props)
    // ...
  }

  addFriend = (index) => {
    // ...
  }

  render() {
    return (
      // <Home currentFriends={"10"}/>
      <Provider store={ store }>
            <Home
              screenProps={ {
                  currentFriends: this.state.currentFriends,
                  possibleFriends: this.state.possibleFriends,
                  addFriend: this.addFriend,
                } }

            />
      </Provider>
    );
  }
}