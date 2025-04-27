import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import style from "@/assets/style/Style";

export default function _layout() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [num3, setNum3] = useState("");
  const [min, setMin] = useState<Number | null>(null);
  const [error, setError] = useState(false);

  const FindMin = () => {
    if (isNaN(num1 as unknown as number) || isNaN(num2 as unknown as number) || isNaN(num3 as unknown as number)) {
      setError(true);
    } else {
      setError(false);
      if (num1 !== "" && num2 !== "" && num3 !== "") {
        setMin(
          Math.min(
            Math.min(parseFloat(num1), parseFloat(num2)),
            parseFloat(num3)
          )
        );
      }
    }
  };

  return (
    <View style={style.container}>
      <Text>Num 1:</Text>
      <TextInput
        value={num1}
        onChangeText={(text) => {
          setNum1(text);
        }}
        style={style.textInput}
      ></TextInput>
      <Text>Num 2:</Text>
      <TextInput
        value={num2}
        style={style.textInput}
        onChangeText={(text) => {
          setNum2(text);
        }}
      ></TextInput>
      <Text>Num 3:</Text>
      <TextInput
        value={num3}
        style={style.textInput}
        onChangeText={(text) => {
          setNum3(text);
        }}
      ></TextInput>
      {error ? (
        <Text style={style.textAlert}>Enter a valid number!!!</Text>
      ) : (
        <></>
      )}
      <TouchableOpacity onPress={() => FindMin()} style={style.textLink}>
        <Text>Find Min</Text>
      </TouchableOpacity>
      {min !== null ? <Text>Min is: {min as unknown as string}</Text> : <></>}
    </View>
  );
}
