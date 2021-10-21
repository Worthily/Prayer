import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyDesk from '../screens/MyDeskScreen';
import Dashboard from '../screens/DashboardScreen';
import PrayerDetails from '../screens/PrayerDetailsScreen';
import { MYDESK, DASHBOARD, PRAYERDETAILS } from './constants';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={MYDESK}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={DASHBOARD} component={Dashboard} />
      <Stack.Screen name={MYDESK} component={MyDesk} />
      <Stack.Screen name={PRAYERDETAILS} component={PrayerDetails} />
    </Stack.Navigator>
  );
};
export default AppNavigator;
