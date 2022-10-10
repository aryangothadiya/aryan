import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppliCation from '../container/AppliCation';
import SecPage from '../container/SecPage';
import { Header } from 'react-native/Libraries/NewAppScreen';
import Counter from '../container/Counter';
import SignIn from '../container/SignIn';
import SignUp from '../container/SignUp';
import Forgot from '../container/Forgot';

const Stack = createNativeStackNavigator();

const productStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={AppliCation }
            //    options={{ headerShown:false}}
              
          />
            <Stack.Screen name="SecPage" component={SecPage} />
        </Stack.Navigator>
    )
}


const AuthStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SignIn" component={SignIn}
            //    options={{ headerShown:false}} 
            />
            <Stack.Screen name="SignUp" component={SignUp} />            
            <Stack.Screen name="Forgot" component={Forgot} />            

        </Stack.Navigator>
    )
}



export { productStack,AuthStack }