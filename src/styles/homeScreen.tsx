import { StyleSheet } from "react-native";

const styleHome = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7F8",
    alignItems: "center",
  },
  botaoCriar: {
    backgroundColor: "#0E677A",
    width: 60,
    height: 60,
    borderRadius: 60,
    padding: 12,
    position: "absolute",
    bottom: 32,
    right: 16,
    zIndex: 1,
  },
  lista: {
    width: "100%",
    paddingTop: 16,
  },
  centralizar: {
    textAlign: "center",
  },
});

export default styleHome;
