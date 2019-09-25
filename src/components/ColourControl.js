import React from "react";
import { View, Button } from "react-native";

const ColourControl = ({ colour, onPress }) => {
  return (
    <View>
      <Button title={`More ${colour}`} onPress={onPress}></Button>
      <Button title={`Less ${colour}`} onPress={onPress}></Button>
    </View>
  );
};

export default ColourControl;
