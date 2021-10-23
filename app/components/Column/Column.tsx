import React from 'react';
import { View, Text, Button, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { appScreenProp, authScreenProp, Columns } from '../../types';
import styles from '../../styles/components/ColumnStyles';
import Swipeout from 'react-native-swipeout';
import { deleteColumnActionCreator } from '../../store/saga/Columns/actions';
import { useDispatch } from 'react-redux';
import { UPDATECOLUMN } from '../../navigations/constants';

function Column(props: { id: number; title: string; onPress(): void }) {
  const dispatch = useDispatch();
  const navigation = useNavigation<appScreenProp>();
  const buttons = [
    {
      text: 'Update',
      backgroundColor: '#BFB393',
      onPress: () => {
        console.log('update');
        navigation.navigate(UPDATECOLUMN, { id: props.id });
      },
    },
    {
      text: 'Delete',
      backgroundColor: '#AC5253',
      onPress: () => {
        console.log('dell');
        dispatch(deleteColumnActionCreator({ id: props.id }));
      },
    },
  ];

  return (
    <View style={styles.columnsWrapper}>
      <Swipeout key={props.id} style={styles.columnSwipeout} right={buttons}>
        <Pressable
          onPress={() => {
            props.onPress();
          }}>
          <Text style={styles.columnTitle}>{props.title}</Text>
        </Pressable>
      </Swipeout>
    </View>
  );
}
export default Column;
