import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Lunaris Livraria</Text>
      <StatusBar style="auto" />
      <View style={styles.icons}>
        <TouchableOpacity style={styles.icon}>
          <Ionicons name="heart-outline" size={24} color="#5320a6"></Ionicons>
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <Ionicons name="bag-outline" size={24} color="#5320a6"></Ionicons>
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="person-outline" size={24} color="#5320a6"></Ionicons>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.menu}>
        <Ionicons name="menu" size={35} color="#ece2ff"></Ionicons>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    backgroundColor: "#ece2ff",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 50,
    height: 80,
  },
  text: {
    color: "#5320a6",
    lineHeight: 20,
    fontSize: 20,
    marginLeft: 10,
  },
  icons: {
    flexDirection: "row",
  },
  icon: {
    marginRight: 15,
  },
  menu: {
    backgroundColor: "#5320a6",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    width: 50,
  },
});
