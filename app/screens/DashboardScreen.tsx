import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { appScreenProp, DashboardRouteProps, Prayers, State } from '../types';
import styles from '../styles/screens/DashboardScreenStyles';
import SettingsSvg from '../assets/svg/settings.svg';
import CreatePrayerForm from '../components/CreatePrayerForm';
import PrayerList from '../components/PrayerList';
import { useSelector } from 'react-redux';

function DashboardScreen() {
  const navigation = useNavigation<appScreenProp>();
  const [tabToShow, setTabToShow] = useState('My prayers');
  const prayersData = useSelector((state: State) => state.prayers);
  const route = useRoute<DashboardRouteProps>();
  console.log('routeID>>> ' + route.params.id);

  const checkedPrayers: (Prayers | undefined)[] = prayersData.map((item) => {
    if (item.checked && item.columnId == route.params.id) {
      return item;
    }
  });
  const uncheckedPrayers: (Prayers | undefined)[] = prayersData.map((item) => {
    if (!item.checked && item.columnId == route.params.id) {
      return item;
    }
  });

  let dashboardBody = (
    <View>
      <CreatePrayerForm columnId={route.params.id} />
      <PrayerList
        checkedPrayers={checkedPrayers}
        uncheckedPrayers={uncheckedPrayers}
      />
    </View>
  );
  if (tabToShow == 'subscribed') {
    dashboardBody = (
      <View>
        <PrayerList
          checkedPrayers={checkedPrayers}
          uncheckedPrayers={uncheckedPrayers}
        />
      </View>
    );
  }

  return (
    <ScrollView style={styles.contentWrapper}>
      <View style={styles.header}>
        <View style={styles.titleWrapper}>
          <Text style={styles.screenTitle}>To Do</Text>
          <Pressable
            style={styles.settingsBtn}
            onPress={() => {
              console.log('settings');
            }}>
            <SettingsSvg width="24" height="24" />
          </Pressable>
        </View>
        <View style={styles.tabWrapper}>
          <Pressable
            style={
              tabToShow == 'My prayers'
                ? styles.activeScreenTab
                : styles.screenTab
            }
            onPress={() => {
              setTabToShow('My prayers');
              console.log('My prs');
            }}>
            <Text
              style={
                tabToShow == 'My prayers'
                  ? styles.activeScreenTabText
                  : styles.screenTabText
              }>
              MY PRAYERS
            </Text>
          </Pressable>
          <Pressable
            style={
              tabToShow == 'subscribed'
                ? styles.activeScreenTab
                : styles.screenTab
            }
            onPress={() => {
              setTabToShow('subscribed');
              console.log('subs');
            }}>
            <Text
              style={
                tabToShow == 'subscribed'
                  ? styles.activeScreenTabText
                  : styles.screenTabText
              }>
              SUBSCRIBED
            </Text>
          </Pressable>
        </View>
      </View>
      {dashboardBody}
    </ScrollView>
  );
}

export default DashboardScreen;
