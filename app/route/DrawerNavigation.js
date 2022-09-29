import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import AppliCation from '../../app/container/AppliCation';
import Settings from '../../app/container/Settings';
import { BottomNavigation } from './BottomNavigation';
import Counter from '../../app/container/Counter';
import Post from '../container/Post';
import ExampleDemo from '../container/ExampleDemo';
import Comments from '../container/Comments';
import SignUp from '../container/SignUp';
import { useSelector } from 'react-redux';
// import comments from '../container/comments';


const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
  let auth = useSelector(state => state.auth)

  console.log("dddddddddddddd", auth);

  return (
    <Drawer.Navigator initialRouteName='ProductTab'>
      <Drawer.Screen name="Home" component={BottomNavigation}
        options={{
          headerShown: false
        }} />
      <Drawer.Screen name="Setting" component={Settings} />
      <Drawer.Screen name="Counter" component={Counter} />
      <Drawer.Screen name="post" component={Post} />
      <Drawer.Screen name="ExampleDemo" component={ExampleDemo} />
      <Drawer.Screen name="comments" component={Comments} />
      <Drawer.Screen name="SignUp" component={SignUp} />
    </Drawer.Navigator>
  );
}
