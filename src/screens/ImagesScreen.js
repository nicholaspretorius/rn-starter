import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "./../components/ImageDetail";

const ImageScreen = () => {
  //const details = [{ name: "Nicholas", id: 1 }, { name: "Jane", id: 2 }, { name: "Joe", id: 3 }];
  return (
    <View>
      <ImageDetail
        title="Test 1"
        image={require("./../../assets/images/beach.jpg")}
        score="7"
      ></ImageDetail>
      <ImageDetail
        title="Test 2"
        image={require("./../../assets/images/forest.jpg")}
        score="6"
      ></ImageDetail>
      <ImageDetail
        title="Something else"
        image={require("./../../assets/images/mountain.jpg")}
        score="9"
      ></ImageDetail>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
