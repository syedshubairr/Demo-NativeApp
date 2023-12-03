import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);

  const handleText = (text) => {
    setName(text);
  };

  const handleButton = () => {
    // console.log(name);
    setList((currentList) => [...currentList, name]);
  };

  const handleClear = () => {
    setList([]);
  };
  console.log(list);

  return (
    <View style={style.main}>
      <View style={style.container}>
        <TextInput
          onChangeText={handleText}
          placeholder="Enter name"
          style={style.input}
        />
        <Button onPress={handleButton} title="Add Note" color="#000" />
      </View>
      <View style={style.listContainer}>
        <Button onPress={handleClear} title="Clear List" color="#AAA" />
      </View>
      <View style={style.listContainer}>
        {list.map((item, index) => (
          <Text key={index}>{item}</Text>
        ))}
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  main: {
    padding: 60,
  },
  container: {
    flexDirection: "row",
    paddingBottom: 30,
    borderBottomWidth: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    flex: 1,
  },
  listContainer: {
    padding: 20,
  },
});
