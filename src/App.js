import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, View, StatusBar, StyleSheet} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Main from './screens/main';
import Search from './screens/search';

import {Colors} from './consts';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Movie searcher"
              component={Main}
              options={{
                title: 'Movie searcher',
                headerStyle: styles.header,
                headerTintColor: Colors.light,
                headerTitleStyle: styles.headerTitle,
              }}
            />
            <Stack.Screen
              options={{
                title: 'Search',
                headerStyle: styles.header,
                headerTintColor: Colors.light,
                headerTitleStyle: styles.headerTitle,
              }}
              name="Search"
              component={Search}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  header: {
    backgroundColor: Colors.primary,
  },
  headerTitle: {
    fontWeight: 'bold',
  },
});

export default App;
