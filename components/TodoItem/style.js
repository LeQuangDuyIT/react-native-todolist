import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    gap: 18,
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 6,
  },
  number: {
    width: 36,
    lineHeight: 36,
    aspectRatio: 1 / 1,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    borderRadius: 4,
  },
  even: {
    backgroundColor: "red",
  },
  odd: {
    backgroundColor: "green",
  },
  content: {
    fontSize: 18,
  },
});

export default styles;
