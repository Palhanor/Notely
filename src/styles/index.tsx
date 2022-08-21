import { Dimensions, StyleSheet } from "react-native";

const globalStyle = StyleSheet.create({
  campoTitulo: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  moreIcon: {
    marginRight: 16,
  },
  nota: {
    width: Dimensions.get("window").width - 32,
    borderColor: "#EEEEEE",
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginBottom: 22,
    backgroundColor: "#FBFDFE",
    elevation: 3,
    shadowColor: "#BBBBBB",
    overflow: "hidden",
    marginHorizontal: 16,
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

export default globalStyle;
