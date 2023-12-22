import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

const InputBox = () => {
  return (
    <View style={styles.container}>
      {/* Plus Icon */}
      <AntDesign name="plus" size={24} color="royalblue" />

      {/* Text Input */}
      <TextInput style={styles.input} placeholder="Type your Message ..." />

      {/* Send Icon */}
      <MaterialIcons style={styles.send} name="send" size={18} color="white" />
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "whitesmoke",
    padding: 5,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    backgroundColor: "white",
    padding: 5,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    fontSize: 16,

    borderRadius: 50,
    borderColor: "lightgrey",
    borderWidth: StyleSheet.hairlineWidth,
  },
  send: {
    backgroundColor: "royalblue",
    padding: 5,
    borderRadius: 15,
    overflow: "hidden",
  },
});
