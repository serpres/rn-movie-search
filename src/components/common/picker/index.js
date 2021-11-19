import React from 'react';
import {View, StyleSheet} from 'react-native';

import {Picker as RNPicker} from '@react-native-picker/picker';

import {Colors} from '../../../consts';

export default function Picker({style, onValueChange, data}) {
  return (
    <View style={[styles.picker, style]}>
      <RNPicker onValueChange={onValueChange}>
        {data.map(item => (
          <RNPicker.Item label={item.label} value={item.value} />
        ))}
      </RNPicker>
    </View>
  );
}

const styles = StyleSheet.create({
  picker: {
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: 20,
    marginVertical: 10,
    flexGrow: 1,
  },
});
