import React from 'react';
import {View, StyleSheet} from 'react-native';

import {Text} from '../../components/common';

import SearchForm from '../../components/search-form';
import Recommended from '../../components/recommended';

export default function Main({navigation}) {
  return (
    <View style={styles.body}>
      <View style={styles.section}>
        <SearchForm navigation={navigation} />
      </View>

      <View style={styles.section}>
        <Text type="h2" color="dark" borderBottom>
          Recommended
        </Text>
        <Recommended />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flexGrow: 1,
  },
  section: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
});
