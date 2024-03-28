import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eff7f8",
  },
  body: {
    flex: 1,
    paddingVertical: 28,
    paddingHorizontal: 16,
  },
  header: {
    paddingVertical: 32,
    fontWeight: "bold",
    fontSize: 32,
    color: "#21a3d0",
  },
  list: {
    flexDirection: "column",
    gap: 16,
  },
});

export default styles;
