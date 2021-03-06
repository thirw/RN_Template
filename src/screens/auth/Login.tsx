import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation();
  navigation.setOptions({
    headerShown: false,
  });

  return (
    <View style={styles.container}>
      <Text>Login</Text>
    </View>
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
