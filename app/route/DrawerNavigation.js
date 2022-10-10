import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import AppliCation from '../../app/container/AppliCation';
import Settings from '../../app/container/Settings';
import { BottomNavigation } from './BottomNavigation';
import Counter from '../../app/container/Counter';
import Post from '../container/Post';
import ExampleDemo from '../container/ExampleDemo';
import Comments from '../container/Comments';
import SignUp from '../container/SignIn';
import { useSelector } from 'react-redux';
import { AuthStack } from './StackNavigatiobn';
import SignIn from '../container/SignIn';
// import comments from '../container/comments';


const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
  let authdata = useSelector(state => state.auth)

  console.log('authdataauthdataauthdata', authdata);

  if (authdata.auth === null) {
  return(
    <Drawer.Navigator initialRouteName='SignIn'>
    <Drawer.Screen
      options={{ headerShown: false, }}
      name='SignIn' component={AuthStack}
    />
  </Drawer.Navigator>
  )
  } else {
    return (
      <Drawer.Navigator initialRouteName='AppliCation'>
        <Drawer.Screen
          options={{ headerShown: false, }}
          name='Home' component={BottomNavigation}
        />
        <Drawer.Screen name="Counter" component={Counter} />
        <Drawer.Screen name="post" component={Post} />
        <Drawer.Screen
          options={{ headerShown: false, }}
          name='Settings' component={Settings}
        />
        <Drawer.Screen name="ExampleDemo" component={ExampleDemo} />
        <Drawer.Screen name="comments" component={Comments} />
      </Drawer.Navigator>
    )
  }

  return (
    <Drawer.Navigator initialRouteName='ProductTab'>
      <Drawer.Screen name="Home" component={BottomNavigation}
        options={{
          headerShown: false
        }} />

      <Drawer.Screen name="AuthStack" component={AuthStack}
        options={{
          headerShown: false
        }} />
    </Drawer.Navigator>
  );
}
