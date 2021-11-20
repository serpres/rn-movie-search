import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, View, StatusBar, StyleSheet} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Main from './screens/main';
import Search from './screens/search';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Movie searcher" component={Main} />
            <Stack.Screen name="Search" component={Search} />
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
});

export default App;
