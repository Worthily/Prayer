import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from '../../styles/components/PrayerListStyles';
import { appScreenProp, PrayerDetailsRouteProps, Prayers } from '../../types';
import Prayer from '../Prayer';
import Swipeout from 'react-native-swipeout';
import { useNavigation, useRoute } from '@react-navigation/native';
import { PRAYERDETAILS } from '../../navigations/constants';

function PrayerList(props: {
  columnId: number;
  checkedPrayers: (Prayers | undefined)[];
  uncheckedPrayers: (Prayers | undefined)[];
}) {
  const [answeredPrayersShowed, setAnsweredPrayersShowed] = useState(false);
  const navigation = useNavigation<appScreenProp>();

  let hideShowAnsweredPrayersText = 'SHOW ANSWERED PRAYERS';
  if (answeredPrayersShowed) {
    hideShowAnsweredPrayersText = 'HIDE ANSWERED PRAYERS';
  }

  const checkedPrayers = props.checkedPrayers!.map((item) => {
    if (item) {
      if (item.checked) {
        return (
          <Prayer
            key={item.id}
            id={item.id}
            columnId={props.columnId}
            title={item.title}
            description={item.description}
            checked={item.checked}
            onPress={() => {
              console.log(item.id);
              navigation.navigate(PRAYERDETAILS, { id: item.id });
            }}
          />
        );
      }
    }
  });

  const uncheckedPrayers = props.uncheckedPrayers!.map((item) => {
    if (item) {
      if (!item.checked) {
        return (
          <Prayer
            key={item.id}
            id={item.id}
            columnId={props.columnId}
            title={item.title}
            description={item.description}
            checked={item.checked}
            onPress={() => {
              navigation.navigate(PRAYERDETAILS, { id: item.id });
            }}
          />
        );
      }
    }
  });

  return (
    <View>
      <View>{checkedPrayers}</View>
      <View style={styles.answeredPrayersBtnWrapper}>
        <Pressable
          style={styles.answeredPrayersBtn}
          onPress={() => {
            setAnsweredPrayersShowed(!answeredPrayersShowed);
          }}>
          <Text>{hideShowAnsweredPrayersText}</Text>
        </Pressable>
      </View>
      <View>{answeredPrayersShowed ? uncheckedPrayers : <View></View>}</View>
    </View>
  );
}
export default PrayerList;
