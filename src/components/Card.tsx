import React, { useContext } from "react";
import Markdown from "react-native-markdown-display";
import { NotasContext } from "../context/NotasContext";
import { useNavigation } from "@react-navigation/native";
import { NavigationStackProps } from "../interface/Screens";
import { Text, View, TouchableOpacity, Alert } from "react-native";
import { IconeLixo } from "./Icones";
import { COLORS } from "../styles/Colors";
import { CardProp } from "../interface/Props";
import { cardStyle } from "../styles";

export default function Card({ card, tipo }: CardProp) {
  const { apagarNota } = useContext(NotasContext);
  const navigation = useNavigation<NavigationStackProps>();

  function abrirNota() {
    if (tipo === "lista") {
      navigation.navigate("Nota", { nota: card });
    }
  }

  function deletar() {
    Alert.alert(
      "Apagar nota",
      "Você tem certeza que deseja apagar esta nota?",
      [
        { text: "Cancelar" },
        { text: "Apagar", onPress: () => apagarNota(card) },
      ]
    );
  }

  return (
    <View>
      <View style={cardStyle.campoTitulo}>
        <Text
          style={
            tipo === "lista"
              ? cardStyle.tituloNotaCard
              : cardStyle.tituloNotaVisualizacao
          }
        >
          {card.titulo}
        </Text>
        {tipo === "lista" && (
          <TouchableOpacity style={cardStyle.apagarIcon} onPress={deletar}>
            <IconeLixo size={20} color={COLORS.black} />
          </TouchableOpacity>
        )}
      </View>
      <TouchableOpacity
        style={tipo === "lista" ? cardStyle.notaCard : cardStyle.notaAberta}
        onPress={abrirNota}
        onLongPress={() => console.log("Pressionou por mais tempo")}
      >
        <Markdown>{card.texto}</Markdown>
      </TouchableOpacity>
    </View>
  );
}
