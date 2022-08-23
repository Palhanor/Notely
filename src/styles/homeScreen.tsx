import { StyleSheet } from "react-native";
import { COLORS } from "../utils/Colors";

const styleHome = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: "center",
  },
  botaoCriar: {
    backgroundColor: COLORS.theme,
    width: 60,
    height: 60,
    borderRadius: 60,
    padding: 12,
    position: "absolute",
    bottom: 80,
    right: 16,
    zIndex: 1,
  },
  lista: {
    width: "100%",
    paddingTop: 16,
    marginBottom: 60,
  },
  centralizar: {
    textAlign: "center",
  },
});

export default styleHome;
