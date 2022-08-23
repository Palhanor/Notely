import React from "react";
import { TextInput } from "react-native";
import { EditorNotaProp } from "../../../interface/Props";
import { IconeVisualizar } from "../../../components/Icones";
import BotaoPrincipal from "../../../components/BotaoPrincipal";
import { editorNotaStyle } from "../../../styles";

export default function EditorNota({
  titulo,
  texto,
  setTitulo,
  setTexto,
  setEditando,
}: EditorNotaProp) {
  return (
    <>
      <TextInput
        style={editorNotaStyle.input}
        onChangeText={setTitulo}
        value={titulo}
        placeholder="Título"
      ></TextInput>
      <TextInput
        multiline
        numberOfLines={8}
        style={editorNotaStyle.multiline}
        onChangeText={setTexto}
        value={texto}
        placeholder="Nota"
      ></TextInput>
      <BotaoPrincipal
        icone={<IconeVisualizar />}
        onPress={() => setEditando(false)}
      />
    </>
  );
}
