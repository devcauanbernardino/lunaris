import { StyleSheet } from "react-native";
import colors from "../styles/colors";

export default StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    height: 80,
    paddingHorizontal: 10,
    backgroundColor: colors.secondary,
  },
  title: {
    fontSize: 20,
    color: colors.primary,
    fontWeight: "bold",
  },
  icons: {
    flexDirection: "row",
  },
  icon: {
    marginHorizontal: 5,
  },
  menu: {
    backgroundColor: colors.primary,
    height: 50,
    width: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
