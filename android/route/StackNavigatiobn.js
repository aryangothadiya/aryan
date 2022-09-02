import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppliCation from '../../app/container/AppliCation';
import SecPage from '../../app/container/SecPage';
import { Header } from 'react-native/Libraries/NewAppScreen';
import Counter from '../../app/container/Counter';

const Stack = createNativeStackNavigator();

const productStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={AppliCation }
               options={{ headerShown:false}}
              
          />
            <Stack.Screen name="SecPage" component={SecPage} />
        </Stack.Navigator>
    )
}

export { productStack }