// import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import { useSelector } from 'react-redux';
import { State } from '../types';

const AppNavigationContainer = () => {
  const isLogged = useSelector((state: State) => {
    return state.user.logged;
  });
  return (
    <NavigationContainer>
      {isLogged ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
export default AppNavigationContainer;
