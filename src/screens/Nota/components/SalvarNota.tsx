import React from "react";
import styleNota from "../../../styles/notaScreen";
import { Text, TouchableOpacity } from "react-native";
import { SalvarNotaProp } from "../../../interface/Props";

export default function SalvarNota({ adicionarNota }: SalvarNotaProp) {
  return (
    <TouchableOpacity style={styleNota.botaoSalvar} onPress={adicionarNota}>
      <Text style={styleNota.textoBotaoSalvar}>Salvar</Text>
    </TouchableOpacity>
  );
}
