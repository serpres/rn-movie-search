import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import {TextInput, Button, Picker} from '../common';

export default function SearchForm({navigation}) {
  const [searchQuery, setSearchQuery] = useState();
  const [pickedValue, setPickedValue] = useState();
  const [year, setYear] = useState();

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

  const onSearch = async () => {
    navigation.navigate('Search', {
      searchParams: {searchQuery, type: pickedValue, year},
    });
  };

  return (
    <View>
      <TextInput
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Search..."
      />
      <View style={styles.filters}>
        <Picker
          style={styles.picker}
          data={filters}
          selectedValue={pickedValue}
          onValueChange={itemValue => setPickedValue(itemValue)}
        />
        <TextInput
          value={year}
          onChangeText={setYear}
          keyboardType="numeric"
          style={styles.yearInput}
          placeholder="Year"
        />
      </View>
      <View style={styles.buttons}>
        <Button
          style={styles.button}
          secondary
          color="light"
          onPress={() => {
            setSearchQuery('');
            setPickedValue('');
            setYear('');
          }}>
          Reset filters
        </Button>

        <Button style={styles.button} color="light" onPress={onSearch}>
          Search
        </Button>
      </View>
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
  picker: {
    flexGrow: 10,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flexGrow: 1,
    marginHorizontal: 10,
  },
});
