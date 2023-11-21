import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from '../screens/Auth/Login';
import EmployeeList from '../screens/Employee/EmployeeList';
import AddEmployee from '../screens/Employee/AddEmployee';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Login" component={Login} />
  </Stack.Navigator>
);

const EmployeeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="EmployeeList" component={EmployeeList} />
    <Stack.Screen name="AddEmployee" component={AddEmployee} />
  </Stack.Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Auth" component={AuthStack} />
      <Tab.Screen name="Employee" component={EmployeeStack} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
