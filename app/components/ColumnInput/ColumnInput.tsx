import React from 'react';
import { TextInput } from 'react-native';
import styles from '../../styles/components/CreateColumnInputStyles';
import { FieldRenderProps } from 'react-final-form';

interface AuthInput extends FieldRenderProps<string> {
  onChangeText(val: string): void;
  value: string;
}

const ColumnInput: React.FC<AuthInput> = (props) => {
  return (
    <TextInput
      placeholder="Column title"
      value={props.value}
      style={styles.createPrayerInput}
      onChangeText={(text: string) => {
        props.onChangeText(text);
      }}
    />
  );
};

export default ColumnInput;
