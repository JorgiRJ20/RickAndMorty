import { View, Text, SafeAreaView, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import RickandmortyList from '../components/RickandmortyList'
import RickandmortyApi from '../api/RickandmortyApi'
import Header from '../components/Character/Header'
import Properties from '../components/Character/Properties'
import Episodes from '../components/Character/Episodes'


export default function Rickandmorty(props) {
  const {navigation, route:{params}}=props
  const id=params.id
  const img=params.image
  const nom=params.name
  const stat=params.status
  const gen=params.gender
  const spe=params.species
  const typ=params.type
  const ori=params.origin
  const loc=params.location 
  const ep=params.episode
  return (
    <ScrollView style={styles.container}>
        
        <Header id={id} img={img} nom={nom} />
          <View>
            <Properties gen={gen} spe={spe} ori={ori} loc={loc} stat={stat} ep={ep}/>
            <Episodes ep={ep}/>
          </View>
    </ScrollView>
  )
}

const styles=StyleSheet.create({
  container: {
    padding:20,
    backgroundColor:'#040F0F'
  }
})