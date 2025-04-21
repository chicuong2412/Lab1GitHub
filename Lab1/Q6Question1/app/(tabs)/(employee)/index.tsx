import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";

const UpdateInfomation = ({ ...props }) => {
  const [fullName, setFullName] = useState(props.user.fullName);
  const [age, setAge] = useState(props.user.age);
  const [occupation, setOccupation] = useState(props.user.occupation);
  const [updateSuccessfull, setUpdateSuccessfull] = useState(false);

  function Update() {
    props.setUser({
      fullName,
      age,
      occupation,
    });
    setUpdateSuccessfull(true);
    Alert.alert('Update', 'Successfully', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    // props.setCurrPage("INFO");
  }

  return (
    <View style={style.container}>
      <TextInput
        style={style.textInput}
        value={fullName}
        onChangeText={(text) => {
          setFullName(text);
        }}
      ></TextInput>
      <TextInput
        style={style.textInput}
        value={age}
        onChangeText={(text) => {
          setAge(text);
        }}
      ></TextInput>
      <TextInput
        style={style.textInput}
        value={occupation}
        onChangeText={(text) => {
          setOccupation(text);
        }}
      ></TextInput>
      {((updateSuccessfull) ? <Text style={style.textAlert}>Successfull updated!!!</Text>: <></>)}
      <TouchableOpacity
        onPress={() => {
          Update();
        }}
      >
        <Text style={style.textLink}>UPDATE</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.setCurrPage("INFO");
        }}
      >
        <Text style={style.textLink}>Back to information page</Text>
      </TouchableOpacity>
    </View>
  );
};

export default function index() {
  const [user, setUser] = useState({
    fullName: "Le Chi Cuong",
    age: 21,
    occupation: "Fullstack developer",
  });

  const [currPage, setCurrPage] = useState("INFO");

  if (currPage === "UPDATE") {
    return (
      <UpdateInfomation
        user={user}
        setUser={setUser}
        setCurrPage={setCurrPage}
      ></UpdateInfomation>
    );
  }

  return (
    <View style={style.container}>
      <Text style={style.text}>Full name: {user.fullName}</Text>
      <Text style={style.text}>Age: {user.age}</Text>
      <Text style={style.text}>Occupation: {user.occupation}</Text>
      <TouchableOpacity
        onPress={() => {
          setCurrPage("UPDATE");
        }}
      >
        <Text style={style.textLink}>Go To Update Screen</Text>
      </TouchableOpacity>
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
    marginBottom: 15,
  },
  container: {
    padding: 40,
    backgroundColor: "white",
    height: "100%",
  },
  textInput: {
    width: 300,
    borderWidth: 1,
    padding: 10,
    marginBottom: 15,
  },
  textAlert: {
    fontSize: 32,
    color: "red",
    marginBottom: 15
  }
});
