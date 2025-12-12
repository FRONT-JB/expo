import WebView from "react-native-webview";
import NetInfo from "@react-native-community/netinfo";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function InternetFailPage() {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    NetInfo.addEventListener(({ isConnected }) => {
      setIsConnected(isConnected ?? false);
    });
  }, []);

  if (!isConnected) {
    return (
      <View>
        <Text>인터넷 연결이 필요해요</Text>
      </View>
    );
  }

  return <WebView source={{ uri: "http://192.168.45.40:3000" }} />;
}
