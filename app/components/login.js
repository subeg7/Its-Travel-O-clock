// var React = require('react-native');
import React from 'react';
React.createClass=require('create-react-class');

import {
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import {bindActionCreators} from 'react-redux';
import {connect}  from 'react-redux';
import * as Action from '../actions';

function mapStateToProps(state){return {user:state.userReducers.user};}
function mapDispatchToProps(dispatch){return bindActionCreators(Actions,dispatch);}

// var {View,TouchableHighlight, Text}=React;

var Login =React.createClass({
    onLoginButtonPress(){
        this.props.login({
            userName:'testUser',
            password:'12345'
        });
    },

    render(){
        return(
            <View>
                {
                    !this.props.user.loggedIn &&
                        <TouchableHighlight onPress={this.onLoginButtonPress}>
                            <Text>Log In</Text>
                        </TouchableHighlight>
                }
            </View>
        );
    },

    
});

export default connect(mapStateToProps,mapDispatchToProps)(Login);
