import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import LoadingScreen from './app/screens/LoadingScreen';
import MenuPage from './app/screens/MenuPage';
import Megan from './app/screens/Megan';
import SMM from './app/screens/SMM';
import Wearable from './app/screens/Wearable';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Menu Page" 
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1c1c1e'
          }
        }}>
        <Stack.Screen 
          name="Loading Screen" 
          component={LoadingScreen}
          options={{}}/>

        <Stack.Screen 
          name="Menu Page" 
          component={MenuPage} 
          options={{}}/>

        <Stack.Screen 
          name="Megan" 
          component={Megan}
          options={{}}/>

        <Stack.Screen 
          name="Monitor" 
          component={SMM}
          options={{}}/>

        <Stack.Screen 
          name="Wearable" 
          component={Wearable}
          options={{}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});