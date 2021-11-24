import React from 'react';
import {StyleSheet, TextInput as RNTextInput} from 'react-native';

import Text from '../text';

import {Colors} from '../../../consts';

export default function TextInput({
  style,
  value,
  onChangeText,
  error,
  ...rest
}) {
  return (
    <>
      <RNTextInput
        style={[styles.input, error ? styles.error : null, style]}
        value={value}
        onChangeText={onChangeText}
        {...rest}
      />
      {error && (
        <Text style={styles.errorText} color="error">
          {error}
        </Text>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: Colors.gray,
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
  },
  error: {
    borderColor: Colors.error,
  },
  errorText: {
    color: Colors.error,
    position: 'absolute',
    alignSelf: 'flex-end',
    right: 10,
    top: 10,
  },
});
