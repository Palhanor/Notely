/* 
  Fazer ele receber uma nota da home
    1. Pode ser vazia ao clicar em criar nova nota
      - Nesse caso estidando sera true e abrira o editor
      - Assim, apos ser editada, esta deve ser salva no db
    2. Pode ser com conteudo ao clicar em uma nota
      - Nesse caso estidando sera false e abrira o visualizador
      - Assim, apos ser editada, deve atualizar o db
*/

import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import Markdown from "react-native-markdown-display";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import INota from "../interface/Nota";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function FormModal() {
  const route = useRoute();
  const { setNotas } = route.params;

  const navigation = useNavigation();
  const [titulo, setTitulo] = useState<string>("");
  const [texto, setTexto] = useState<string>("");
  const [editando, setEditando] = useState<boolean>(true);

  const editIcon = <Icon name="pencil-outline" size={30} color="#FFF" />;
  const visualizeIcon = <Icon name="note-outline" size={30} color="#FFF" />;

  const adicionarNota = () => {
    if (titulo && texto) {
      setNotas((notas: INota[]) => [
        { id: notas.length + 1, titulo: titulo, texto },
        ...notas,
      ]);
      setTitulo("");
      setTexto("");
      navigation.navigate("Home");
    }
  };

  return (
    <View style={styles.containerModal}>
      {editando ? (
        <>
          <TextInput
            style={styles.input}
            onChangeText={setTitulo}
            value={titulo}
            placeholder="Título"
          ></TextInput>
          <TextInput
            multiline
            numberOfLines={8}
            style={styles.multiline}
            onChangeText={setTexto}
            value={texto}
            placeholder="Nota"
          ></TextInput>
          <TouchableOpacity
            style={styles.botaoEditarVisualizar}
            onPress={() => setEditando(false)}
          >
            <Text style={styles.centralizar}>{visualizeIcon}</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text style={styles.input}>{titulo}</Text>
          <Markdown>{texto}</Markdown>
          <TouchableOpacity
            style={styles.botaoEditarVisualizar}
            onPress={() => setEditando(true)}
          >
            <Text style={styles.centralizar}>{editIcon}</Text>
          </TouchableOpacity>
        </>
      )}
      <TouchableOpacity style={styles.botaoSalvar} onPress={adicionarNota}>
        <Text style={styles.textoBotaoSalvar}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  containerModal: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F5F8F5",
  },
  input: {
    width: "100%",
    height: 42,
    marginVertical: 8,
    padding: 8,
    fontSize: 20,
  },
  multiline: {
    width: "100%",
    height: "60%",
    marginVertical: 8,
    padding: 8,
    textAlignVertical: "top",
  },
  botaoEditarVisualizar: {
    backgroundColor: "#B5CBB7",
    width: 60,
    height: 60,
    borderRadius: 60,
    padding: 12,
    position: "absolute",
    bottom: 150,
    right: 16,
    zIndex: 1,
  },
  botaoSalvar: {
    backgroundColor: "#91A292",
    width: "100%",
    borderRadius: 5,
    padding: 18,
    position: "absolute",
    bottom: 50,
    left: 16,
    zIndex: 1,
  },
  textoBotaoSalvar: {
    textAlign: "center",
    color: "#FFFFFF",
  },
  centralizar: {
    textAlign: "center",
  },
});
