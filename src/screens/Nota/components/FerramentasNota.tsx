import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { FerramentasNotaProp } from "../../../interface/Props";
import { ferramentasNota } from "../../../styles";
import {
  IconeCitacao,
  IconeCodigo,
  IconeHeader,
  IconeImagem,
  IconeItalico,
  IconeLinha,
  IconeLink,
  IconeListaBullet,
  IconeListaNumero,
  IconeNegrito,
  IconeRiscado,
} from "../../../components/Icones";

export default function FerramentasNota({
  adicionarNegrito,
  adicionarItalico,
  adicionarRiscado,
  adicionarHeader,
  adicionarLinha,
  adicionarLink,
  adicionarImagem,
  adicionarListaBullet,
  adicionarListaNumero,
  adicionarCitacao,
  adicionarCodigo,
}: FerramentasNotaProp) {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      keyboardShouldPersistTaps="always"
      style={ferramentasNota.barra}
    >
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
      <TouchableOpacity style={ferramentasNota.botao} onPress={adicionarLinha}>
        <IconeLinha />
      </TouchableOpacity>
      <TouchableOpacity style={ferramentasNota.botao} onPress={adicionarLink}>
        <IconeLink />
      </TouchableOpacity>
      <TouchableOpacity style={ferramentasNota.botao} onPress={adicionarImagem}>
        <IconeImagem />
      </TouchableOpacity>
      <TouchableOpacity
        style={ferramentasNota.botao}
        onPress={adicionarListaBullet}
      >
        <IconeListaBullet />
      </TouchableOpacity>
      <TouchableOpacity
        style={ferramentasNota.botao}
        onPress={adicionarListaNumero}
      >
        <IconeListaNumero />
      </TouchableOpacity>
      <TouchableOpacity
        style={ferramentasNota.botao}
        onPress={adicionarCitacao}
      >
        <IconeCitacao />
      </TouchableOpacity>
      <TouchableOpacity
        style={[ferramentasNota.botao, { marginRight: 10 }]}
        onPress={adicionarCodigo}
      >
        <IconeCodigo />
      </TouchableOpacity>
    </ScrollView>
  );
}
