import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

export default function SplashScreen() {
  const navigation = useNavigation();
  navigation.setOptions({
    headerShown: false,
  });

  useFocusEffect(
    React.useCallback(() => {
      setTimeout(() => {
        navigation.navigate("Auth");
      }, 2000);
    }, [navigation])
  );

  return (
    <View style={styles.container}>
      <Text>Splash Screen!</Text>
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
