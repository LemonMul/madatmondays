// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

// 각 스크린 import
import HomeScreen from './src/screens/home/HomeScreen';
import MyScreen from './src/screens/myPage/MyScreen';
import Home1Screen from './src/screens/home/Home1Screen';
import Home2Screen from './src/screens/home/Home2Screen';
import My1Screen from './src/screens/myPage/My1Screen';
import My2Screen from './src/screens/myPage/My2Screen';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const MyStack = createStackNavigator();

const HomeStackScreen = () => (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Home1" component={Home1Screen} />
      <HomeStack.Screen name="Home2" component={Home2Screen} />
    </HomeStack.Navigator>
);

const MyStackScreen = () => (
    <MyStack.Navigator>
      <MyStack.Screen name="My" component={MyScreen} />
      <MyStack.Screen name="My1" component={My1Screen} />
      <MyStack.Screen name="My2" component={My2Screen} />
    </MyStack.Navigator>
);

const App = () => {
  return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="My" component={MyStackScreen} />
        </Tab.Navigator>
      </NavigationContainer>
  );
};

export default App;
