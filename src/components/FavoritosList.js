import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { FlatList } from 'react-native'

export default function FavoritosList(props) {
  return (
    <SafeAreaView>
        <FlatList 
            data={characters}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(characters)=>String(characters.id)}
            renderItem={({item})=><RickandmortyCard characters={item}/>}
            contentContainerStyle={styles.container}
            onEndReachedThreshold={0.1}
            onEndReached={nextUrl&&loadMore}
            ListFooterComponent={
               nextUrl && <ActivityIndicator size="large" color=""/>
            }
        />
    </SafeAreaView>
  )
}