import React from 'react';
import {View, StyleSheet, KeyboardAvoidingView} from 'react-native';

import Text from '../../components/common/text';

import SearchForm from '../../components/search-form';

export default function Main() {
  return (
    <View style={styles.body}>
      <View style={styles.sectionOne}>
        <SearchForm />
      </View>

      <View style={styles.sectionTwo}>
        <Text type="h2" color="dark" borderBottom>
          Recommended
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flexGrow: 1,
  },
  sectionOne: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  sectionTwo: {
    paddingHorizontal: 10,
    flexGrow: 1,
  },
});
