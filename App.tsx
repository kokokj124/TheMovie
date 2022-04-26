import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { Provider } from 'react-redux';
import { store } from 'app/store';
import Page from '@screens/page/Page';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '@screens/home/Home';
import WorkThrouth from '@screens/work-throuth/WorkThrouth';
import HotMovie from '@components/panner/HotMovie';
import { SafeAreaProvider } from 'react-native-safe-area-context';


const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Page' screenOptions={{headerShown: false}}>
            <Stack.Screen name="Page" component={Page} />
            <Stack.Screen name="Home" component={Home} options={{ title: 'Overview' }}/>
            <Stack.Screen name="WorkThrouth" component={WorkThrouth}/>
            <Stack.Screen name="HotMovie" component={HotMovie}/>
          </Stack.Navigator>
      </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
