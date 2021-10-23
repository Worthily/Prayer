import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyDesk from '../screens/MyDeskScreen';
import Dashboard from '../screens/DashboardScreen';
import PrayerDetails from '../screens/PrayerDetailsScreen';
import {
  MYDESK,
  DASHBOARD,
  PRAYERDETAILS,
  CREATECOLUMN,
  UPDATECOLUMN,
  UPDATEPRAYER,
} from './constants';
import CreateColumnScreen from '../screens/CreateColumnScreen';
import UpdateColumnScreen from '../screens/UpdateColumnScreen';
import UpdatePrayerScreen from '../screens/UpdatePrayerScreen';

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
      <Stack.Screen name={CREATECOLUMN} component={CreateColumnScreen} />
      <Stack.Screen name={UPDATECOLUMN} component={UpdateColumnScreen} />
      <Stack.Screen name={UPDATEPRAYER} component={UpdatePrayerScreen} />
    </Stack.Navigator>
  );
};
export default AppNavigator;
