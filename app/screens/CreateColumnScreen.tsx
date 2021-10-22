import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { authScreenProp } from '../types';
import styles from '../styles/screens/CreateColumnScreenStyles';
import { Form, Field } from 'react-final-form';
import { useDispatch } from 'react-redux';
import CreateColumnInput from '../components/CreateColumnInput';
import { requestCreateColumnActionCreator } from '../store/saga/Columns/actions';
import { MYDESK } from '../navigations/constants';

function CreateColumnScreen() {
  const navigation = useNavigation<authScreenProp>();
  const dispatch = useDispatch();
  const [formState, setFormState] = useState({ title: '' });

  function onSubmit() {
    console.log('clicked add prauer ' + formState.title);
    dispatch(
      requestCreateColumnActionCreator({
        title: formState.title,
      }),
    );
    setFormState({ title: '' });
    navigation.navigate(MYDESK);
  }

  return (
    <View style={styles.createColumnWrapper}>
      <Text style={styles.createColumnScreenTitle}>Create column</Text>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <>
            <Field
              name="title"
              value={formState.title}
              component={CreateColumnInput}
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

export default CreateColumnScreen;
