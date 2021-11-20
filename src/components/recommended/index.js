import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View, Image, RefreshControl} from 'react-native';

import {getRandomRecommendation} from '../../resources/search.api';

import {Text} from '../common';

const RecommendedItem = ({item}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{item.Title}</Text>
    <Image style={styles.poster} source={{uri: item.Poster}} />
    <Text style={styles.title}>({item.Year})</Text>
  </View>
);

export default function Recommended() {
  const [recommended, setRecommended] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getRec = count => {
    setIsLoading(true);
    getRandomRecommendation(count)
      .then(data => setRecommended(data))
      .then(() => setIsLoading(false));
  };

  useEffect(() => {
    getRec(4);
  }, []);

  return (
    <View style={styles.recommendedContainer}>
      <FlatList
        numColumns={2}
        keyExtractor={item => item.imdbID}
        data={recommended}
        renderItem={RecommendedItem}
        refreshControl={
          <RefreshControl onRefresh={() => getRec(4)} refreshing={isLoading} />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  recommendedContainer: {
    flex: 1,
    padding: 5,
  },
  item: {
    width: '50%',
    alignItems: 'center',
    height: 170,
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
  },
  poster: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
  },
});
