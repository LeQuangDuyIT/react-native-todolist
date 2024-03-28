import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  form: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 32,
    paddingHorizontal: 16,
  },
  input: {
    height: 48,
    width: "80%",
    paddingHorizontal: 16,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#21a3d0",
    borderRadius: 99,
  },
  button: {
    width: 48,
    height: 48,
    borderRadius: 9999,
    verticalAlign: "middle",
    backgroundColor: "#21a3d0",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    fontSize: 32,
    marginBottom: 6,
    color: "white",
  },
});

export default styles;
