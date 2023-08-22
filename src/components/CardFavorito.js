import { View, Text } from 'react-native'
import React from 'react'

export default function CardFavorito(props) {
    const {item, index} = props

  return (
    <View key={index}>
      <Text>{item.name}</Text>
    </View>
  )
}