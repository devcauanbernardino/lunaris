import { StyleSheet } from "react-native";
import colors from "../styles/colors";

export default StyleSheet.create({
  carouselCard: {
    backgroundColor: colors.background,
    borderRadius: 10,
    marginRight: 30,
    padding: 10,
    paddingBottom: 40,
    alignItems: "center",
    width: 330,
    height: 200,
    shadowColor: colors.black,
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  carouselImage: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  cardText: {
    marginTop: 10,
    fontSize: 16,
    textAlign: "center",
    color: colors.primary,
  },
});
