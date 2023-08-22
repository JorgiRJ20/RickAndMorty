import { View, Text, SafeAreaView, FlatList, StyleSheet, ActivityIndicator,Image, StatusBar } from 'react-native'
import React from 'react'
import RickandmortyCard from './RickandmortyCard'


export default function RickandmortyList(props) {
    const {characters} = props
    const {nextUrl} = props
    const {loadMoreData} =props
   
    const loadMore=()=>{
        console.log('Cargando personajes')
        loadMoreData()
    }
 
  return (
    <SafeAreaView style={styles.list}>
        <StatusBar backgroundColor='#040F0F'></StatusBar>
        <View style={styles.containerImage}>
            <Image source={require('../assets/rickandmorty.png')} style={styles.image}></Image>
        </View>
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

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:15
    },
    list:{
        paddingTop: Platform.OS === 'android' ? 10 : 0,
        backgroundColor:'#040F0F',
    },
    image:{
        width:150,
        height:40,
    },
    containerImage:{
        alignItems:'center',
        paddingBottom:10,
    }
})