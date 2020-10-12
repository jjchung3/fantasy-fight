import React from 'react'
import { Text, View, Button } from 'react-native'
import { MainScreenNavigationProp } from '../../../types/NavigationTypes'

type Props = { navigation: MainScreenNavigationProp }

const MainView = ({ navigation }: Props ) => {
  return (
    <View style={{backgroundColor: 'blue'}}>
      <Text>MainView</Text>
      <Button
        title={'toDemo'}
        onPress={() =>
          navigation.navigate('Demo')
        }
      >
        PRESS
      </Button>
    </View>
  )
}

export default MainView