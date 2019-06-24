/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator,createStackNavigator,createAppContainer } from 'react-navigation';
import Home from './page/Home.js';
import My from './page/My.js';
import Setting from './page/Setting.js';
// import AppNav from './navigators/navigator';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const tabNav = createBottomTabNavigator({
    Home:{
        screen:Home,
        navigationOptions:{
          tabBarLabel:'首页'
          
        }
    },
    Setting:{
        screen:Setting,
        navigationOptions:{
          tabBarLabel:'设置'
        }
    },
    My:{
        screen:My,
        navigationOptions:{
          tabBarLabel:'我的',
          header:null
        }
    }
}, {
  initialRouteName:'Home'
}

)


const App = createAppContainer(
  createStackNavigator({
    tabNav:{
      screen:tabNav,
      navigationOptions:{
        gesturesEnabled:true,
      }
    }
  })
);

export default App;

