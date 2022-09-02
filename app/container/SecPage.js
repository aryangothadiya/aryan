import { View, Text, ScrollView, FlatList, StyleSheet, TouchableOpacity, Image, TextInput, SafeAreaView } from 'react-native'
import React from 'react'
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../../assets/colors/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import { getBinaryCachePath } from 'node-sass/lib/extensions';

export default function SecPage() {

    const shoeflate = [
        {
            id: 1,
            Image: require('../../assets/images/nb.png')
        },
        {
            id: 2,
            Image: require('../../assets/images/nb22.png')
        },
        {
            id: 3,
            Image: require('../../assets/images/nb33.png')
        }
    ]

    const shoeses = ({ item }) => {
        console.log('item');
        return (
            <View >
                <Image style={styles.Image11} source={item.Image} />
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={shoeflate}
                        renderItem={shoeses}
                        keyExtractor={item => item.id}>

                    </FlatList>
                </View>


                <View style={styles.heartBox}>
                    <TouchableOpacity>
                        <MaterialIcons name="favorite-border" style={styles.imageIcon} color="#000" size={20} />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.text1}>XC-72 low-top</Text>
                    <Text style={styles.price}>$399</Text>
                </View>
                <View>
                    <Text style={styles.text2}>size chart :</Text>
                </View>
                <TouchableOpacity>
                    <View style={styles.addbox}>
                        <Text style={styles.addnum}>7</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.addbox2}>
                        <Text style={styles.addnum2}>8</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.addbox3}>
                        <Text style={styles.addnum3}>9</Text>
                    </View>
                </TouchableOpacity>

                <View>
                    <Text style={styles.text3}>Select width :</Text>
                </View>

                <TouchableOpacity>
                    <View style={styles.addbox4}>
                        <Text style={styles.addnum4}>standard</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.addbox5}>
                        <Text style={styles.addnum5}>wide</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.addbox6}>
                        <Text style={styles.addnum6}>Add to Bag</Text>
                    </View>
                </TouchableOpacity>

                <View>
                    <Text style={styles.text4}>Discription :</Text>
                </View>

                <View>
                    <Text style={styles.text5}>New Balance was founded in 1903 by the English immigrant William J. Riley in Boston, Massachusetts. The 33-year old shoemaker wanted to help people, who had problems with their feet by developing inlay soles and special shoes.</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )


}


const styles = StyleSheet.create({
    Image11: {
        height: 300,
        width: 400
    },
    text1: {
        color: colors.primary,
        fontSize: 32,
        marginTop: 10,
        marginLeft: 10,
        fontFamily: 'Poppins-ExtraBold'
    },
    price: {
        color: 'red',
        fontSize: 24,
        marginLeft: 10,
        marginTop:-10,
        fontFamily: 'Poppins-Bold'
    },
    heartBox: {
        height: 25,
        width: 25,
        backgroundColor: 'red',
        borderRadius: 50,
        position: 'absolute',
        top: 30,
        left: 8
    },
    imageIcon: {
        color: 'white',
        alignSelf: 'center',
        padding: 2.5,
    },
    addbox: {
        height: 40,
        width: 40,
        backgroundColor: 'white',
        borderColor: 'secondery',
        borderWidth: 1,
        borderRadius: 0,
        position: 'absolute',
        bottom: -50,
        left: 10,
        marginBottom:13
    },
    addnum: {
        color: 'black',
        fontSize: 20,
        marginTop: 3,
        marginLeft: 13,
        position: 'relative',
        fontFamily: 'Poppins-ExtraBold'
    },
    addbox2: {
        height: 40,
        width: 40,
        backgroundColor: 'white',
        borderColor: 'secondery',
        borderWidth: 1,
        borderRadius: 0,
        position: 'absolute',
        bottom: -50,
        left: 60,
        marginBottom:13
    },
    addnum2: {
        color: 'black',
        fontSize: 20,
        marginTop: 3,
        marginLeft: 13,
        position: 'relative',
        fontFamily: 'Poppins-ExtraBold'
    },
    addbox3: {
        height: 40,
        width: 40,
        backgroundColor: 'white',
        borderColor: 'secondery',
        borderWidth: 1,
        borderRadius: 0,
        position: 'absolute',
        bottom: -50,
        left: 110,
        marginBottom:13
    },
    addnum3: {
        color: 'black',
        fontSize: 20,
        marginTop: 3,
        marginLeft: 13,
        position: 'relative',
        fontFamily: 'Poppins-ExtraBold'
    },
    text2: {
        color: colors.primary,
        fontSize: 26,
        marginTop: 20,
        marginLeft: 10,
        fontFamily: 'Poppins-Bold'
    },
    text3: {
        color: colors.primary,
        fontSize: 25,
        marginTop: 70,
        marginLeft: 10,
        fontFamily: 'Poppins-Bold'
    },
    addbox4: {
        height: 40,
        width: 120,
        backgroundColor: 'black',
        // borderColor: 'secondery',
        borderWidth: 0,
        borderRadius: 0,
        position: 'absolute',
        bottom: -50,
        left: 11,
        marginBottom:13
    },
    addnum4: {
        color: 'white',
        fontSize: 20,
        marginTop: 4,
        marginLeft: 15,
        position: 'relative',
        fontFamily: 'Poppins-ExtraBold'
    },
    addbox5: {
        height: 40,
        width: 120,
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 0,
        position: 'absolute',
        bottom: -50,
        left: 140,
        marginBottom:13
    },
    addnum5: {
        color: 'black',
        fontSize: 20,
        marginTop: 4,
        marginLeft: 35,
        position: 'relative',
        fontFamily: 'Poppins-ExtraBold'
    },
    addbox6: {
        height: 40,
        width: 370,
        backgroundColor: 'red',
        // borderColor: 'gray',
        borderWidth: 0,
        borderRadius: 0,
        position: 'absolute',
        bottom: -110,
        left: 11
    },
    addnum6: {
        color: 'white',
        fontSize: 20,
        marginTop: 4,
        marginLeft: 130,
        position: 'relative',
        fontFamily: 'Poppins-ExtraBold',
        
    },
    text4: {
        color: 'black',
        fontSize: 26,
        marginTop: 115,
        marginLeft: 11,
        fontFamily: 'Roboto-Bold'
    },
    text5: {
        color: 'black',
        fontSize: 16,
        // marginTop: 115,
        marginLeft: 11,
        fontFamily:'Poppins'
    },
    // scrollView: {
    //     backgroundColor: '#E5E1EC',
    //     marginHorizontal: 0,
    // }
})