import React from "react";
import { Button, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Welcome({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Welcome Page</Text>
      <Button title="Details" onPress={() => navigation.navigate("Details")} />
      <Button title="Survey" onPress={() => navigation.navigate("Survey")} />
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
});
