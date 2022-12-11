import React from 'react';
import { StatusBar, Platform } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import MapScreen from './src/screens/MapScreen';
import { enableLatestRenderer } from 'react-native-maps';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailScreen from './src/screens/DetailScreen';

const Stack = createNativeStackNavigator();
function App() {
  let barStyle = Platform.OS === 'ios' ? 'default' : 'light-content';
  enableLatestRenderer();

  return (
    <>
      <StatusBar barStyle={barStyle} animated={true} translucent={false} />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="User Listing">
          <Stack.Screen
            name="User Listing"
            component={HomeScreen}
            options={{
              headerStyle: {
                backgroundColor: '#64b5f6',
              },
            }}
          />
          <Stack.Screen
            name="User Locations"
            component={MapScreen}
            options={{
              headerStyle: {
                backgroundColor: '#64b5f6',
              },
            }}
          />
          <Stack.Screen
            name="User Detail"
            component={DetailScreen}
            options={{
              headerStyle: {
                backgroundColor: '#64b5f6',
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
