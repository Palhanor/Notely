import React, { useEffect, useState } from "react";
import { Keyboard, TextInput } from "react-native";
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
  posicaoCursor,
}: EditorNotaProp) {
  const [tecladoAberto, setTecladoAberto] = useState(false);

  const abrindoTeclado = () => {
    setTecladoAberto(true);
  };

  const fechandoTeclado = () => {
    setTecladoAberto(false);
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      abrindoTeclado
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      fechandoTeclado
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

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
        style={[
          editorNotaStyle.multiline,
          tecladoAberto ? { height: "50%" } : { height: "65%" },
        ]}
        onChangeText={setTexto}
        value={texto}
        placeholder="Nota"
        onSelectionChange={(e) => posicaoCursor(e)}
      ></TextInput>
      <BotaoPrincipal
        icone={<IconeVisualizar />}
        onPress={() => setEditando(false)}
        altura={120}
      />
    </>
  );
}
