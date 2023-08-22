import { View, Text, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import Favorito from "../Personaje/Favorito";

export default function Imagen({ nom, img ,id}) {
  const { auth } = useAuth();

  return (
    <View style={styles.headerContent}>
      <Image style={styles.image} source={{ uri: img }} />
      {auth ? <Favorito id={id}/> : null}
      <Text style={styles.textName}>
        <Text style={styles.idText}> </Text> {nom}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textName: {
    textAlign: "center",
    fontSize: 30,
    color: "#e8f8c1",
    fontWeight: "bold",
    marginBottom: 10,
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: "center",
    borderRadius: 75,
  },
  headerContent: {
    padding: 5,
    alignItems: "center",
    borderRadius: 20,
  },
});
