import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, ScrollView, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Details({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Image source={require("../assets/images/cat1.jpg")} style={styles.image} />
        <Image source={require("../assets/images/cat2.jpg")} style={styles.image} />
        <Button title="Home" onPress={() => navigation.navigate("Home")} />
        <Button title="Survey" onPress={() => navigation.navigate("Survey")} />
      </ScrollView>
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
  scrollView: {
    marginHorizontal: 10,
  },
  image: {
    width: 300,
    height: 400,
    marginBottom: 24,
    borderRadius: 20,
  },
});
