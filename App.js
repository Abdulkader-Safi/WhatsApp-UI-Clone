import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import ChatsScreen from "./src/screens/ChatsScreen";

const chat = {
  id: "0",
  user: {
    id: "u1",
    name: "Lukas",
    image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg",
  },
  lastMessage: {
    id: "m0",
    text: "Well done this sprint, guys!",
    createdAt: "2021-10-14T13:30:00.000Z",
  },
};

export default function App() {
  return (
    <View style={styles.container}>
      <ChatsScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingVertical: 50,
  },
});
