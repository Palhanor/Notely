import React from "react";
import { View, TouchableOpacity } from "react-native";
import { FerramentasNotaProp } from "../../../interface/Props";
import { ferramentasNota } from "../../../styles";
import {
  IconeHeader,
  IconeItalico,
  IconeNegrito,
  IconeRiscado,
} from "../../../components/Icones";

/* TODO: FALTA ADICIONAR
 * Linha
 * Link
 * Imagem
 * Citacao
 * Codigo
 * Lista bullet
 * Lista numero
 */

export default function FerramentasNota({
  adicionarNegrito,
  adicionarItalico,
  adicionarRiscado,
  adicionarHeader,
}: FerramentasNotaProp) {
  return (
    <View style={ferramentasNota.barra}>
      <TouchableOpacity
        style={ferramentasNota.botao}
        onPress={adicionarNegrito}
      >
        <IconeNegrito />
      </TouchableOpacity>
      <TouchableOpacity
        style={ferramentasNota.botao}
        onPress={adicionarItalico}
      >
        <IconeItalico />
      </TouchableOpacity>
      <TouchableOpacity
        style={ferramentasNota.botao}
        onPress={adicionarRiscado}
      >
        <IconeRiscado />
      </TouchableOpacity>
      <TouchableOpacity style={ferramentasNota.botao} onPress={adicionarHeader}>
        <IconeHeader />
      </TouchableOpacity>
    </View>
  );
}
