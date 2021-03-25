import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Home = (props) => (
  <View>
    <Text>Home screen</Text>
    <Button title='Go to About' onPress={() => props.navigation.navigate('About')} />
  </View>
);

const About = () => {
  return (
    <View>
      <Text>About screen</Text>
    </View>
  )
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            gestureEnabled: true,
          }}
        />
        <Stack.Screen
          name="About"
          component={About}
          options={{
            gestureEnabled: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
