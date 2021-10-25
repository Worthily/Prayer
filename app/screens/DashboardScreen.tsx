import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { appScreenProp, DashboardRouteProps, Prayers, State } from '../types';
import styles from '../styles/screens/DashboardScreenStyles';
import SettingsSvg from '../assets/svg/settings.svg';
import CreatePrayerForm from '../components/CreatePrayerForm';
import PrayerList from '../components/PrayerList';
import { useSelector, useDispatch } from 'react-redux';
import { logOutActionCreator } from '../store/saga/User/actions';

function DashboardScreen() {
  const navigation = useNavigation<appScreenProp>();
  const dispatch = useDispatch();
  const [tabToShow, setTabToShow] = useState('My prayers');
  const prayersData = useSelector((state: State) => state.prayers);
  const prayersLoader = useSelector((state: State) => state.loader.prayers);
  const route = useRoute<DashboardRouteProps>();
  const column = useSelector((state: State) => {
    return state.columns.find((item) => {
      return route.params.id == item.id;
    });
  });
  let dashboardBody: JSX.Element = <></>;
  if (!prayersLoader) {
    const checkedPrayers: (Prayers | undefined)[] = prayersData.map((item) => {
      if (item.checked && item.columnId == route.params.id) {
        return item;
      }
    });
    const uncheckedPrayers: (Prayers | undefined)[] = prayersData.map(
      (item) => {
        if (!item.checked && item.columnId == route.params.id) {
          return item;
        }
      },
    );

    dashboardBody = (
      <View>
        <CreatePrayerForm columnId={route.params.id} />
        <PrayerList
          columnId={route.params.id}
          checkedPrayers={checkedPrayers}
          uncheckedPrayers={uncheckedPrayers}
        />
      </View>
    );
    if (tabToShow == 'subscribed') {
      dashboardBody = (
        <View>
          <PrayerList
            columnId={route.params.id}
            checkedPrayers={checkedPrayers}
            uncheckedPrayers={uncheckedPrayers}
          />
        </View>
      );
    }
  }

  return (
    <ScrollView style={styles.contentWrapper}>
      <View style={styles.header}>
        <View style={styles.titleWrapper}>
          <Text style={styles.screenTitle}>{column?.title}</Text>
          <Pressable
            style={styles.settingsBtn}
            onPress={() => {
              dispatch(logOutActionCreator());
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
      {prayersLoader ? <Text>Loading...</Text> : dashboardBody}
    </ScrollView>
  );
}

export default DashboardScreen;
