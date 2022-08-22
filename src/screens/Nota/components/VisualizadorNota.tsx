import React from "react";
import Markdown from "react-native-markdown-display";
import globalStyle from "../../../styles/globalStyle";
import styleNota from "../../../styles/notaScreen";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { VisualizadorNotaProp } from "../../../interface/Props";

export default function VisualizadorNota({
  titulo,
  texto,
  setEditando,
}: VisualizadorNotaProp) {
  const editIcon = <Icon name="pencil-outline" size={30} color="#FFF" />;

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
        <Text style={styleNota.centralizar}>{editIcon}</Text>
      </TouchableOpacity>
    </>
  );
}
