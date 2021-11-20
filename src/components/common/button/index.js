import React from 'react';
import {Pressable, StyleSheet} from 'react-native';

import {Colors} from '../../../consts';

import Text from '../text';

export default function Button({
  style,
  children,
  secondary,
  color,
  bold,
  onPress,
  ...rest
}) {
  return (
    <Pressable
      style={({pressed}) => [
        styles.button,
        secondary ? styles.secondary : styles.primary,
        pressed ? styles.pressed : styles.default,
        style,
      ]}
      onPress={onPress}
      {...rest}>
      <Text
        bold={bold ? bold : null}
        color={color ? color : 'dark'}
        type="button">
        {children}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  primary: {
    backgroundColor: Colors.primary,
  },
  secondary: {
    backgroundColor: Colors.secondary,
  },
  button: {
    borderRadius: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  pressed: {
    opacity: 0.8,
  },
  end: {
    alignSelf: 'flex-end',
  },
  center: {
    alignSelf: 'center',
  },
});
