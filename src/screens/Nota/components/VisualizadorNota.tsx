import React from "react";
import Markdown from "react-native-markdown-display";
import globalStyle from "../../../styles/cardStyle";
import styleNota from "../../../styles/notaScreen";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { VisualizadorNotaProp } from "../../../interface/Props";
import { IconeEditar } from "../../../components/Icones";

export default function VisualizadorNota({
  titulo,
  texto,
  setEditando,
}: VisualizadorNotaProp) {
  return (
    <>
      <ScrollView>
        <Text style={globalStyle.tituloNotaVisualizacao}>
          {titulo !== "" ? titulo : "Sem nome"}
        </Text>
        <View style={globalStyle.notaAberta}>
          <Markdown>{texto}</Markdown>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styleNota.botaoEditarVisualizar}
        onPress={() => setEditando(true)}
      >
        <Text style={styleNota.centralizar}>
          <IconeEditar />
        </Text>
      </TouchableOpacity>
    </>
  );
}
