import React from "react";
import { View, Text } from "react-native";
import { Provider } from "mobx-react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import stores from "./stores";
import Router from "./router";

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider {...stores}>
        <Router />
      </Provider>
    </SafeAreaProvider>
  );
}
