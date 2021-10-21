import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AuthInput from '../components/AuthInput';
import AuthButton from '../components/AuthButton';
import styles from '../styles/screens/RegistrationScreenStyles';
import { SIGNIN } from '../navigations/constants';
import { useNavigation } from '@react-navigation/native';
import { authScreenProp, State } from '../types';
import {
  validationEmail,
  validationName,
  validationPass,
} from '../store/validation';
import { Form, Field } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';
import {
  onErrorActionCreator,
  requestSignUpActionCreator,
} from '../store/saga/User/actions';

function RegistrationScreen() {
  const navigation = useNavigation<authScreenProp>();
  const dispatch = useDispatch();
  const user = useSelector((state: State) => state.user);
  const [formState, setFormState] = useState({
    email: '',
    name: '',
    password: '',
  });

  function onSubmit() {
    dispatch(
      requestSignUpActionCreator({
        email: formState.email,
        name: formState.name,
        password: formState.password,
      }),
    );
  }

  return (
    <View>
      <View>
        <Text style={styles.authTitle}>Welcome to Prayer</Text>
        <Text style={styles.authSubTitle}>Please Sign-up here</Text>
        <Form
          onSubmit={onSubmit}
          initialValues={{ email: '', password: '' }}
          render={({ handleSubmit }) => (
            <View>
              <Field
                name="email"
                component={AuthInput}
                lable={'Email'}
                valid={validationEmail}
                onChangeText={(val: string) => {
                  setFormState({ ...formState, email: val });
                }}
              />
              <Field
                name="name"
                component={AuthInput}
                lable={'Name'}
                valid={validationName}
                onChangeText={(val: string) => {
                  setFormState({ ...formState, name: val });
                }}
              />
              <Field
                name="password"
                component={AuthInput}
                lable={'Password'}
                secureTextEntry={true}
                valid={validationPass}
                onChangeText={(val: string) => {
                  setFormState({ ...formState, password: val });
                }}
                errorExists={user.errorExists}
                errorText={user.errorText}
              />
              <AuthButton lable={'Sign-up'} onClick={handleSubmit} />
            </View>
          )}
        />
      </View>
      <View style={styles.goToSignInBtnWrapper}>
        <Text>Already have an account?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(SIGNIN);
            dispatch(
              onErrorActionCreator({
                errorExists: false,
                errorText: '',
              }),
            );
          }}>
          <Text style={styles.authGoToSignInBtn}>Sign-in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default RegistrationScreen;
