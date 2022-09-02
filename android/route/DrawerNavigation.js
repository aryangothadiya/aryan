import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import AppliCation from '../../app/container/AppliCation';
import Settings from '../../app/container/Settings';
import { BottomNavigation } from './BottomNavigation';
import Counter from '../../app/container/Counter';


const Drawer = createDrawerNavigator();

export const  DrawerNavigation = () => {
    return (
      <Drawer.Navigator initialRouteName='ProductTab'>
        <Drawer.Screen name="Home" component={BottomNavigation}
         options={{
          headerShown:false}} />
        <Drawer.Screen name="Setting" component={Settings} />
        <Drawer.Screen name="Counter" component={Counter} />
      </Drawer.Navigator>
    );
  }
