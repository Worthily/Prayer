import React from 'react';
import { FieldRenderProps } from 'react-final-form';
import { TextInput } from 'react-native';

interface AuthInput extends FieldRenderProps<string> {
  onChangeText(val: string): void;
}

const CommentTextInput: React.FC<AuthInput> = (props) => {
  return (
    <TextInput
      placeholder="Add a comment..."
      onChangeText={(text: string) => {
        props.onChangeText(text);
      }}
    />
  );
};

export default CommentTextInput;
