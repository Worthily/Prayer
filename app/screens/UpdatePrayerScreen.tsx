import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { appScreenProp, UpdatePrayerRouteProps } from '../types';
import styles from '../styles/screens/CreateColumnScreenStyles';
import { Form, Field } from 'react-final-form';
import { useDispatch } from 'react-redux';
import { DASHBOARD } from '../navigations/constants';
import UpdatePrayerInput from '../components/UpdatePrayerInput';
import { updatePrayerTitleActionCreator } from '../store/saga/Prayers/actions';

function UpdatePrayerScreen() {
  const navigation = useNavigation<appScreenProp>();
  const dispatch = useDispatch();
  const [formState, setFormState] = useState({ title: '' });
  const route = useRoute<UpdatePrayerRouteProps>();

  function onSubmit() {
    if (formState.title.trim() !== '') {
      dispatch(
        updatePrayerTitleActionCreator({
          id: route.params.id,
          title: formState.title,
        }),
      );
      setFormState({ title: '' });
      navigation.navigate(DASHBOARD, { id: route.params.columnId });
    }
  }

  return (
    <View style={styles.createColumnWrapper}>
      <Text style={styles.createColumnScreenTitle}>Update prayer</Text>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <>
            <Field
              name="title"
              value={formState.title}
              component={UpdatePrayerInput}
              onChangeText={(val: string) => {
                setFormState({ title: val });
              }}
            />
            <Pressable
              onPress={handleSubmit}
              style={styles.createColumnSubmitBtn}>
              <Text style={styles.createColumnBtnText}>Submit</Text>
            </Pressable>
          </>
        )}
      />
    </View>
  );
}

export default UpdatePrayerScreen;
