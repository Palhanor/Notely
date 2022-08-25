import React, { useContext, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import INota from "../../interface/Nota";
import { NotasContext } from "../../context/NotasContext";
import { NavigationStackProps } from "../../interface/Screens";
import Header from "../../components/Header";
import { View } from "react-native";
import SalvarNota from "./components/SalvarNota";
import VisualizadorNota from "./components/VisualizadorNota";
import EditorNota from "./components/EditorNota";
import { notaStyle } from "../../styles";

export default function FormModal() {
  const { adicionaNota, atualizaNota } = useContext(NotasContext);
  const navigation = useNavigation<NavigationStackProps>();
  const route = useRoute();
  const notaRecebida: INota = route.params?.nota;

  const notaEmBranco = notaRecebida.id === false ? true : false;

  const [editando, setEditando] = useState<boolean>(notaEmBranco);
  const [titulo, setTitulo] = useState<string>(notaRecebida.titulo);
  const [texto, setTexto] = useState<string>(notaRecebida.texto);
  const [id, setId] = useState<number | boolean>(notaRecebida.id);
  const [favorito, setFavorito] = useState<boolean>(notaRecebida.favorito);

  const adicionarNota = () => {
    if (notaEmBranco && texto) {
      const novaNota: INota = { id, titulo, texto, favorito };
      adicionaNota(novaNota);
      navigation.navigate("Home");
    } else if (!notaEmBranco && texto) {
      const notaAtualizada: INota = {
        id: notaRecebida.id,
        titulo,
        texto,
        favorito: notaRecebida.favorito,
      };
      atualizaNota(notaAtualizada);
      navigation.navigate("Home");
    }
    setTitulo("");
    setTexto("");
  };

  return (
    <View style={notaStyle.containerModal}>
      <Header>Nota</Header>
      {editando ? (
        <EditorNota
          titulo={titulo}
          texto={texto}
          setTitulo={setTitulo}
          setTexto={setTexto}
          setEditando={setEditando}
        />
      ) : (
        <VisualizadorNota
          nota={{ id, titulo, texto, favorito }}
          setEditando={setEditando}
        />
      )}
      <SalvarNota adicionarNota={adicionarNota}></SalvarNota>
    </View>
  );
}
