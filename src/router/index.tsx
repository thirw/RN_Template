import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { setNavigator } from "../helpers/navigation.ts";

import SplashScreen from "../screens/SplashScreen";
import Auth from "./Auth";
// import App from "./App";

const Stack = createStackNavigator();

export default function Router() {
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={(ref) => setNavigator(ref)}>
        <Stack.Navigator initialRouteName="SplashScreen">
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="Auth" component={Auth} />
          {/* <Stack.Screen name="App" component={App} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
