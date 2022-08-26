// 0: Data de criação (mais recente)
// 1: Data de criação (mais antiga)
// 2: Data de modificação (mais recente)
// 3: Data de modificação (mais antiga)
// 4: Alfabética (A a Z)
// 5: Alfabética (Z a A)

import React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import { OrdenadorProp } from "../../../interface/Props";
import { ordenadorStyle } from "../../../styles";

export default function Ordenador({
  valorOrdenador,
  setValorOrdenador,
}: OrdenadorProp) {
  return (
    <View style={ordenadorStyle.ordenador}>
      <TouchableWithoutFeedback onPress={() => setValorOrdenador(0)}>
        <View style={ordenadorStyle.opcao}>
          <Text
            style={[
              ordenadorStyle.opcaoTexto,
              valorOrdenador === 0 && { fontWeight: "700" },
            ]}
          >
            Data de criação (mais recente)
          </Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => setValorOrdenador(1)}>
        <View style={ordenadorStyle.opcao}>
          <Text
            style={[
              ordenadorStyle.opcaoTexto,
              valorOrdenador === 1 && { fontWeight: "700" },
            ]}
          >
            Data de criação (mais antiga)
          </Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => setValorOrdenador(2)}>
        <View style={ordenadorStyle.opcao}>
          <Text
            style={[
              ordenadorStyle.opcaoTexto,
              valorOrdenador === 2 && { fontWeight: "700" },
            ]}
          >
            Data de modificação (mais recente)
          </Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => setValorOrdenador(3)}>
        <View style={ordenadorStyle.opcao}>
          <Text
            style={[
              ordenadorStyle.opcaoTexto,
              valorOrdenador === 3 && { fontWeight: "700" },
            ]}
          >
            Data de modificação (mais antiga)
          </Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => setValorOrdenador(4)}>
        <View style={ordenadorStyle.opcao}>
          <Text
            style={[
              ordenadorStyle.opcaoTexto,
              valorOrdenador === 4 && { fontWeight: "700" },
            ]}
          >
            Alfabética (A a Z)
          </Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => setValorOrdenador(5)}>
        <View style={ordenadorStyle.opcao}>
          <Text
            style={[
              ordenadorStyle.opcaoTexto,
              valorOrdenador === 5 && { fontWeight: "700" },
            ]}
          >
            Alfabética (Z a A)
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
