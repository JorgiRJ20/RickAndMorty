import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import UserData from '../components/Account/UserData';
import LoginForm from '../components/Account/LoginForm';
import useAuth from '../hooks/useAuth';

export default function Account() {
const {auth} = useAuth();
  
  return (
    <SafeAreaView style={{flex:1}}>
      {auth ? <UserData /> : <LoginForm  />}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  inputStyle:{
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin:20,
    borderRadius:10,
    padding:5
  }
})