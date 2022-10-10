import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';


export default function Forgot({navigation}) {
  return (
    <View>
      {/* <View>
      <Image style={styles.neb} source={require('../../assets/images/')}/>
      </View> */}
      <View style={styles.MobileBox}>
        <Feather name='voicemail' style={styles.InputIcon} />
        <TextInput style={styles.TextInput}
          placeholder='Email Id'
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      <Text style={styles.inputtext}>Please Enter Your E-mail Addres To Recieve a Veryfication card</Text>

      <View>
      <TouchableOpacity>
        <View style={styles.SignInButton}>
          <Text style={styles.SignInText}>verify your link</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <Text>
          Back to log in
        </Text>
      </TouchableOpacity>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  MobileBox: {
    flexDirection: 'row',
    backgroundColor: '#E1E5EA',
    height: 50,
    width: 350,
    borderRadius: 10,
    marginTop: 57,
    alignSelf: 'center'
  },
  InputIcon: {
    marginRight: 9,
    marginLeft: 20,
    marginTop: 16,
    marginBottom: 11,
    fontSize: 20,
  },
  TextInput: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    alignSelf: 'center',
    width: 300,
    top: 4
  },
  inputtext: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    padding: 10,
    left: 15,
    top: 20,
    // textAlign: 'justify'
  },
  SignInButton: {
    height: 35,
    width: 250,
    backgroundColor: '#DA7F8F',
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 459
  },
  SignInText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    alignSelf: 'center',
    bottom:-7,
  },
}) 