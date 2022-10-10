import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from '../../redux/action/Auth.action';



export default function SignUp({ navigation }) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch();

  const auth1 = useSelector(state => state.user)

  const handleSignIn = () => {
        dispatch(signupUser({ email, password }))
    }


  return (
    <View>
      <View style={styles.wellComeBOX}>
        {/* <Text style={styles.welcome}>Welcome! </Text>
                <Text style={styles.EnterData}>Enter your data to continue</Text> */}
        <Image style={styles.neb} source={require('../../assets/images/neb.png')} />

      </View>

      <View style={styles.UserBox}>
        <AntDesign name='user' style={styles.InputIcon} />
        <TextInput style={styles.TextInput}
          placeholder='Your Full Name'
          // onChangeText={(text) => setEmail(text)}
        />
      </View>

      <View style={styles.MobileBox}>
        <Feather name='voicemail' style={styles.InputIcon} />
        <TextInput style={styles.TextInput}
          placeholder='Email Id'
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      {/* ----------------------LOCK INPUT --------------------- */}
      <View style={styles.LockBox}>
        <Feather name='lock' style={styles.InputIcon} />
        <TextInput style={styles.TextInput}
          placeholder='Password'
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity>
          <AntDesign name='eyeo' style={styles.eyeIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.ORbox}>
                <View style={styles.FirstBorder}></View>
                <Text style={styles.OR}>OR</Text>
                <View style={styles.SecondBorder}></View>
            </View>

      <View>
        <TouchableOpacity
         onPress={() => handleSignIn()}>
          <View style={styles.SignInButton}>
            <Text style={styles.SignInText}>SignUp</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.back}>If You Back log in?</Text>
        </TouchableOpacity>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  wellComeBOX: {
    height: 53,
    width: 200,
    alignSelf: 'center',
    marginTop: 15,
  },
  neb: {
    height: 80,
    width: 110,
    marginLeft: 50,
    margin: 350,
    bottom: 350
  },
  UserBox: {
    flexDirection: 'row',
    backgroundColor: '#E1E5EA',
    height: 50,
    width: 350,
    borderRadius: 10,
    marginTop: 50,
    alignSelf: 'center'
  },
  LockBox: {
    flexDirection: 'row',
    backgroundColor: '#E1E5EA',
    height: 50,
    width: 350,
    borderRadius: 10,
    marginTop: 20,
    alignSelf: 'center',
    // marginTop: 20,
  },
  eyeIcon: {
    marginTop: 15,
    marginLeft: -30,
    marginBottom: 11,
    fontSize: 20,
    justifyContent: 'flex-end'
  },
  MobileBox: {
    flexDirection: 'row',
    backgroundColor: '#E1E5EA',
    height: 50,
    width: 350,
    borderRadius: 10,
    marginTop: 20,
    alignSelf: 'center'
  },
  ORbox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 61
},
FirstBorder: {
  borderWidth: 1,
  width: '30%',
  borderColor: 'gray'
},
OR: {
  fontFamily: 'Poppins-Medium',
  fontSize: 17,
  marginRight: 10,
  marginLeft: 10,
},
SecondBorder: {
  borderWidth: 1,
  width: '30%',
  borderColor: 'gray'
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
    top: 4,
    left: 12
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
    marginTop: 200
  },
  SignInText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    alignSelf: 'center',
    bottom: -7,
  },
  back:{
    // color:'black',
    fontFamily:'Poppins-Medium',
    left:140,
    top:11,
    fontSize:14
  }
}) 