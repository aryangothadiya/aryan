import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { deletcomment, getcomment } from '../../redux/action/comment.action';


export default function Comments() {

  const dispatch = useDispatch()

    // useEffect =(() => {
    //     dispatch(getcomment())
    // })

    const handlecomment = ((data) => {
        dispatch(getcomment())
      })

    const handledelete = ((id) => {
        dispatch (deletcomment())
      })
  return (
    <View>
      <TouchableOpacity
      onPress={() => handlecomment()}>
      <Text>+</Text>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={() => handledelete()}>
      <Text>-</Text>
      </TouchableOpacity>
    </View>
  )
}

// const styles = StyleSheet.create({
//     database:{
          
//     }
// })