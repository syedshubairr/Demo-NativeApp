import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View>
      <View
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          flexDirection: "column",
          padding: 30,
        }}
      >
        <TextInput placeholder="Enter name" />
        <Button title="Click" />
      </View>
      <Text
        style={{
          display: "flex",
          textAlign: "center",
          alignContent: "center",
          flexDirection: "column",
          justifyContent: "center",
          fontSize: 30,
        }}
      >
        Welcome
      </Text>
    </View>
  );
}
