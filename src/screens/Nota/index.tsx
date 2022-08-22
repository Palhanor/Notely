import React, { useContext, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import INota from "../../interface/Nota";
import { NotasContext } from "../../context/NotasContext";
import { NavigationStackProps } from "../../interface/Screens";
import Header from "../../components/Header";
import styleNota from "../../styles/notaScreen";
import { View } from "react-native";
import SalvarNota from "./components/SalvarNota";
import VisualizadorNota from "./components/VisualizadorNota";
import EditorNota from "./components/EditorNota";

export default function FormModal() {
  const { adicionaNota, atualizaNota } = useContext(NotasContext);
  const navigation = useNavigation<NavigationStackProps>();
  const route = useRoute();
  const notaRecebida: INota = route.params?.nota;

  const notaEmBranco = notaRecebida.id === false ? true : false;

  const [editando, setEditando] = useState<boolean>(notaEmBranco);
  const [titulo, setTitulo] = useState<string>(notaRecebida.titulo);
  const [texto, setTexto] = useState<string>(notaRecebida.texto);

  const adicionarNota = () => {
    if (notaEmBranco && texto) {
      const novaNota: INota = {
        id: false,
        titulo: titulo,
        texto: texto,
      };
      adicionaNota(novaNota);
      navigation.navigate("Home");
    } else if (!notaEmBranco && texto) {
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
    <View style={styleNota.containerModal}>
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
          titulo={titulo}
          texto={texto}
          setEditando={setEditando}
        />
      )}
      <SalvarNota adicionarNota={adicionarNota}></SalvarNota>
    </View>
  );
}
