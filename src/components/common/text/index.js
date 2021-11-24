import React from 'react';
import {StyleSheet, Text as RNText} from 'react-native';

import {Colors} from '../../../consts';

export default function Text({
  children,
  type,
  bold,
  color,
  borderBottom,
  style,
  ...rest
}) {
  return (
    <RNText
      style={[
        styles.text,
        type ? styles[type] : null,
        color ? styles[color] : color,
        bold ? styles.bold : null,
        borderBottom ? styles.borderBottom : null,
        style,
      ]}
      {...rest}>
      {children}
    </RNText>
  );
}

const styles = StyleSheet.create({
  text: {
    paddingVertical: 5,
  },
  h1: {
    fontSize: 48,
  },
  h2: {
    fontSize: 32,
  },
  h3: {
    fontSize: 18,
  },
  button: {
    fontSize: 18,
    textAlign: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
  light: {
    color: Colors.light,
  },
  dark: {
    color: Colors.dark,
  },
  primary: {
    color: Colors.primary,
  },
  error: {
    color: Colors.error,
  },
  secondary: {
    color: Colors.secondary,
  },
  borderBottom: {
    borderBottomColor: Colors.gray,
    borderBottomWidth: 1,
  },
});
