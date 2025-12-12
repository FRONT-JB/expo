import { WebView } from "react-native-webview";

export default function IndexPage() {
  return <WebView source={{ uri: "http://192.168.45.40:3000" }} />;
}
