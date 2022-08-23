import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { SalvarNotaProp } from "../../../interface/Props";
import { salvarNotaStyle } from "../../../styles";

export default function SalvarNota({ adicionarNota }: SalvarNotaProp) {
  return (
    <TouchableOpacity style={salvarNotaStyle.botaoSalvar} onPress={adicionarNota}>
      <Text style={salvarNotaStyle.textoBotaoSalvar}>Salvar</Text>
    </TouchableOpacity>
  );
}
