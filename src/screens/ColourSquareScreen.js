import React, { useState } from "react";
import { View, Text } from "react-native";
import ColourControl from "./../components/ColourControl";

generateColour = () => {
  return Math.ceil(Math.random() * Math.ceil(255));
};

function setColour(colour, value) {
  const update = colour;
  return update + value;
}

const ColourSquare = () => {
  const [red, setRed] = useState(0); // 0, 0, 0
  const [blue, setBlue] = useState(0); // 0, 0, 0
  const [green, setGreen] = useState(0); // 0, 0, 0

  return (
    <View>
      <Text>Colour Square.</Text>

      <ColourControl
        colour="Red"
        onIncrease={() => setRed(red + 10)}
        onDecrease={() => setRed(red - 10)}
      ></ColourControl>
      <ColourControl
        colour="Blue"
        onIncrease={() => setBlue(blue + 10)}
        onDecrease={() => setBlue(blue - 10)}
      ></ColourControl>
      <ColourControl
        colour="Green"
        onIncrease={() => setGreen(green + 10)}
        onDecrease={() => setGreen(green - 10)}
      ></ColourControl>

      <View
        style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})`, height: 100, width: 100 }}
      ></View>
    </View>
  );
};

export default ColourSquare;
