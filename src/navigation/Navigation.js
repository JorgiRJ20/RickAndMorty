import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import NavigationAccount from "./NavigationAccount";
import NavigationFavoritos from "./NavigationFavoritos";
import NavigationRickandMorty from "./NavigationRickandMorty";

export default function   Navigation() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Account") {
            iconName = focused ? "user-alt" : "user-alt";
          } else if (route.name === "Favoritos") {
            iconName = focused ? "star" : "star";
          }

          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#2BA84A",
        inactiveTintColor: "#b3d6c6",
        style: {
          backgroundColor: "#2D3A3A",
          paddingBottom: 5,

        },
      }}
    >
      <Tab.Screen name="Account" component={NavigationAccount} options={{}} />
      <Tab.Screen
        name="RickandMorty"
        component={NavigationRickandMorty}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => renderIconRM(),
        }}
      />
      <Tab.Screen name="Favoritos" component={NavigationFavoritos} />
    </Tab.Navigator>
  );
}

const renderIconRM = () => {
  return (
    <Image
      source={require("../assets/iconoram.png")}
      style={{ width: 75, height: 75, top: -15 }}
    />
  );
};
