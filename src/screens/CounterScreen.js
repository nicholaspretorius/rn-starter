import React, { useState } from "react";
import { View, Text, Button } from "react-native";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0); // array desctucturing, setting counter to 0

  return (
    <View>
      <Text>Counter Screen</Text>
      <Text>{counter}</Text>
      <Button
        title="Increment"
        onPress={() => {
          setCounter(counter + 1);
        }}
      ></Button>
      <Button
        title="Decrement"
        onPress={() => {
          setCounter(counter - 1);
        }}
      ></Button>
    </View>
  );
};

export default CounterScreen;
