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

export default function Menu({ setBuscando, setValorBuscado }: MenuProp) {
  //   const manipulaLixo = () => {};
  //   const manipulaVisualizacao = () => {};
  //   const manipulaOrdenamento = () => {};
  //   const manipulaTags = () => {};

  const manipulaBusca = () => {
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
      <TouchableWithoutFeedback>
        <View>
          <IconeOrdenador />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => manipulaBusca()}>
        <View>
          <IconeBusca />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
