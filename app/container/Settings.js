import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput  } from 'react-native'
import React from 'react'
import { signOut } from '../../redux/action/Auth.action'
import { dispatch } from 'react-native-start/src/Screens/Navigator/CustomDrawer/events'
import { useState } from 'react'

export default function Settings() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignOut = () => (dispatch) => {
    console.log();
    dispatch(signOut())
  }

  return(
    <View>
      <TouchableOpacity
        onPress={() => handleSignOut()}>
        <View style={styles.SignInButton}>

          <Text style={styles.SignOutText}>Sign Out</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  SignInButton: {
    height: 50,
    width: 325,
    backgroundColor: '#DA7F8F',
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 61
  },
  SignOutText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    alignSelf: 'center',
    marginTop: 15,
  },

}) 