import { View, Text, ScrollView, FlatList, StyleSheet, TouchableOpacity, Image, TextInput ,SafeAreaView,} from 'react-native'
import React from 'react'

export default function Front() {
  return (
      <View style={styles.container}>
              <Image style={styles.neb} source={require('../../assets/images/neb.png')}/>
      </View>
  )
}

const styles = StyleSheet.create({
    container:{
      backgroundColor:'white',
      // display:'none'
      },
      neb:{
        height:80,
        width:110,
        marginLeft:140,
        margin:350
      }
})

