import React from "react";
import { FlatList, ImageBackground, KeyboardAvoidingView, StyleSheet } from "react-native";

import InputBox from "../components/InputBox";
import Message from "../components/Message";
import msg from "./../../assets/data/messages.json";
import bg from "./../../assets/images/BG.png";

const ChatScreen = () => {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.bg}>
      <ImageBackground source={bg} style={styles.bg}>
        <FlatList style={styles.list} data={msg} renderItem={({ item }) => <Message message={item} />} inverted />

        <InputBox />
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  list: {
    padding: 10,
  },
});
