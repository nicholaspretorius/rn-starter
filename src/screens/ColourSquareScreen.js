import React, { useState } from "react";
import { View, Text } from "react-native";
import ColourControl from "./../components/ColourControl";

generateColour = () => {
  return Math.ceil(Math.random() * Math.ceil(255));
};

function moreColour(colour) {
  return colour + 10;
}

function lessColour(colour) {
  return colour - 10;
}

function onPressHandler(colour) {
  console.log(`On Press Handler for:`);
  console.log(colour);
}

const ColourSquare = () => {
  const [colour, setColour] = useState([]); // 0, 0, 0
  return (
    <View>
      <Text>Colour Square.</Text>

      <ColourControl colour="red" onPress={onPressHandler}></ColourControl>
      <ColourControl colour="blue" onPress={onPressHandler}></ColourControl>
      <ColourControl colour="green" onPress={onPressHandler}></ColourControl>

      <View style={{ backgroundColour: "red", height: 100, width: 100 }}></View>
    </View>
  );
};

export default ColourSquare;
