import React from "react";
import { FlatList, StyleSheet } from "react-native";

import ChatListItem from "../components/ChatListItem";
import chats from "./../../assets/data/chats.json";

const ChatsScreen = () => {
  return <FlatList data={chats} renderItem={({ item }) => <ChatListItem chat={item} />} />;
};

export default ChatsScreen;

const styles = StyleSheet.create({});
