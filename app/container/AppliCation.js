import { View, Text, ScrollView, FlatList, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';



export default function AppliCation({navigation}) {

  const DATA = [
    {
      id: 1,
      product: 'XC-72 low-top',
      price: '399',
      orgPrice: '599',
      image: require('../../assets/images/nb.png'),
    },
    {
      id: 2,
      product: 'XC-81 low-top',
      price: '549',
      image: require('../../assets/images/nb2.png'),
    },
    {
      id: 3,
      product: 'Chunkey Lather Shoes',
      price: '649',
      image: require('../../assets/images/zara.png'),
    },
    {
      id: 4,
      product: 'Formal Monk Shoes',
      price: '799',
      image: require('../../assets/images/zara2.png'),
    }
  ]

  const DrawerNavigation = (props) => {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    );
  }

  const shoeData = ({ item }) => {
    console.log("item");
    return (
      <View style={styles.card}>
        <View>
          <TouchableOpacity
           onPress={() => navigation.navigate('SecPage')}  
          >
            <Image style={styles.images1} source={item.image} />
          </TouchableOpacity>
        </View>
        <View style={styles.heartBox}>
          <TouchableOpacity>
            <MaterialIcons name="favorite-border" style={styles.imageIcon} color="#000" size={20} />
          </TouchableOpacity>
        </View>

        <Text style={styles.cardText1}>{item.product}</Text>
        <Text style={styles.cardText2}><Text style={styles.dolar}>$</Text>{item.price}</Text>
      </View>


    )
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginTop: 42 }}>
          <TouchableOpacity style={styles.menuIcon}>
            <AntDesign name='menuunfold' size={30}  onPress={() => navigation.openDrawer()} ></AntDesign>
          </TouchableOpacity>

          <View style={styles.SearchBox}>
            <AntDesign name='search1' style={styles.searchIcon} />
            <TextInput
              placeholder='Search Your Product Here'
            />
          </View>
          <TouchableOpacity style={styles.notificationIconBox}>
            <Ionicons name='ios-notifications-circle' size={30}></Ionicons>
          </TouchableOpacity>
        </View>
        <View>



          <View style={styles.sliderBox}>
            <TouchableOpacity>
              <Image style={styles.slider} source={require('../../assets/images/new1.jpg')} />
            </TouchableOpacity>
          </View>





          <View style={styles.list}>

            <TouchableOpacity style={[styles.listing, styles.change]} ><Text style={styles.listText}>All</Text></TouchableOpacity>
            <TouchableOpacity style={[styles.listing, styles.change1]}><Text style={styles.listText}>Categories</Text></TouchableOpacity>
            <TouchableOpacity style={[styles.listing, styles.change2]} ><Text style={styles.listText}>Deals</Text></TouchableOpacity>
            <TouchableOpacity style={[styles.listing, styles.change3]}><Text style={styles.listText}>Offer</Text></TouchableOpacity>
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
    color: 'black',
    marginRight: 14,
    marginLeft: 15,
    marginBottom: 12,
    marginVertical: 5,
    height: 20,
    width: 20,
    marginTop: 8

  },
  SearchBox: {
    flexDirection: 'row',
    backgroundColor: '#B8BEC3',
    height: 40,
    width: 230,
    marginLeft: 15,
    marginRight: 14,
    borderRadius: 5,
    marginBottom: 10

  },

  searchIcon: {
    height: 18,
    width: 18,
    marginRight: 9,
    marginLeft: 20,
    marginTop: 11,
    marginBottom: 11,
    fontSize: 14,

  },
  notificationIconBox: {
    height: 40,
    width: 40,
    marginLeft: 15,
    marginLeft: 16,
    borderRadius: 5,
    marginTop: 4

  },
  notificationIcon: {
    height: 18,
    width: 18,
    marginBottom: 11,
    marginLeft: 11,
    marginRight: 11,
    marginTop: 11,
    backgroundColor: '#F3F3F3',
    color: 'black',
  },
  sliderBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: "center",
  },
  slider: {
    height: 200,
    width: 450,
    marginTop: 15,

  },

  mainBox: {
    height: 134,
    width: 345,
    margin: 20,
    flexDirection: "row",
    alignSelf: 'center',
  },
  subBox: {
    height: 0,
    width: 0,
    marginLeft: 19,
    marginBottom: 30,
    // marginTop: 34,
    padding: 5,
  },

  text1: {
    fontSize: 15,
    fontFamily: 'Roboto-bold',
    color: 'black'
  },
  text2: {
    fontSize: 16,
    color: "#FF5035",
    fontFamily: 'Roboto-bold',
    marginTop: 5
  },
  button: {
    height: 26,
    width: 90,
    backgroundColor: "#5D6D7E ",
    marginTop: 5,
    borderRadius: 5,
    color: 'white',
    fontFamily: 'Roboto-Regular',
    textAlign: 'center',
  },
  images1: {
    width: 150,
    borderRadius: 5,
    height: 130,
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
    fontFamily: 'Poppins-Medium',
    color: 'black',
    fontSize:14
  },
  listing: {
    width: 102,
    height: 40,
    backgroundColor: '#D5D8DC',
    borderRadius: 5
  },
  change: {
    width: 48,
    height: 40,
  },
  changeText: {
    color: '#273746 '
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
    height: 220,
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
    // backgroundColor:'red',
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
    backgroundColor: 'red',
    borderRadius: 50,
    position: 'absolute',
    top: 25,
    left: 10
  },


  imageIcon: {
    color: 'white',
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
    color: 'black',
  },
  lessPrice: {
    height: 24,
    width: 50,
    backgroundColor: 'black,'
  },
  lessPriceText: {
    fontSize: 90,
    color: 'white'
  },

})
// import { View, Text } from 'react-native'
// import React from 'react'
// import AntDesign from 'react-native-vector-icons/AntDesign';

// export default function AppliCation() {
//   return (
//     <View>
//       <AntDesign name='caretup' size={30}>

//       </AntDesign>
//     </View>
//   )
// }