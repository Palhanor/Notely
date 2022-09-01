import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "./Colors";

export const botaoPrincipalStyle = (altura?: number) =>
  StyleSheet.create({
    botaoPrincipal: {
      backgroundColor: COLORS.theme,
      borderRadius: 60,
      bottom: altura,
      height: 60,
      padding: 12,
      position: "absolute",
      right: 16,
      width: 60,
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
  maisOpcoes: {
    marginRight: 12,
  },
  notaAberta: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.cardBorder,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 22,
    marginHorizontal: 16,
    overflow: "hidden",
    paddingVertical: 10,
    paddingHorizontal: 16,
    width: Dimensions.get("window").width - 32,
  },
  notaCard: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.cardBorder,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 22,
    marginHorizontal: 16,
    maxHeight: 200,
    overflow: "hidden",
    paddingVertical: 10,
    paddingHorizontal: 16,
    width: Dimensions.get("window").width - 32,
  },
  tituloNotaCard: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
    marginHorizontal: 20,
  },
  tituloNotaVisualizacao: {
    marginBottom: 10,
    marginHorizontal: 20,
    marginTop: 16,
    fontSize: 20,
    fontWeight: "600",
  },
});

export const headerStyle = StyleSheet.create({
  background: {
    alignItems: "center",
    backgroundColor: COLORS.theme,
    flexDirection: "row",
    justifyContent: "space-between",
    height: 60,
    paddingHorizontal: 20,
    width: "100%",
  },
  botaoRetornar: {
    marginLeft: -10,
    marginRight: 5,
  },
  texto: {
    color: COLORS.white,
    letterSpacing: 0.9,
    fontSize: 22,
    fontWeight: "600",
    fontFamily: "notoserif",
  },
  ferramentas: {
    flexDirection: "row",
    width: 60,
    justifyContent: "space-between",
  },
});

export const listaCardsStyle = StyleSheet.create({
  lista: {
    marginBottom: 60,
    paddingTop: 16,
    width: "100%",
  },
  header: {
    fontSize: 16,
    color: COLORS.blueGray,
    marginLeft: 16,
    marginBottom: 12,
    fontWeight: "600",
  },
});

export const homeStyle = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: COLORS.background,
    flex: 1,
  },
});

export const editorNotaStyle = StyleSheet.create({
  input: {
    fontSize: 20,
    height: 42,
    marginHorizontal: 16,
    marginTop: 16,
    padding: 8,
    width: Dimensions.get("window").width - 32,
  },
  multiline: {
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 8,
    textAlignVertical: "top",
    width: Dimensions.get("window").width - 32,
  },
});

export const salvarNotaStyle = StyleSheet.create({
  botaoSalvar: {
    backgroundColor: COLORS.theme,
    bottom: 0,
    left: 0,
    height: 60,
    justifyContent: "center",
    position: "absolute",
    width: "100%",
    zIndex: 1,
  },
  textoBotaoSalvar: {
    color: COLORS.white,
    textAlign: "center",
  },
});

export const notaStyle = StyleSheet.create({
  containerModal: {
    backgroundColor: COLORS.background,
    flex: 1,
  },
});

export const buscadorStyle = StyleSheet.create({
  buscador: {
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: COLORS.ferramentas,
    height: 50,
    paddingHorizontal: 16,
    width: Dimensions.get("window").width - 32,
    marginHorizontal: 16,
    marginVertical: 12,
    borderRadius: 5,
  },
  input: {
    width: "100%",
  },
});

export const ordenadorStyle = StyleSheet.create({
  ordenador: {
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: COLORS.ferramentas,
    width: Dimensions.get("window").width - 32,
    marginHorizontal: 16,
    marginVertical: 12,
    borderRadius: 5,
    padding: 16,
  },
  opcao: {
    marginVertical: 6,
  },
  opcaoTexto: {
    fontSize: 15,
  },
});

export const cardMenuStyle = StyleSheet.create({
  apagar: {
    marginVertical: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    borderRadius: 3,
    backgroundColor: COLORS.babyRed,
  },
  copiar: {
    marginVertical: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    borderRadius: 3,
    backgroundColor: COLORS.babyBlue,
  },
  favoritar: {
    marginVertical: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    borderRadius: 3,
    backgroundColor: COLORS.babyYellow,
  },
});

export const visualizadorNotaStyle = StyleSheet.create({
  blocoMetadados: {
    marginBottom: 84,
  },
  metadados: {
    color: COLORS.blueGray,
    marginLeft: 16,
  },
  metadadosTitulo: {
    fontWeight: "600",
  },
});

export const notaRapidaStyle = StyleSheet.create({
  menu: {
    backgroundColor: COLORS.ferramentas,
    bottom: 0,
    left: 0,
    paddingHorizontal: 26,
    paddingVertical: 14,
    position: "absolute",
    width: "100%",
    zIndex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    maxHeight: 140,
  },
  inline: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    width: "100%",
  },
  input: {
    width: "80%",
  },
});

export const ferramentasNota = StyleSheet.create({
  barra: {
    backgroundColor: COLORS.ferramentas,
    bottom: 60,
    left: 0,
    height: 40,
    paddingTop: 5,
    flexDirection: "row",
    position: "absolute",
    width: "100%",
    zIndex: 1,
  },
  botao: {
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 30,
    marginLeft: 10,
  },
});
