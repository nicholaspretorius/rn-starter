import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

// onListPressed = () => {
//   console.log("List pressed");
//   //this.props.navigation.navigate("List");
// };

onComponentPressed = () => {
  console.log("Component pressed");
  // this.props.actions.navigate("Component");
};

class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.header}>Home</Text>
        <Button
          title="Go to List"
          onPress={() => {
            this.props.navigation.navigate("List");
          }}
        />
        <Button
          title="Images"
          onPress={() => {
            this.props.navigation.navigate("Images");
          }}
        />
        <Button
          title="Counter"
          onPress={() => {
            this.props.navigation.navigate("Count");
          }}
        />
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("Components");
          }}
        >
          <Text>Components</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    marginBottom: 20,
    textAlign: "center"
  }
});

export default HomeScreen;
