import { View, Text } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";

export default function EpisodesList(props) {
  const { episodes } = props;
  return (
    <View style={styles.card}>
              <View style={styles.contentTitle}>
          <Text style={styles.textChar}>Episodios del personaje:</Text>
        </View>
      {episodes.map((item, index) => {
        return (
          <View style={styles.contentChar} key={index}>
            <View style={styles.divElements}>
            <Text style={styles.titleChar}>Titulo : {item.name}</Text>
              </View> 
              <View style={styles.divElements}>
            <Text style={styles.titleChar}>Número : {item.id}</Text>
              </View> 
              <View>
            <Text style={styles.titleChar}>Fecha estreno : {item.air_date}</Text>
              </View> 
          </View>
        );
      })
      }
    </View>
  );
}

const styles = StyleSheet.create({
  contentChar: {
    paddingBottom: 10,
    width: "100%",
    backgroundColor: "#011936",
    margin: 10,
    borderRadius: 10,
    borderColor: "#f0ead2",
    borderWidth: 1,
  },
  titleChar: {
    fontSize: 16,
    color: "#e8f8c1",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
    padding: 10,
  },    
  card: {
    backgroundColor: "#248232",
    borderRadius: 20,
    padding: 20,
    margin: 10,
    borderColor: "#011936",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
  },
  
  contentTitle: {
    borderBottomColor: "#248232",
    borderBottomWidth: 2,
    paddingBottom: 10,
  },
  textChar: {
    fontSize: 20,
    color: "#e8f8c1",
    textAlign: "center",
  },
  divElements: {
    borderBottomColor: "#f0ead2",
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
});
