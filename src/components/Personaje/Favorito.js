import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { addFavoriteApi, getFavoriteApi, removeFavoriteApi } from "../../api/Favorito";

export default function Favorito({ id }) {
  const [favorite, setFavorite] = useState(false);

  const getFavorite = async () => {
    const response = await getFavoriteApi(id);
    response.forEach((element) => {
      if (element === id) {
        setFavorite(true);
      }
    }
    );
  };

  getFavorite();

  const addFavorite = async () => {
    await addFavoriteApi(id);
    setFavorite(true);
    console.log("agregar a favoritos");
  };

  const removeFavorite = async () => {
    await removeFavoriteApi(id);
    setFavorite(false);
    console.log("quitar de favoritos");
  };

  return (
    <>
      {favorite ? (
        <AntDesign
          name="heart"
          color={"red"}
          size={30}
          onPress={removeFavorite}
          style={{ marginLeft: 20, marginTop: 20 }}
        />
      ) : (
        <FontAwesome5
          name="heart"
          color={"white"}
          size={30}
          onPress={addFavorite}
          style={{ marginLeft: 20, marginTop: 20 }}
        />
      )}
    </>
  );
}
