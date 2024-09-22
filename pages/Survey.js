import React from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const DATA = [
  {
    id: "1",
    title: "Happy",
  },
  {
    id: "2",
    title: "Sad",
  },
  {
    id: "3",
    title: "Angry",
  },
  {
    id: "4",
    title: "Confused",
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function Survey({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>How did the cats make you feel?</Text>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.id}
      />
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Details" onPress={() => navigation.navigate("Details")} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    backgroundColor: "#f1f1f1",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 24,
  },
});
