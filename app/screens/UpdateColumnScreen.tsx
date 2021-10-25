import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { appScreenProp, UpdateColumnRouteProps } from '../types';
import styles from '../styles/screens/CreateColumnScreenStyles';
import { Form, Field } from 'react-final-form';
import { useDispatch } from 'react-redux';
import { updateColumnTitleActionCreator } from '../store/saga/Columns/actions';
import { MYDESK } from '../navigations/constants';
import ColumnInput from '../components/ColumnInput';

function UpdateColumnScreen() {
  const navigation = useNavigation<appScreenProp>();
  const dispatch = useDispatch();
  const [formState, setFormState] = useState({ title: '' });
  const route = useRoute<UpdateColumnRouteProps>();

  function onSubmit() {
    if (formState.title.trim() !== '') {
      dispatch(
        updateColumnTitleActionCreator({
          id: route.params.id,
          title: formState.title,
        }),
      );
      setFormState({ title: '' });
      navigation.navigate(MYDESK);
    }
  }

  return (
    <View style={styles.createColumnWrapper}>
      <Text style={styles.createColumnScreenTitle}>Update column</Text>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <>
            <Field
              name="title"
              value={formState.title}
              component={ColumnInput}
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

export default UpdateColumnScreen;
