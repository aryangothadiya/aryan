import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import AppliCation from './app/container/AppliCation'
import SecPage from './app/container/SecPage'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddBag from './app/container/AddBag';
import { BottomNavigation } from './app/route/BottomNavigation';
import { DrawerNavigation } from './app/route/DrawerNavigation';
import Front from './app/container/Front';
import { store } from './redux/store';
import { Provider } from 'react-redux'
import Forgot from './app/container/Forgot';
import CreateNewPassword from './app/container/SignUp';
// import CalcButton from './app/container/CalcButton'
// import CalcDisplay from './app/container/CalcDisplay'
//import CalcButton from './app/container/CalcScreen'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <DrawerNavigation />
        {/* <BottomNavigation/> */}
        {/* <AppliCation /> */}
        {/* <SecPage /> */}
        {/* <AddBag/> */}
        {/* <Front/> */}
        {/* <Forgot/> */}
        {/* <CreateNewPassword/> */}
      </NavigationContainer>
    </Provider>
  )
}