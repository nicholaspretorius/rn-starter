import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ComponentsScreen from "./ComponentsScreen";

const HomeScreen = () => {
  const name = "Nicholas";
  return (
    <View>
      <Text style={styles.text}>Home Screen</Text>
      <Text style={{ fontSize: 20 }}>Hello, my name is {name}</Text>
      <ComponentsScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
