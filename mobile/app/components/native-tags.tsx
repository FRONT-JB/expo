import { SafeAreaView } from "react-native-safe-area-context";
import {
  Button,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function NativeTags() {
  const handleOnPress = () => {
    alert("버튼 누름");
  };

  const handleChange = (text: string) => {
    console.log("text", text);
  };

  const handleScroll = () => {
    console.log("스크롤");
  };

  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
      <StatusBar barStyle="dark-content" />

      <View>
        <Text>안녕하세요</Text>
      </View>

      <Button title="타이틀" onPress={handleOnPress} />

      <TouchableOpacity>
        <Text>안녕하세요 2</Text>
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        onChangeText={handleChange}
        secureTextEntry
      />

      <View style={styles.boardList}>
        <FlatList
          onScroll={handleScroll}
          renderItem={({ item }) => (
            <Text>
              글번호: {item.number} 글제목: {item.title}
            </Text>
          )}
          data={[
            { number: 1, title: "게시글 제목1" },
            { number: 2, title: "게시글 제목2" },
            { number: 3, title: "게시글 제목3" },
            { number: 4, title: "게시글 제목4" },
            { number: 5, title: "게시글 제목5" },
            { number: 6, title: "게시글 제목6" },
            { number: 7, title: "게시글 제목7" },
            { number: 8, title: "게시글 제목8" },
            { number: 9, title: "게시글 제목9" },
            { number: 10, title: "게시글 제목10" },
          ]}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: "blue",
  },
  boardList: {
    height: 100,
    backgroundColor: "yellow",
  },
});
