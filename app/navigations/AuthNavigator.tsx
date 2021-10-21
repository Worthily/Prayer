import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Authentication from '../screens/AuthenticationScreen';
import Registration from '../screens/RegistrationScreen';
import { SIGNIN, SIGNUP } from './constants';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={SIGNIN}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={SIGNIN} component={Authentication} />
      <Stack.Screen name={SIGNUP} component={Registration} />
    </Stack.Navigator>
  );
};
export default AuthNavigator;
