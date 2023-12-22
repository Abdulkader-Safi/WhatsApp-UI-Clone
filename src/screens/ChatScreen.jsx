import React from "react";
import { FlatList, ImageBackground, StyleSheet } from "react-native";

import Message from "../components/Message";
import msg from "./../../assets/data/messages.json";
import bg from "./../../assets/images/BG.png";

const ChatScreen = () => {
  return (
    <ImageBackground source={bg} style={styles.bg}>
      <FlatList style={styles.list} data={msg} renderItem={({ item }) => <Message message={item} />} inverted />
    </ImageBackground>
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
