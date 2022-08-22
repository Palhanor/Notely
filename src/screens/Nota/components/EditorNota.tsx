import React from "react";
import styleNota from "../../../styles/notaScreen";
import { Text, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { EditorNotaProp } from "../../../interface/Props";

export default function EditorNota({
  titulo,
  texto,
  setTitulo,
  setTexto,
  setEditando,
}: EditorNotaProp) {
  const visualizeIcon = <Icon name="note-outline" size={30} color="#FFF" />;

  return (
    <>
      <TextInput
        style={styleNota.input}
        onChangeText={setTitulo}
        value={titulo}
        placeholder="Título"
      ></TextInput>
      <TextInput
        multiline
        numberOfLines={8}
        style={styleNota.multiline}
        onChangeText={setTexto}
        value={texto}
        placeholder="Nota"
      ></TextInput>
      <TouchableOpacity
        style={styleNota.botaoEditarVisualizar}
        onPress={() => setEditando(false)}
      >
        <Text style={styleNota.centralizar}>{visualizeIcon}</Text>
      </TouchableOpacity>
    </>
  );
}
