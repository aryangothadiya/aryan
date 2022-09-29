import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { productStack } from './StackNavigatiobn';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Settings from '../../app/container/Settings';

const Tab = createBottomTabNavigator();

export const BottomNavigation = () => {
    return (
<Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused
                return <Ionicons name={'ios-home'} size={size} color={color} />;
                 
              } else if (route.name === 'Settings') {
                iconName = focused ? 'ios-list-box' : 'ios-list';
              }
              return <Ionicons name={'ios-settings'} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}
      >
            <Tab.Screen name="Home" component={productStack} 
                  options={{
                    headerShown:false,
                    title: 'Home',
                    headerTitleAlign:'center',
                    headerStyle: {
                      backgroundColor: '#D5D8DC',
                    },
                    headerTintColor: 'black',
                    headerTitleStyle: {
                      fontWeight: 'bold',
                    },
                  }}/>
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
    )
}