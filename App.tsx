import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { RootStackParamList } from './src/types/NavigationTypes'
import MainView from './src/components/screens/MainView/MainView'
import DemoView from './src/components/screens/DemoView/DemoView'

const RootStack = createStackNavigator<RootStackParamList>()

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <NavigationContainer>
        <RootStack.Navigator initialRouteName='Main'>
          <RootStack.Screen name='Main' component={MainView} />
          <RootStack.Screen name='Demo' component={DemoView} />
        </RootStack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default App