import { View, Text, ScrollView, FlatList, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import { iconss } from '../assets/icons';
import { colors } from '../assets/colors/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';



export default function AppliCation() {

  const DATA = [
    {
      id: 1,
      product: 'XC-72 low-top',
      price: '399',
      orgPrice: '599',
      image: require('../assets/images/nb.png'),
    },
    {
      id: 2,
      product: 'XC-81 low-top',
      price: '549',
      image: require('../assets/images/nb2.png'),
    },
    {
      id: 3,
      product: 'Chunkey Lather Shoes',
      price: '649',
      image: require('../assets/images/zara.png'),
    },
    {
      id: 4,
      product: 'Formal Monk Shoes',
      price: '799',
      image: require('../assets/images/zara2.png'),
    }
  ]

  const shoeData = ({ item }) => {
    console.log("item");
    return (
      <View style={styles.card}>
        <View>
          <Image style={[styles.images1, { height: item.id === 2 ? 220 : 190 }]} source={item.image} />
        </View>
        <View style={[styles.heartBox, { top: item.id === 2 ? 5 : 20 }]}>
          <TouchableOpacity>
            <MaterialIcons name="favorite-border" style={styles.imageIcon} color="#000" size={20} />
          </TouchableOpacity>
          <View style={styles.lessPrice}>
            <Text lessPriceText>33%</Text>
          </View>
        </View>

        <Text style={styles.cardText1}>{item.product}</Text>
        <Text style={styles.cardText2}><Text style={styles.dolar}>$</Text>{item.price}</Text>
        <TouchableOpacity style={styles.pluseBox}>
          <AntDesign name='newbalance' style={styles.plusIcon}></AntDesign>
        </TouchableOpacity>
      </View>


    )
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginTop: 42 }}>
          <TouchableOpacity style={styles.menuIcon}>
            <Image source={iconss.menu} />
          </TouchableOpacity>

          <View style={styles.SearchBox}>
            <AntDesign name='search1' style={styles.searchIcon} />
            <TextInput
              placeholder='trova il tuo prodotto'
            />
          </View>
          <TouchableOpacity style={styles.notificationIconBox}>
            <Image style={styles.notificationIcon} source={iconss.notification} />
          </TouchableOpacity>
        </View>
        <View>



          <TouchableOpacity style={styles.mainBox}>
            <View style={styles.subBox}>
              <Text style={styles.text1}>Nuovi-Arrivi</Text>
              <Text style={styles.text2}>Saldi-Estivi</Text>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.button}>Negozio No</Text>
              </TouchableOpacity>
            </View>

            <View>
              <Image source={require('../assets/images/nb.png')} />
            </View>


          </TouchableOpacity>



          <View style={styles.list}>

            <TouchableOpacity style={[styles.listing, styles.change]} ><Text style={[styles.listText, styles.changeText]}>Tutto</Text></TouchableOpacity>
            <TouchableOpacity style={[styles.listing, styles.change1]}><Text style={styles.listText}>Categoria</Text></TouchableOpacity>
            <TouchableOpacity style={[styles.listing, styles.change2]} ><Text style={styles.listText}>Cuovo</Text></TouchableOpacity>
            <TouchableOpacity style={[styles.listing, styles.change3]}><Text style={styles.listText}>Sconto</Text></TouchableOpacity>
          </View>
        </View>
        <View>
          <FlatList
            numColumns={2}

            data={DATA}
            renderItem={shoeData}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  menuIcon: {
    color: colors.primary,
    marginRight: 14,
    marginLeft: 15,
    marginBottom: 12,
    marginVertical: 5,
    height: 20,
    width: 20
  },
  SearchBox: {
    flexDirection: 'row',
    backgroundColor: white,
    height: 40,
    width: 200,
    marginLeft: 15,
    marginRight: 14,
    borderRadius: 5,
  },

  searchIcon: {
    height: 18,
    width: 18,
    marginRight: 9,
    marginLeft: 20,
    marginTop: 11,
    marginBottom: 11,
    fontSize: 14
  },
  notificationIconBox: {
    height: 40,
    width: 40,
    marginLeft: 15,
    marginLeft: 16,
    borderRadius: 5,
    backgroundColor: '#F3F3F3'
  },
  notificationIcon: {
    height: 18,
    width: 18,
    marginBottom: 11,
    marginLeft: 11,
    marginRight: 11,
    marginTop: 11,
  },


  mainBox: {
    height: 134,
    width: 345,
    margin: 20,
    flexDirection: "row",
    alignSelf: 'center',
  },
  subBox: {
    height: 70,
    width: 140,
    marginLeft: 19,
    marginBottom: 30,
    marginTop: 34,
    padding: 5,
  },

  text1: {
    fontSize: 15,
    fontFamily: 'roboto-SemiBold',
    color: 'black'
  },
  text2: {
    fontSize: 16,
    color: "#FF5035",
    fontFamily: 'roboto-SemiBold',
    marginTop: 5
  },
  button: {
    height: 26,
    width: 90,
    backgroundColor: "#FF5035",
    marginTop: 5,
    borderRadius: 5,
    color: 'white',
    fontFamily: 'roboto-Regular',
    textAlign: 'center',
  },
  images1: {
    width: '100%',
    borderRadius: 5,

  },
  dolar: {
    fontSize: 9
  },
  list: {
    width: 335,
    height: 40,
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 20,
    marginLeft: 15,
    marginRight: 25,
    justifyContent: 'space-between'
  },
  listText: {
    alignSelf: 'center',
    textAlignVertical: 'center',
    marginVertical: 10,
    marginHorizontal: 10,
    fontFamily: 'roboto-Medium',
    color: 'black'
  },
  listing: {
    width: 102,
    height: 40,
    backgroundColor: '#F3F3F3',
    borderRadius: 5
  },
  change: {
    backgroundColor: "#FF5035",
    width: 48,
    height: 40,
  },
  changeText: {
    color: '#ffff'
  },
  change1: {
    width: 102,
    height: 40,
  },
  change2: {
    width: 59,
    height: 40,
  },
  change3: {
    width: 96,
    height: 40,
  },


  card: {
    height: 280,
    marginVertical: 10,
    width: 150,
    backgroundColor: '#F3F3F3',
    marginBottom: 15,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
    marginTop: 20,
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
  },

  cardText1: {
    color: 'black',
    fontSize: 13,
    lineHeight: 22,
    fontFamily: 'roboto-Medium',
    marginHorizontal: 10,
  },
  cardText2: {
    color: 'black',
    fontSize: 18,
    lineHeight: 22,
    fontFamily: 'roboto-Bold',
    marginHorizontal: 10,
  },
  textBox: {
    backgroundColor: 'white'
  },
  heartBox: {
    height: 25,
    width: 25,
    backgroundColor: colors.white,
    borderRadius: 50,
    position: 'absolute',
    top: 20,
    left: 10
  },


  imageIcon: {
    color: colors.primary,
    alignSelf: 'center',
    padding: 2.5,
  },
  pluseBox: {
    position: 'absolute',
    height: 24,
    width: 24,
    left: 130,
    top: 245,
  },
  plusIcon: {
    fontSize: 25,
    color: 'green',
  },
  lessPrice: {
    height: 24,
    width: 50,
    backgroundColor: 'black,'
  },
  lessPriceText: {
    fontSize: 90,
    color: colors.white
  },

})