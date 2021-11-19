import React from 'react';
import {StyleSheet, View} from 'react-native';

import TextInput from '../common/text-input';
import Button from '../common/button';

import Picker from '../common/picker';

export default function SearchForm() {
  const filters = [
    {
      label: 'Any type',
      value: '',
    },
    {
      label: 'Movie',
      value: 'movie',
    },
    {
      label: 'Series',
      value: 'series',
    },
    {
      label: 'Episode',
      value: 'episode',
    },
  ];
  return (
    <View>
      <TextInput placeholder="Search..." />
      <View style={styles.filters}>
        <Picker style={styles.picker} data={filters} />
        <TextInput style={styles.yearInput} placeholder="Year" />
      </View>

      <Button color="light">Search</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  filters: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  yearInput: {
    flexGrow: 1,
    marginLeft: 10,
    paddingLeft: 0,
    textAlign: 'center',
    width: 40,
  },
  picker: {flexGrow: 10},
});
