import React from 'react';
import { View, Text, Button, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { authScreenProp, column } from '../../types';
import styles from '../../styles/components/ColumnStyles';

function Column(props: { title: string; onPress(): void }) {
  return (
    <View>
      <Pressable
        style={styles.columnsWrapper}
        onPress={() => {
          props.onPress();
        }}>
        <Text style={styles.columnTitle}>{props.title}</Text>
      </Pressable>
    </View>
  );
}
export default Column;
