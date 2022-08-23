import React from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import { COLORS } from "../../../styles/Colors";
import {
  IconeBusca,
  IconeGrid,
  IconeLixo,
  IconeOrdenador,
  IconeTag,
} from "../../../components/Icones";
import { menuStyle } from "../../../styles";

export default function Menu() {
  //   const manipulaLixo = () => {};
  //   const manipulaVisualizacao = () => {};
  //   const manipulaOrdenamento = () => {};
  //   const manipulaTags = () => {};
  //   const manipulaBusca = () => {};

  return (
    <View style={menuStyle.menu}>
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