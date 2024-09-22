import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Welcome from "./pages/Welcome";
import Details from "./pages/Details";
import Survey from "./pages/Survey";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Welcome} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="Survey" component={Survey} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
