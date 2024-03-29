import React, { useContext, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import INota from "../../interface/Nota";
import { NotasContext } from "../../context/NotasContext";
import { NavigationStackProps } from "../../interface/Screens";
import Header from "../../components/Header";
import SalvarNota from "./components/SalvarNota";
import VisualizadorNota from "./components/VisualizadorNota";
import EditorNota from "./components/EditorNota";
import { notaStyle } from "../../styles";
import FerramentasNota from "./components/FerramentasNota";
import {
  NativeSyntheticEvent,
  TextInputSelectionChangeEventData,
  View,
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

  const [posicaoCursorInicial, setPosicaoCursorInicial] = useState<number>(0);
  const [posicaoCursorFinal, setPosicaoCursorFinal] = useState<number>(0);

  const nota: INota = {
    ...notaRecebida,
    titulo,
    texto,
  };

  const adicionarNota = () => {
    if (notaEmBranco && texto) {
      adicionaNota(nota);
    } else if (!notaEmBranco && texto) {
      atualizaNota(nota);
    }
    navigation.navigate("Home");
    setTitulo("");
    setTexto("");
  };

  const posicaoCursor = (
    event: NativeSyntheticEvent<TextInputSelectionChangeEventData>
  ) => {
    setPosicaoCursorInicial(event.nativeEvent.selection.start);
    setPosicaoCursorFinal(event.nativeEvent.selection.end);
  };

  return (
    <View style={notaStyle.containerModal}>
      <Header>Nota</Header>
      {editando ? (
        <>
          <EditorNota
            titulo={titulo}
            texto={texto}
            setTitulo={setTitulo}
            setTexto={setTexto}
            setEditando={setEditando}
            posicaoCursor={posicaoCursor}
          />
          <FerramentasNota
            setTexto={setTexto}
            posicaoCursorInicial={posicaoCursorInicial}
            posicaoCursorFinal={posicaoCursorFinal}
          />
        </>
      ) : (
        <VisualizadorNota nota={nota} setEditando={setEditando} />
      )}
      <SalvarNota adicionarNota={adicionarNota}></SalvarNota>
    </View>
  );
}
