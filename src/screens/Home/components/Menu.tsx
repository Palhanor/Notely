import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { COLORS } from "../../../utils/Colors";
import {
  IconeBusca,
  IconeGrid,
  IconeLixo,
  IconeOrdenador,
  IconeTag,
} from "../../../components/Icones";

export default function Menu() {

  //   const manipulaLixo = () => {};
  //   const manipulaVisualizacao = () => {};
  //   const manipulaOrdenamento = () => {};
  //   const manipulaTags = () => {};
  //   const manipulaBusca = () => {};

  return (
    <View style={styles.menu}>
      <TouchableWithoutFeedback>
        <IconeLixo size={30} color={COLORS.blueGray} />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <IconeGrid />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <IconeOrdenador />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <IconeTag />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <IconeBusca />
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
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
