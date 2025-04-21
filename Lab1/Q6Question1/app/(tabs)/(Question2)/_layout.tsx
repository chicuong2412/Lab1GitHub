import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import style from "@/assets/style/Style";

export default function layout() {
  const [number, setNumber] = useState("");
  const [error, setError] = useState(false);
  const [sum, setSum] = useState(0);

  function SumCal() {
    if (Number.isNaN(number) || number === "") {
      setError(true);
    } else {
      var tempt = Math.abs(parseInt(number)).toString().charAt(0);
      setSum(parseInt(number) % 10 + parseInt(tempt))
    }
  }

  return (
    <View style={style.container}>
      <TextInput
        value={number}
        onChangeText={(text) => {
          setNumber(text);
        }}
        style={style.textInput}
      ></TextInput>
      {error ? (
        <Text style={style.textAlert}>Enter a valid number!!!</Text>
      ) : (
        <></>
      )}
      <Text style={style.text}>{sum}</Text>
      <TouchableOpacity onPress={() => SumCal()} style={style.textLink}>
        <Text>Sum</Text>
      </TouchableOpacity>
    </View>
  );
}
