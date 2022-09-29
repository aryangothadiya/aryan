import { Modal, Text, Pressable, View, StyleSheet, TextInput, Touchable } from 'react-native'
import React from 'react'
import { useEffect } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux'
import { addpost, getpost } from '../../redux/action/Post.action'
import { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'


export default function Post() {

  const dispatch = useDispatch()

  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [update, setUpdate] = useState(false);
  const [uid, setUID] = useState(0);



  useEffect(() => {
    dispatch(getpost())
  }, [])

  const handlesubmit = () => {
    dispatch(addpost({ title: name, desc }))
  }

  const handledelet = ((data) => {
    dispatch(DeletPost(id))
  })

  const post = useSelector(state => state.post)
  console.log(post.post);

  return (
    <View>
      {
        post.post.map((p, i) => (
          <View key={i} styles={styles.card}>
            <View>
              <TouchableOpacity
                onPress={() => handledelet(item.id)}>
                <MaterialIcons name='delete' size={15} style={styles.delete} />
              </TouchableOpacity>
            </View>
            <Text>{p.title}</Text>
            <Text>{p.author}</Text>
          </View>
        ))
      }

      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TextInput
                style={styles.modalText}
                placeholder='PRODUCT NAME'
                onChangeText={(text) => setName(text)}
                value={name}
              ></TextInput>
              <TextInput
                style={styles.modalText}
                placeholder='PRODUCT DISCREPTION'
                onChangeText={(text) => setDesc(text)}
                value={desc}
              ></TextInput>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => { handlesubmit(); setModalVisible(!modalVisible) }}
              >
                <Text style={styles.textStyle}>Submit</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textStyle}>Add Batton</Text>
        </Pressable>
      </View>
    </View>


  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  delete:{
    bottom:218,
    left:90
  }
});

