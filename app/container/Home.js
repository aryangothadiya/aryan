import { Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'

export default class home extends Component {

       setstate = {
        name : '1' + " " + 'aryan'
    }

    handleChangeName = () => {
        this.setState({
            name : '1' + " " + 'priyansh'
        })
    }
  render() {
    return (
      <View style = {StyleSheet.Container}>
        <Text style ={StyleSheet.name}>{this.state.name}</Text>
        <TouchableOpacity
         onPress={this.handleChangeName}
         >
            <Text style = {StyleSheet.btn}>Change Name</Text>
         </TouchableOpacity>
      </View>
    )
  }
}