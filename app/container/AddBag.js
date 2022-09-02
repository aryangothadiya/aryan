import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import Fontisto from 'react-native-vector-icons/Fontisto';

export default function AddBag() {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Fontisto name="shopping-bag-1" style={styles.imageIcon} color="black" size={50} />
            </View>

            <View>
                <Text style={styles.empty}>your bag is empty</Text>
            </View>

            <View>
                <Text style={styles.chose}>chose the product what you buy in future.</Text>
            </View>

            <TouchableOpacity>
                <View style={styles.cont}>
                    <Text style={styles.conti}>continue shopping</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.logi}>
                    <Text style={styles.login}>Login/Join</Text>
                </View>
            </TouchableOpacity>
        </SafeAreaView>


    )
}

const styles = StyleSheet.create({
    imageIcon: {
        marginTop: 330,
        marginLeft: 180,
    },
    empty: {
        fontSize: 20,
        color: 'black',
        marginLeft: 110,
        fontFamily: 'Poppins-Bold',
        marginTop: 6
    },
    chose :{
      fontSize:15,
      marginLeft:30,
      fontFamily: 'Poppins-Bold',
    },
    cont:{
        height:70,
        width:180,
        backgroundColor:'#E5E7E9',
        marginTop:210,
        marginLeft:11,
        borderRadius:10,
        borderWidth:1,
        // position:'absolute'
    },
    conti:{
        color:'black',
        fontSize:20,
        marginTop:18,
        marginLeft:8,
        borderColor:'black',
        fontFamily: 'poppins-Black',
        // position:'relative'
    },
    logi:{
        height:70,
        width:180,
        backgroundColor:'black',
        marginTop:-70,
        marginLeft:200,
        borderRadius:10,
        borderWidth:1
    },
    login:{
        color:'white',
        fontSize:20,
        marginTop:18,
        marginLeft:38,
        borderColor:'black',
        fontFamily: 'poppins-Black',
    }
})