import React from "react";
import { View, Button } from "react-native";

const ColourControl = ({ colour, onIncrease, onDecrease }) => {
  return (
    <View>
      <Button title={`More ${colour}`} onPress={onIncrease}></Button>
      <Button title={`Less ${colour}`} onPress={onDecrease}></Button>
    </View>
  );
};

export default ColourControl;
