import React, { useState } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";

function generateColour() {
  const r = Math.ceil(Math.random() * Math.ceil(255));
  const g = Math.ceil(Math.random() * Math.ceil(255));
  const b = Math.ceil(Math.random() * Math.ceil(255));

  return `rgb(${r}, ${g}, ${b})`;
}

const ColourScreen = () => {
  const [colours, setColours] = useState([]);
  return (
    <View>
      <Text>Colour Screen</Text>
      <Button
        title="Create colour"
        onPress={() => {
          setColours([...colours, generateColour()]);
        }}
      />

      <FlatList
        keyExtractor={item => item}
        data={colours}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                height: 100,
                width: 100,
                backgroundColor: item
              }}
            ></View>
          );
        }}
      />
    </View>
  );
};

export default ColourScreen;
