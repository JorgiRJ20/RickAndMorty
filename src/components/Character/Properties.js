import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { ScrollView } from "react-native";

export default function Properties({ gen, spe, typ, ori, loc, stat, ep }) {
  return (
    <View>
      <View style={styles.card}>
        <View style={styles.contentTitle}>
          <Text style={styles.textChar}>Caracteristicas del personaje:</Text>
        </View>
        <View style={styles.contentChar}>
          <Text style={styles.titleChar}>Especie: {gen}</Text>
        </View>
        <View style={styles.contentChar}>
          <Text style={styles.titleChar}> Genero: {spe}</Text>
        </View>
        <View style={styles.contentChar}>
          <Text style={styles.titleChar}>Origen: {ori}</Text>
        </View>
        <View style={styles.contentChar}>
          <Text style={styles.titleChar}>Localizacion: {loc}</Text>
        </View>
        <View style={styles.contentChar}>
          <Text style={styles.titleChar}>Estado: {stat}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#011936",
    borderRadius: 20,
    padding: 20,
    margin: 10,
    borderColor: "#248232",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  textDesc: {
    fontSize: 20,
    color: "#e8f8c1",
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "right",
  },
  textChar: {
    fontSize: 20,
    color: "#e8f8c1",
    textAlign: "center",
  },
  contentTitle: {
    borderBottomColor: "#248232",
    borderBottomWidth: 2,
    paddingBottom: 10,
  },
  contentChar: {
    borderBottomColor: "#248232",
    borderBottomWidth: 2,
    paddingBottom: 10,
    width: "100%",
    backgroundColor: "#248232",
    margin: 10,
    borderRadius: 10,
  },
  titleChar: {
    fontSize: 20,
    color: "#e8f8c1",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
});
