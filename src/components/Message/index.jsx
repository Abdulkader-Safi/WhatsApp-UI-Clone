import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

dayjs.extend(relativeTime);

const Message = ({ message }) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: message.user.id === "u1" ? "#DCF8C5" : "white",
          alignSelf: message.user.id === "u1" ? "flex-end" : "flex-start",
        },
      ]}
    >
      <Text>{message.text}</Text>
      <Text style={styles.time}>{dayjs(message.createdAt).fromNow(true)}</Text>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 10,
    borderRadius: 10,
    maxWidth: "80%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.28,
    shadowRadius: 1,

    elevation: 1,
  },
  time: {
    color: "gray",
    alignSelf: "flex-end",
  },
});
