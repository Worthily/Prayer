import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import AuthInput from '../components/AuthInput';
import AuthButton from '../components/AuthButton';
import { Form, Field } from 'react-final-form';
import styles from '../styles/screens/AuthenticationScreenStyles';
import { useNavigation } from '@react-navigation/native';
import { authScreenProp, State } from '../types';
import { SIGNUP } from '../navigations/constants';
import { useDispatch, useSelector } from 'react-redux';
import {
  onErrorActionCreator,
  requestSignInActionCreator,
} from '../store/saga/User/actions';
import { validationEmail, validationPass } from '../store/validation';

function AuthenticationScreen() {
  const navigation = useNavigation<authScreenProp>();
  const user = useSelector((state: State) => state.user);
  const dispatch = useDispatch();
  const [formState, setFormState] = useState({ email: '', password: '' });

  function onSubmit() {
    console.log('clicked auth ' + formState.email);
    dispatch(
      requestSignInActionCreator({
        email: formState.email,
        password: formState.password,
      }),
    );
  }

  return (
    <View>
      <View style={styles.authImageWrapper}>
        <Image
          style={styles.authImage}
          source={require('../assets/images/userIcon.png')}
        />
      </View>
      <View>
        <Text style={styles.authTitle}>Welcome to Prayer</Text>
        <Text style={styles.authSubTitle}>Please Sign-in here</Text>
        <Form
          onSubmit={onSubmit}
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
              <AuthButton lable={'Sign-in'} onClick={handleSubmit} />
            </View>
          )}
        />
      </View>
      <View style={styles.goToSignUpBtnWrapper}>
        <Text>Need a new account?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(SIGNUP);

            dispatch(
              onErrorActionCreator({
                errorExists: false,
                errorText: '',
              }),
            );
          }}>
          <Text style={styles.authGoToSignUpBtn}>Sign-up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default AuthenticationScreen;
