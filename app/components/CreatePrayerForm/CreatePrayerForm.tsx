import React, { useState } from 'react';
import { View, Text, Button, Pressable, TextInput } from 'react-native';
import styles from '../../styles/components/CreatePrayerInputStyle';
import AddSvg from '../../assets/svg/add.svg';
import { Form, Field } from 'react-final-form';
import { useDispatch } from 'react-redux';
import CreatePrayerInput from '../CreatePrayerInput';
import { requestCreatePrayerActionCreator } from '../../store/saga/Prayers/actions';

function CreatePrayerForm(props: { columnId: number }) {
  const dispatch = useDispatch();
  const [formState, setFormState] = useState({ title: '' });

  function onSubmit() {
    if (formState.title.trim() !== '') {
      dispatch(
        requestCreatePrayerActionCreator({
          columnId: props.columnId,
          title: formState.title,
          description: '',
        }),
      );
      setFormState({ title: '' });
    }
  }

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <View style={styles.inputWrapper}>
          <Pressable style={styles.createPrayerBtn} onPress={handleSubmit}>
            <AddSvg width="24" height="24" />
          </Pressable>
          <View>
            <Field
              name="title"
              value={formState.title}
              component={CreatePrayerInput}
              placeholder="Add a prayer"
              style={styles.createPrayerInput}
              onChangeText={(val: string) => {
                setFormState({ ...formState, title: val });
              }}
            />
          </View>
        </View>
      )}
    />
  );
}
export default CreatePrayerForm;
