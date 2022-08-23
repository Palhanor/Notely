import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "./Colors";

export const botaoPrincipalStyle = StyleSheet.create({
  botaoPrincipal: {
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
  posicaoIcone: {
    textAlign: "center",
  },
});

export const cardStyle = StyleSheet.create({
  campoTitulo: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  apagarIcon: {
    marginRight: 16,
  },
  notaAberta: {
    width: Dimensions.get("window").width - 32,
    borderColor: COLORS.cardBorder,
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginBottom: 84,
    backgroundColor: COLORS.cardBackground,
    elevation: 3,
    shadowColor: COLORS.cardShadow,
    overflow: "hidden",
    marginHorizontal: 16,
  },
  notaCard: {
    width: Dimensions.get("window").width - 32,
    borderColor: COLORS.cardBorder,
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginBottom: 22,
    backgroundColor: COLORS.cardBackground,
    elevation: 3,
    shadowColor: COLORS.cardShadow,
    overflow: "hidden",
    marginHorizontal: 16,
    maxHeight: 180,
  },
  tituloNotaCard: {
    fontWeight: "600",
    fontSize: 16,
    marginBottom: 10,
    marginHorizontal: 24,
  },
  tituloNotaVisualizacao: {
    fontWeight: "600",
    fontSize: 20,
    marginBottom: 10,
    marginHorizontal: 24,
    marginTop: 16,
  },
});

export const headerStyle = StyleSheet.create({
  background: {
    backgroundColor: COLORS.theme,
    width: "100%",
    height: 60,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  botaoRetornar: {
    marginLeft: -10,
    marginRight: 5,
  },
  texto: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: "bold",
  },
});

export const listaCardsStyle = StyleSheet.create({
  lista: {
    width: "100%",
    paddingTop: 16,
    marginBottom: 60,
  },
});

export const menuStyle = StyleSheet.create({
  menu: {
    flexDirection: "row",
    justifyContent: "space-between",
    // justifyContent: "space-around",
    alignContent: "stretch",
    backgroundColor: COLORS.background,
    // backgroundColor: "red",
    height: 60,
    paddingTop: 15,
    marginTop: 10,
    width: "100%",
    paddingHorizontal: 32,
    position: "absolute",
    bottom: 0,
    left: 0,
    zIndex: 1,
  },
});

export const homeStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: "center",
  },
});

export const editorNotaStyle = StyleSheet.create({
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
});

export const salvarNotaStyle = StyleSheet.create({
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
});

export const notaStyle = StyleSheet.create({
  containerModal: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
});
