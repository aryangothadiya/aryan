import { View, Text ,StyleSheet , Image} from 'react-native'
import React from 'react'

export default function AppliCation() {
  return (
    <View style={styles.poster}>
    <View style={styles.container}>
  
      <Text>Aryan</Text>
      <MaterialIcons name ='verified-user' size={20} />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
        container:{
          flex:1,
          backgroundColor:'#252837',
          alignItems:'center',
          justifyContent:'center'
        },
        poster:{
        width:'100',
        height:'50',
        backgroundColor:'white'
        }
        
})