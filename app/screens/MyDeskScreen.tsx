import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, Button, Pressable } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { authScreenProp, Columns, State } from '../types';
import styles from '../styles/screens/MyDeskScreenStyles';
import Column from '../components/Column/';
import SvgImg from '../assets/svg/add.svg';
import { useSelector } from 'react-redux';
import { DASHBOARD, CREATECOLUMN } from '../navigations/constants';

function MyDeskScreen() {
  const navigation = useNavigation<authScreenProp>();
  const columnsData = useSelector((state: State) => state.columns);
  // console.log('columnsStateGot>>>' + ' ' + columnsData2[0].id);

  const columns: JSX.Element[] = columnsData.map((item) => {
    return (
      <Column
        key={item.id}
        id={item.id}
        title={item.title}
        onPress={() => {
          navigation.navigate(DASHBOARD, { id: item.id });
        }}></Column>
    );
  });

  return (
    <View style={styles.contentWrapper}>
      <View style={styles.header}>
        <Text style={styles.screenTitle}>My Desk</Text>
        <Pressable
          onPress={() => {
            console.log('plus');
            navigation.navigate(CREATECOLUMN);
          }}>
          <SvgImg width="16" height="16" />
        </Pressable>
      </View>
      <View style={styles.columnsWrapper}>{columns}</View>
    </View>
  );
}

export default MyDeskScreen;
