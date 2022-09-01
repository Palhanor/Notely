import React, { useContext } from "react";
import { TextInput, View, TouchableOpacity } from "react-native";
import { IconeEnviar } from "../../../components/Icones";
import { NotasContext } from "../../../context/NotasContext";
import INota from "../../../interface/Nota";
import { NotaRapidaProp } from "../../../interface/Props";
import { notaRapidaStyle } from "../../../styles";
import { COLORS } from "../../../styles/Colors";

export default function NotaRapida({
  notaRapidaTexto,
  setNotaRapidaTexto,
}: NotaRapidaProp) {
  const { adicionaNota } = useContext(NotasContext);

  const adicionarNota = () => {
    if (notaRapidaTexto) {
      const novaNota: INota = {
        id: false,
        titulo: "",
        texto: notaRapidaTexto,
        favorito: false,
        criacao: 0,
        modificacao: 0,
        apagado: false,
      };
      adicionaNota(novaNota);
      setNotaRapidaTexto("");
    }
  };

  return (
    <View style={notaRapidaStyle.menu}>
      <View style={notaRapidaStyle.inline}>
        <TextInput
          style={notaRapidaStyle.input}
          placeholder="Nota rápida!"
          value={notaRapidaTexto}
          onChangeText={setNotaRapidaTexto}
          multiline
        />
        <TouchableOpacity onPress={adicionarNota}>
          <IconeEnviar
            size={24}
            color={notaRapidaTexto ? COLORS.theme : COLORS.blueGray}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
