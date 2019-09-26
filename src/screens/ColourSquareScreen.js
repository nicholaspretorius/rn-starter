import React, { useState } from "react";
import { View, Text } from "react-native";
import ColourControl from "./../components/ColourControl";

generateColour = () => {
  return Math.ceil(Math.random() * Math.ceil(255));
};

const ColourSquare = () => {
  const [red, setRed] = useState(0); // 0, 0, 0
  const [blue, setBlue] = useState(0); // 0, 0, 0
  const [green, setGreen] = useState(0); // 0, 0, 0
  const INCREMENT = 10;

  const setColour = (colour, change) => {
    console.log("Colour: ", colour, " Change: ", change, " RGB: ", red, green, blue);
    switch (colour) {
      case "red":
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;
      case "blue":
        blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
        return;
      case "green":
        green + change > 255 || green + change < 0 ? null : setGreen(green + change);
        return;
    }
  };

  return (
    <View>
      <Text>Colour Square.</Text>

      <ColourControl
        colour="red"
        onIncrease={() => setColour("red", INCREMENT)}
        onDecrease={() => setColour("red", -INCREMENT)}
      ></ColourControl>
      <ColourControl
        colour="blue"
        onIncrease={() => setColour("blue", INCREMENT)}
        onDecrease={() => setColour("blue", -INCREMENT)}
      ></ColourControl>
      <ColourControl
        colour="green"
        onIncrease={() => setColour("green", INCREMENT)}
        onDecrease={() => setColour("green", -INCREMENT)}
      ></ColourControl>

      <View
        style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})`, height: 100, width: 100 }}
      ></View>
    </View>
  );
};

export default ColourSquare;
