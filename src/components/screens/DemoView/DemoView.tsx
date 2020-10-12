import React from 'react'
import { Text, View, Button } from 'react-native'
import { DemoScreenNavigationProp } from '../../../types/NavigationTypes'

type Props = { navigation: DemoScreenNavigationProp }

const DemoView = React.memo(({ navigation }: Props ) => {
  return (
    <View>
      <Text>MainView</Text>
      <Button
        title='to Home'
        onPress={() => {
          navigation.navigate('Main')
        }}
      />
    </View>
  )
})

export default DemoView
