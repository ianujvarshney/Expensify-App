import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "red",
          fontSize: 30,
          backgroundColor: "#15e1e8",
          borderRadius: 10,
          padding: 10,
          marginBottom: 2,
        }}>
        aplikasi pertama...
      </Text>

      <Ionicons name="phone-portrait" size={24} color="black" />
      <MaterialIcons name="phone-android" size={24} color="black" />
      <MaterialIcons name="phonelink" size={24} color="black" />

      <Text
        style={{
          color: "white",
          fontSize: 30,
          backgroundColor: "#d4bf20",
          borderRadius: 10,
          padding: 10,
          marginBottom: 2,
        }}>
        coba aja dulu...
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
