import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../utils/Colors";

const styleNota = StyleSheet.create({
  containerModal: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  input: {
    width: Dimensions.get("window").width - 32,
    height: 42,
    padding: 8,
    fontSize: 20,
    marginHorizontal: 16,
    marginTop: 16,
  },
  multiline: {
    width: Dimensions.get("window").width - 32,
    height: "60%",
    marginVertical: 8,
    padding: 8,
    textAlignVertical: "top",
    marginHorizontal: 16,
  },
  botaoEditarVisualizar: {
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
  botaoSalvar: {
    backgroundColor: COLORS.theme,
    width: "100%",
    padding: 18,
    position: "absolute",
    bottom: 0,
    left: 0,
    zIndex: 1,
  },
  textoBotaoSalvar: {
    textAlign: "center",
    color: COLORS.white,
  },
  centralizar: {
    textAlign: "center",
  },
});

export default styleNota;
