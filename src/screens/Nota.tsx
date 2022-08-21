import React, { useContext, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import Markdown from "react-native-markdown-display";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import INota from "../interface/Nota";
import { NotasContext } from "../context/NotasContext";
import { NavigationStackProps } from "../interface/Screens";
import globalStyle from "../styles";
import Header from "../components/Header";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function FormModal() {
  const { adicionaNota, atualizaNota } = useContext(NotasContext);
  const navigation = useNavigation<NavigationStackProps>();
  const route = useRoute();
  const notaRecebida: INota = route.params?.nota;

  const notaEmBranco = notaRecebida.id === false ? true : false;

  const [editando, setEditando] = useState<boolean>(notaEmBranco);
  const [titulo, setTitulo] = useState<string>(notaRecebida.titulo);
  const [texto, setTexto] = useState<string>(notaRecebida.texto);

  const editIcon = <Icon name="pencil-outline" size={30} color="#FFF" />;
  const visualizeIcon = <Icon name="note-outline" size={30} color="#FFF" />;

  const adicionarNota = () => {
    if (notaEmBranco && titulo && texto) {
      const novaNota: INota = {
        id: false,
        titulo: titulo,
        texto: texto,
      };
      adicionaNota(novaNota);
      navigation.navigate("Home");
    } else if (!notaEmBranco && titulo && texto) {
      const notaAtualizada: INota = {
        id: notaRecebida.id,
        titulo: titulo,
        texto: texto,
      };
      atualizaNota(notaAtualizada);
      navigation.navigate("Home");
    }
    setTitulo("");
    setTexto("");
  };

  return (
    <View style={styles.containerModal}>
      <Header>Nota</Header>
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
          <Text style={globalStyle.tituloNotaVisualizacao}>{titulo}</Text>
          <View style={globalStyle.nota}>
            <Markdown>{texto}</Markdown>
          </View>
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
    backgroundColor: "#F5F7F8",
  },
  input: {
    width: "100%",
    height: 42,
    padding: 8,
    fontSize: 20,
    marginHorizontal: 16,
    marginTop: 16,
  },
  multiline: {
    width: "100%",
    height: "60%",
    marginVertical: 8,
    padding: 8,
    textAlignVertical: "top",
    marginHorizontal: 16,
  },
  botaoEditarVisualizar: {
    backgroundColor: "#0E677A",
    width: 60,
    height: 60,
    borderRadius: 60,
    padding: 12,
    position: "absolute",
    bottom: 80,
    right: 16,
    zIndex: 1,
  },
  botaoSalvar: {
    backgroundColor: "#0E677A",
    width: "100%",
    padding: 18,
    position: "absolute",
    bottom: 0,
    left: 0,
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
