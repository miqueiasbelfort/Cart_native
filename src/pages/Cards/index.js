import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, {useContext} from 'react'

// context
import {CardContext} from "../../context/cardContext"

// components
import CartItem from '../../components/CartItem'

export default function Cards() {

  const {card, addItemCard, removeItemCart, total} = useContext(CardContext)

  return (
    <View style={styles.container}>
      <FlatList
        data={card}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => String(item.id)}
        ListEmptyComponent={() => <Text style={{textAlign: 'center'}}>Nenhum item no carrinho...</Text>}
        renderItem={
          ({item}) => (<CartItem data={item} addAmount={() => addItemCard(item)} removeAmount={() => removeItemCart(item)}/>)
        }
        ListFooterComponent={() => (
          <Text style={styles.total}>Total R$ {total}</Text>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    paddingEnd: 14,
    paddingTop: 14,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 24,
    marginLeft: 15
  }
})