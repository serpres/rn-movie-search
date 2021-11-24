import React, {useEffect, useState, useCallback} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';

import {Colors} from '../../consts';
import {search} from '../../resources/search.api';

import {Text} from '../../components/common';

const FoundItem = ({item}) => {
  return (
    <View style={styles.foundItem}>
      <Text type="h3" color="dark">
        {item.Title}
      </Text>

      <Text style={styles.description}>
        {item.Type}, {item.Year}
      </Text>

      {item.Poster === 'N/A' ? (
        <Text>(No image)</Text>
      ) : (
        <Image source={{uri: item.Poster}} style={styles.poster} />
      )}
    </View>
  );
};

export default function Search({route}) {
  const {searchQuery, type, year} = route.params.searchParams;

  const [searchData, setSearchData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getSearchResult = useCallback(() => {
    search(searchQuery, type, year)
      .then(({data}) => setSearchData(data.Search))
      .then(() => setIsLoading(false))
      .catch(error => console.log(error));
  }, [searchQuery, type, year]);

  useEffect(() => {
    getSearchResult();
    return () => {};
  }, [getSearchResult]);

  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator size="large" />}
      {!isLoading && !searchData && <Text>Nothing was found</Text>}
      <FlatList
        data={searchData}
        keyExtractor={item => item.imdbID}
        renderItem={FoundItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
  },
  poster: {
    width: 350,
    height: 500,
    borderRadius: 5,
  },
  foundItem: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: Colors.light,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  description: {
    textTransform: 'capitalize',
  },
});
