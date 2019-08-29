import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

class ListScreenComponent extends React.Component {
  displayFriend = ({ item }) => {
    return (
      <Text style={styles.listItem}>
        Name: {item.name}. Age: {item.age}
      </Text>
    );
  };

  render() {
    const friends = [
      { id: "1", name: "Jane", age: 22 },
      { id: "2", name: "Jade", age: 33 },
      { id: "3", name: "John", age: 44 },
      { id: "4", name: "Jack", age: 55 },
      { id: "5", name: "Jeni", age: 66 }
    ];

    return (
      <View>
        <Text style={styles.header}>Friends</Text>
        <FlatList data={friends} renderItem={this.displayFriend} keyExtractor={el => el.id} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    marginBottom: 20
  },
  listItem: {
    marginVertical: 20
  }
});

export default ListScreenComponent;
