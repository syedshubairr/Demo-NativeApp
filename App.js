import { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);

  const handleText = (text) => {
    setName(text);
  };

  const handleButton = () => {
    setList((currentList) => [...currentList, name]);
  };

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
        <ScrollView>
          {list.map((item, index) => (
            <Text style={style.showList} key={index}>
              {item}
            </Text>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  main: {
    padding: 60,
    paddingHorizontal: 15,
    flex: 1,
  },
  container: {
    display: "flex",
    padding: 20,
    flexDirection: "row",
    borderBottomWidth: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    flex: 1,
  },
  listContainer: {
    padding: 20,
    flex: 1,
  },
  showList: {
    fontSize: 20,
    borderWidth: 2,
    borderRadius: 25,
    padding: 20,
    marginBottom: 10,
  },
});
