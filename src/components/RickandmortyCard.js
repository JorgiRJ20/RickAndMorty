import { View, Text, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function RickandmortyCard(props) {
    const {characters} = props
    const navigation = useNavigation()

    const goToPersonaje = ()=>{
        navigation.navigate('Rickandmorty',{
          id: characters.id, 
          name:characters.name, 
          image:characters.image, 
          status:characters.status,
          gender:characters.gender,
          species:characters.species,
          type:characters.type,
          origin:characters.origin.name,
          location:characters.location.name,
          episode:characters.episode
        })

    }

  return (
    <TouchableWithoutFeedback onPress={goToPersonaje}>
        <View style={styles.card}>
            <View style={styles.marginCard}>
                      <Image source={{uri: characters.image}} style={styles.image}/>
                    <Text style={styles.number}>#{`${characters.id}`.padStart(3, 0)}</Text>
                <View style={styles.containerText}>
                    <Text style={styles.name}>{characters.name}</Text>
                </View>
            </View>
        </View>
    </TouchableWithoutFeedback>
  )
}

const styles=StyleSheet.create({

  card:{
    flexGrow:1,
    padding:16,
    height:'100%',
    padding:5,
    boxshadow:'0 0 40px rgba(0,0,0,0.5)',
    alignItems: 'center', // Alinea horizontalmente,
  },
  marginCard:{
    flex:1,
    padding:25,
    backgroundColor:'#248232',
    borderRadius:10,
    shadowOpacity:0.9,
    shadowRadius:4,
    elevation:5,
    borderColor:'#040F0F',
    borderWidth:1,
    
    
    
  },
  colorCard:{
    flex:1,
    padding:5,
    borderRadius:10,
    backgroundColor:'#BE81F'
  },
  name:{
    color:'#e8f8c1',
    fontWeight:'bold',
    fontSize:18,
    textAlign:'center'
  },
  containerText:{
    width:120,
    justifyContent: 'center', // Alinea verticalmente
    alignItems: 'center', // Alinea horizontalmente,
  },
  image:{ 
    marginTop:5,
    width:120,
    height:120,
    borderRadius:60,
    borderColor:'#040F0F',
    borderWidth:1,
    
  },
  number:{
    position:'absolute',
    right:10,
    color:'#e8f8c1',
    fontSize:14
  }
})