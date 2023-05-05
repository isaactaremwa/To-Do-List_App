import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DefaultPage from './src/defaultPage';
import Done from './src/Done';
import ToDo from './src/ToDo';
import Task from './src/Task';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Provider } from 'react-redux';
import { Store } from './src/logo/redux/store';

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        // activeBackgroundColor: '#0080ff',
        // inactiveBackgroundColor: '#777777',
        // showLabel: true,
        // labelStyle: {fontSize: 14, fontWeight: 'bold'},
        tabBarIcon: ({focused, size, color}) => {
          let iconName;
          if (route.name === 'To-Do') {
            iconName = 'clipboard-list';
            size = focused ? 25 : 20;
            color = focused ? '#0080ff' : '#555';
          } else if (route.name === 'Completed') {
            iconName = 'clipboard-check';
            size = focused ? 25 : 20;
            color = focused ? '#0080ff' : '#555';
          }
          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        // activeBackgroundColor: '#0080ff',
        // inactiveBackgroundColor: '#777777',
        showLabel: true,
        labelStyle: {fontSize: 14, fontWeight: 'bold'},
      }}
      >
      <Tab.Screen
        name="My Tasks"
        component={ToDo}
        options={{
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: 'bold',
          },
          headerTintColor: 'goldenrod',
        }}
      />
      {/* <Tab.Screen
        name="Completed"
        component={Done}
        options={{
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: 'bold',
          },
          headerTintColor: 'goldenrod',
        }}
      /> */}
    </Tab.Navigator>
  );
}

const RootStack = createStackNavigator();

function ToDOList() {
  return (
    <Provider store={Store}>
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="DefaultPage"
        screenOptions={{
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: 'bold',
          },
          headerTintColor: 'goldenrod',
        }}>
        <RootStack.Screen
          name="defaultPage"
          component={DefaultPage}
          options={{headerShown: false}}
        />

        <RootStack.Screen
          name="My-Tasks"
          component={HomeTabs}
          options={{headerShown: false}}
        />

        <RootStack.Screen
          name="Task"
          component={Task}
        />
      </RootStack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
export default ToDOList;
