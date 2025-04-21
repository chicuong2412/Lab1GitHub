import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";

export default function UpdateScreen({...props}) {
  console.log(props);

  return (
    <View style={style.container}>
      <TextInput></TextInput>
    </View>
  );
}

const style = StyleSheet.create({
  text: {
    fontSize: 20,
  },
  textLink: {
    width: "auto",
    height: 40,
    backgroundColor: "blue",
    color: "white",
    paddingHorizontal: 20,
    textAlign: "center",
  },
  container: {
    padding: 40,
    backgroundColor: "white",
    height: "100%",
  },
});
