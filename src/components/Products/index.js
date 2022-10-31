import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Products({data, addToCart}) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.price}>R$ {data.price}</Text>
      </View>
      <TouchableOpacity style={styles.btn} onPress={addToCart}>
        <Text style={styles.btnText}>+</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#dfdfdf',
        borderRadius: 2,
        marginBottom: 14,
        padding: 8,
        paddingBottom: 14,
        paddingTop: 14,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontWeight: 'bold',
    },
    btn: {
        paddingStart: 12,
        paddingEnd: 12,
        backgroundColor: '#168fff',
        paddingTop: 6,
        paddingBottom: 6,
        borderRadius: 5,
    },
    btnText: {
        color: "#fff",
        fontSize: 19
    }
})