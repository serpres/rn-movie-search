import React from 'react';
import {StyleSheet, TextInput as RNTextInput} from 'react-native';

import {Colors} from '../../../consts';

export default function TextInput({style, ...rest}) {
  return <RNTextInput style={[styles.input, style]} {...rest} />;
}

const styles = StyleSheet.create({
  input: {
    borderColor: Colors.gray,
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 10,
  },
});
