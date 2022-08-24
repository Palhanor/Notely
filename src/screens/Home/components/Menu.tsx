import React from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import { COLORS } from "../../../styles/Colors";
import { menuStyle } from "../../../styles";
import { MenuProp } from "../../../interface/Props";
import {
  IconeBusca,
  IconeGrid,
  IconeLixo,
  IconeOrdenador,
  IconeTag,
} from "../../../components/Icones";

export default function Menu({
  setBuscando,
  setOrdenando,
  setValorBuscado,
}: MenuProp) {
  //   const manipulaLixo = () => {};
  //   const manipulaVisualizacao = () => {};
  //   const manipulaTags = () => {};

  const manipulaOrdenamento = () => {
    setBuscando(false);
    setOrdenando((ordenamento) => !ordenamento);
  };

  const manipulaBusca = () => {
    setOrdenando(false);
    setBuscando((buscador) => {
      const buscadorInvertido = !buscador;
      if (!buscadorInvertido) setValorBuscado("");
      return buscadorInvertido;
    });
  };

  return (
    <View style={menuStyle.menu}>
      <TouchableWithoutFeedback>
        <View>
          <IconeLixo size={30} color={COLORS.blueGray} />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <View>
          <IconeTag />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <View>
          <IconeGrid />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={manipulaOrdenamento}>
        <View>
          <IconeOrdenador />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={manipulaBusca}>
        <View>
          <IconeBusca />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
