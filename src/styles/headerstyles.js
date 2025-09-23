import { StyleSheet } from "react-native";

export default StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    height: 80,
    paddingHorizontal: 10,
    backgroundColor: "#ece2ff",
  },
  title: {
    fontSize: 20,
    color: "#5320a6",
    fontWeight: "bold",
  },
  icons: {
    flexDirection: "row",
  },
  icon: {
    marginHorizontal: 5,
  },
  menu: {
    backgroundColor: "#5320a6",
    height: 50,
    width: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
