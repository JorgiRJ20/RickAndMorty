import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native';
import RickandmortyEpisodesApi from '../../api/RickandmortyEpisodesApi';

export default function Episodes({ep}) {
  return (
    <View>
        <RickandmortyEpisodesApi ep={ep}/>
    </View>
  )
}

  