import { StackNavigationProp } from '@react-navigation/stack'

export type RootStackParamList = {
  Main: undefined
  Demo: undefined
}

export type MainScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Main'
>

export type DemoScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Demo'
>