import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AuthLoginScreen from "../screens/auth/Login";

const Stack = createStackNavigator();

export default function Auth({ navigation }) {
  navigation.setOptions({
    headerShown: false,
  });

  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={AuthLoginScreen} />
    </Stack.Navigator>
  );
}
