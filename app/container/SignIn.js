import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useEffect } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { googleLogin, signinUser, signupUser } from '../../redux/action/Auth.action';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';


export default function SignIn({navigation}) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch();

    const auth1 = useSelector(state => state.user)

    const handleSignup = () => {
        console.log({ email, password });
        dispatch(signinUser({ email, password }))
    }

    const handleGoogleAuth = async () => {
        dispatch(googleLogin())
    }

    useEffect(() => {
        GoogleSignin.configure({
            webClientId: '137832083080-o3q62slg4amo3o0c6som5qpak9vn1r74.apps.googleusercontent.com',
            offlineAccess: true
        });
    }, [])

    // const handleSignIn = () => {
    //     dispatch(signinUser({ email, password }))
    // }



    return (
        <View style={styles.container}
        >
            {/* ----------------------WELCOME BOX --------------------- */}
            <View style={styles.wellComeBOX}>
                {/* <Text style={styles.welcome}>Welcome! </Text>
                <Text style={styles.EnterData}>Enter your data to continue</Text> */}
                <Image style={styles.neb} source={require('../../assets/images/neb.png')} />

            </View>
            {/* ----------------------MOBILE INPUT --------------------- */}
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
            {/* ----------------------FORGIT PASS--------------------- */}
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity>
                    <MaterialIcons name='crop-square' style={styles.squarIcon}></MaterialIcons>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.Remeberme}>Remember Me</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
                    <Text style={styles.Forgotpass}>Forgot password ?</Text>
                </TouchableOpacity>
            </View>
            {/* ----------------------NINE BOX  --------------------- */}
            <View style={styles.ORbox}>
                <View style={styles.FirstBorder}></View>
                <Text style={styles.OR}>OR</Text>
                <View style={styles.SecondBorder}></View>
            </View>
            {/* ----------------------IMAGESSS --------------------- */}
            <View style={styles.IconsBox}>
                {/* ----------------------GOOGLE ICON --------------------- */}
                <View>
                    <TouchableOpacity
                        onPress={() => handleGoogleAuth()}>
                        <AntDesign name='google' style={[styles.IconsBoxes, { color: 'black' }]} />
                    </TouchableOpacity>
                </View>
                {/* ----------------------APPLE ICON --------------------- */}
                <View>
                    <TouchableOpacity>
                        <AntDesign name='apple1' style={[styles.IconsBoxes, { color: 'black' }, { marginTop: 59 }]} />
                    </TouchableOpacity>
                </View>
                {/* ----------------------TWITER ICON --------------------- */}
                {/* <View>
                    <TouchableOpacity>
                        <AntDesign name='twitter' style={[styles.IconsBoxes, { color: 'black' }, { marginTop: 59 }]} />
                    </TouchableOpacity>
                </View> */}

            </View>

            {/* ----------------------SIGN IN BUTTON --------------------- */}
            <TouchableOpacity
                onPress={() => handleSignup()}>
                <View style={styles.SignInButton}>

                    <Text style={styles.SignInText}>Sign In</Text>
                </View>
            </TouchableOpacity>

            {/* <TouchableOpacity
                onPress={() => handleSignIn()}>
                <View style={styles.SignInButton}>

                    <Text style={styles.SignInText}>Sign In</Text>
                </View>
            </TouchableOpacity> */}

            {/* ----------------------SIGN up line --------------------- */}
            <View style={{ flexDirection: 'row', marginTop: 10, alignSelf: 'center' }}>
                <Text style={styles.SingUPText}>Don't have any account?</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('SignUp')}
                >
                    <Text style={[styles.SingUPText, { color: '#DA7F8F' }]}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    neb: {
        height: 80,
        width: 110,
        marginLeft: 50,
        margin: 350,
        bottom: 350
    },
    container: {
        flex: 1,
        backgroundColor: '#F6F6F6'
        // marginLeft:15,
        // marginRight:15   
    },

    wellComeBOX: {
        height: 53,
        width: 200,
        alignSelf: 'center',
        marginTop: 15,
    },
    welcome: {
        width: 125,
        height: 29,
        fontFamily: 'Montserrat-SemiBold',
        color: '#DA7F8F',
        fontSize: 24,
        marginBottom: 6,
        alignSelf: 'center'

    },
    EnterData: {
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
    },


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
        fontSize: 16,
        alignSelf: 'center',
        width: 300,
        top: 4
    },
    LockBox: {
        flexDirection: 'row',
        backgroundColor: '#E1E5EA',
        height: 50,
        width: 350,
        borderRadius: 10,
        marginTop: 57,
        alignSelf: 'center',
        marginTop: 20,
    },
    eyeIcon: {
        marginTop: 15,
        marginLeft: -30,
        marginBottom: 11,
        fontSize: 20,
        justifyContent: 'flex-end'
    },
    squarIcon: {
        marginLeft: 25,
        marginTop: 12,
        marginRight: 10,
        fontSize: 20,
        fontWeight: 'bold'       //=========font weight ===========//
    },
    Remeberme: {
        marginRight: 61,
        marginTop: 12,
        fontFamily: 'Poppins-Medium',
    },
    Forgotpass: {
        marginLeft: 11,
        marginTop: 12,
        fontFamily: 'Poppins-Medium',
        color: '#E23E57'
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
    IconsBox: {
        flexDirection: 'row',
        alignSelf: 'center',
        left: 25
    },
    IconsBoxes: {
        fontSize: 30,
        marginTop: 60,
        marginRight: 40
        ,
    },

    SignInButton: {
        height: 40,
        width: 310,
        backgroundColor: '#E23E57',
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 61
    },
    SignInText: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'Montserrat-SemiBold',
        alignSelf: 'center',
        marginTop: 10,
    },
    SingUPText: {
        fontFamily: 'Poppins-Medium',
        marginRight: 6,
        // color:'#DA7F8F'
    }
})