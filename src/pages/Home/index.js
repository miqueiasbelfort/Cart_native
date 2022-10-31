import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import React, {useState, useContext} from 'react'
import {useNavigation} from "@react-navigation/native"

// Icons
import {Feather} from "@expo/vector-icons"
// Components
import Products from '../../components/Products'
// Context
import { CardContext } from '../../context/cardContext'

export default function Home() {

  const {card, addItemCard} = useContext(CardContext)

  const navigation = useNavigation()
  const [products, setProducts] = useState([
    {
      id: '1',
      name: 'Coca cola',
      price: 19.99
    }, 
    {
      id: '2',
      name: 'Chocolate',
      price: 6.50
    },
    {
      id: '3',
      name: 'Quiejo 500g',
      price: 13
    },
    {
      id: '4',
      name: 'Batata frita',
      price: 23.99
    },
    {
      id: '5',
      name: 'Guarana lata',
      price: 6.00
    }
  ])

  const handleAddCart = (item) => {
    addItemCard(item)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cardContant}>

        <Text style={styles.title}>Lista de produtos</Text>

        <TouchableOpacity 
          style={styles.cardButton}
          onPress={() => navigation.navigate('Cards')}
        >
          {
            card.length >= 1 && (
              <View style={styles.dot}>
                <Text style={styles.dotText}>{card?.length}</Text>
              </View>
            )
          }
          <Feather
            name="shopping-cart"
            size={30}
            color="#000"
          />
        </TouchableOpacity>

      </View>

      <FlatList
        style={styles.list}
        data={products}
        keyExtractor={item => String(item.id)}
        renderItem={
          ({item}) => <Products data={item} addToCart={() => handleAddCart(item)}/>
        }
      />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fafafa',
      paddingEnd: 14,
      paddingStart: 14,
    },
    cardContant: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 30,
      marginBottom: 24,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold'
    },
    dot: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'red',
      width: 20,
      height: 20,
      borderRadius: 12,
      position: 'absolute',
      zIndex: 99,
      bottom: -2,
      left: -4,
    },
    dotText: {
      fontSize: 12,
      color: '#fff'
    }
})