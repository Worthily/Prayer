import React from 'react';
import { TextInput } from 'react-native';
import styles from '../../styles/components/CreatePrayerInputStyle';
import AddSvg from '../../assets/svg/add.svg';
import { FieldRenderProps } from 'react-final-form';

interface AuthInput extends FieldRenderProps<string> {
  onChangeText(val: string): void;
}

const CreatePrayerInput: React.FC<AuthInput> = (props) => {
  return (
    <TextInput
      placeholder="Add a prayer"
      style={styles.createPrayerInput}
      onChangeText={(text: string) => {
        props.onChangeText(text);
      }}
    />
  );
};

export default CreatePrayerInput;
