import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from '../../styles/components/PrayerStyles';
import HandsSvg from '../../assets/svg/prayer.svg';
import UserIconSvg from '../../assets/svg/user.svg';
import CheckSvg from '../../assets/svg/check.svg';
import Swipeout from 'react-native-swipeout';
import {
  deletePrayerActionCreator,
  setPrayerCheckedActionCreator,
} from '../../store/saga/Prayers/actions';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { appScreenProp } from '../../types';
import { UPDATEPRAYER } from '../../navigations/constants';

function Prayer(props: {
  id: number;
  title: string;
  description: string;
  checked: boolean;
  onPress(): void;
  columnId: number;
}) {
  const navigation = useNavigation<appScreenProp>();
  const [prayerIsChecked, setPrayerIsChecked] = useState(props.checked);
  const dispatch = useDispatch();
  let titleToShow = props.title;
  if (titleToShow.length > 15) {
    titleToShow = titleToShow.slice(0, 15) + '...';
  }

  const buttons = [
    {
      text: 'Update',
      backgroundColor: '#BFB393',
      onPress: () => {
        console.log('update');
        navigation.navigate(UPDATEPRAYER, {
          id: props.id,
          columnId: props.columnId,
        });
      },
    },
    {
      text: 'Delete',
      backgroundColor: '#AC5253',
      onPress: () => {
        console.log('dell');
        dispatch(deletePrayerActionCreator({ id: props.id }));
      },
    },
  ];

  return (
    <Swipeout right={buttons}>
      <Pressable
        onPress={() => {
          props.onPress();
        }}>
        <View style={styles.prayerWrapper}>
          <View style={styles.prayerBorder}>
            <View style={styles.prayerStick}>{/* палочка */}</View>
            <Pressable
              style={styles.prayerCheckbox}
              onPress={() => {
                setPrayerIsChecked(!prayerIsChecked);
                dispatch(
                  setPrayerCheckedActionCreator({
                    id: props.id,
                    description: props.description,
                    checked: !props.checked,
                  }),
                );
              }}>
              {prayerIsChecked ? (
                <View></View>
              ) : (
                <CheckSvg width="12" height="11" />
              )}
            </Pressable>
            <Text
              style={
                prayerIsChecked ? styles.prayerTitle : styles.prayerCheckedTitle
              }>
              {titleToShow}
            </Text>
            <View style={styles.iconsWrapper}>
              <View style={styles.userCountWrapper}>
                <UserIconSvg width="24" height="24" />
                <Text style={styles.userCount}>3</Text>
              </View>
              <View style={styles.prayersCountWrapper}>
                <HandsSvg width="29" height="29" />
                <Text style={styles.prayersCount}>123</Text>
              </View>
            </View>
          </View>
        </View>
      </Pressable>
    </Swipeout>
  );
}
export default Prayer;
