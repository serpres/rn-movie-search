import React, {useState} from 'react';
import {StyleSheet, View, Keyboard} from 'react-native';

import {TextInput, Button, Picker} from '../common';

export default function SearchForm({navigation}) {
  const [searchQuery, setSearchQuery] = useState();
  const [pickedValue, setPickedValue] = useState();
  const [year, setYear] = useState();
  const [error, setError] = useState();

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

  const onSearch = () => {
    if (searchQuery) {
      Keyboard.dismiss();
      setError('');
      navigation.navigate('Search', {
        searchParams: {searchQuery, type: pickedValue, year},
      });
    } else setError({queryInput: 'Cant be empty'});
  };

  const handleReset = () => {
    setSearchQuery('');
    setPickedValue('');
    setYear('');
    setError('');
    Keyboard.dismiss();
  };

  return (
    <View>
      <TextInput
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Search..."
        error={error?.queryInput}
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
          style={styles.resetFiltersButton}
          secondary
          color="light"
          onPress={handleReset}>
          Reset filters
        </Button>

        <Button style={styles.searchButton} color="light" onPress={onSearch}>
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
  searchButton: {
    flexGrow: 1,
  },
  resetFiltersButton: {
    marginRight: 10,
    flexGrow: 1,
  },
});
