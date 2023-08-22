import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native';
import { StatusBar } from 'react-native';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { userDBDetails } from '../../utils/userDB';
import useAuth from '../../hooks/useAuth';

export default function UserData() {
  const user = userDBDetails;
  const {logout} = useAuth();
  const {userDATA} = useAuth();

  console.log(userDATA)
  function onLogout(){
    logout();
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#040F0F"></StatusBar>
      <View style={styles.cardLogin}>
        <View style={styles.containerButton}>
          <Image
            source={require("../../assets/loginImg.jpg")}
            style={styles.image}
          ></Image>
        </View>
        <Text style={styles.title}>{userDATA.nickname}
        </Text>
        <Text style={styles.label}>Usuario : </Text>
        <Text style={styles.label}>{userDATA.firstname}  {userDATA.lastname}</Text>
        <Text style={styles.label}>Email : </Text>
        <Text style={styles.label}>{userDATA.email}</Text>
          <TouchableOpacity
            style={styles.buttonRegister}
            onPress={onLogout}
          >
            <Text style={styles.textButton}>Cerrar sesión</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#040F0F",
  },
  label: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
    color: "#faf3dd",
    marginTop: 15,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    width: 320,
    paddingHorizontal: 10,
    backgroundColor: "#e8f8c1",
  },
  cardLogin: {
    borderRadius: 10,
    padding: 10,
    shadowColor: "black",
    borderColor: "#248232",
    borderWidth: 1,
    backgroundColor: "#011936",
  },
  buttonSession: {
    backgroundColor: "#248232",
    borderRadius: 10,
    padding: 10,
    shadowColor: "black",
    borderColor: "#248232",
    borderWidth: 1,
    alignItems: "center",
    marginBottom: 10,
    marginTop: 30,
    width: 250,
  },
  buttonRegister: {
    backgroundColor: "#38a3a5",
    borderRadius: 10,
    padding: 10,
    shadowColor: "black",
    borderColor: "#248232",
    borderWidth: 1,
    alignItems: "center",
    width: 250,
    marginTop: 10,
    marginBottom: 20,
  },
  textButton: {
    color: "#faf3dd",
    fontSize: 15,
  },
  containerButton: {
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    margin: -90,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#faf3dd",
    textAlign: "center",
  },
});