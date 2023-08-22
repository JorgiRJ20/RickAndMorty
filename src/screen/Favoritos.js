import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import { StyleSheet } from "react-native";
import { ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import useAuth from "../hooks/useAuth";
import { getFavoriteApi, removeFavoriteApi } from "../api/Favorito";
import axios from "axios";

export default function Favoritos({ navigation }) {
  const { auth } = useAuth();
  const [favoritos, setFavoritos] = useState([]);
const goToLogin = () => {
    navigation.navigate("Account");
}
  useEffect(() => {
    const fetchData = async () => {
      try {
        const idFav = await getFavoriteApi();
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character/${idFav.join(",")}`
        );
        setFavoritos(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [auth, favoritos]);

  const removeFavorite = async ({ id }) => {
    await removeFavoriteApi(id);
    console.log("quitar de favoritos");
  };

  return (
    <ImageBackground
    source={require("../../src/assets/favoritos.jpg")}
    style={styles.image}
  >
    <ScrollView style={styles.container}>

        {auth ? (
          <>
            <Text style={styles.btnFav}>Favoritos</Text>
            {favoritos.map((item, index) => {
              return (
                <View key={index} style={styles.cardFavorito}>
                  <Text style={styles.titleCard}>{item.name}</Text>
                  <Image
                    source={{ uri: item.image }}
                    style={{ width: 100, height: 100 }}
                  />
                </View>
              );
            })}
          </>
        ) : <>
          <Text style={styles.btnFav}>Inicia sesión para ver tus favoritos</Text>
        <TouchableOpacity onPress={goToLogin}>
          <Text style={styles.btnLogin}>Iniciar sesión</Text>
        </TouchableOpacity>
        </>}
    </ScrollView>
    
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    height: 800,
  },
  btnFav: {
    color: "white",
    fontSize: 30,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
    // coloca un degradado en el fondo\
    backgroundColor: "#001E1D",
    width: 300,
    alignSelf: "center",
    padding: 10,
    borderRadius: 10,

  },
  btnLogin: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "#000",
    width: 200,
    alignSelf: "center",
    padding: 10,
    borderRadius: 10,
  },
  cardFavorito: {
    backgroundColor: "#248232",
    width: 300,
    alignSelf: "center",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleCard: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
    maxWidth: 150,
  },
});
