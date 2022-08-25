import React, { useContext, useState } from "react";
import Markdown from "react-native-markdown-display";
import { NotasContext } from "../context/NotasContext";
import { useNavigation } from "@react-navigation/native";
import { NavigationStackProps } from "../interface/Screens";
import { Text, View, TouchableOpacity, Alert } from "react-native";
import { CardProp } from "../interface/Props";
import { cardStyle } from "../styles";
import { IconeMaisOpcoes } from "./Icones";
import CardMenu from "./CardMenu";
import * as Clipboard from "expo-clipboard";

export default function Card({ card, tipo }: CardProp) {
  const { apagarNota } = useContext(NotasContext);
  const navigation = useNavigation<NavigationStackProps>();

  const [maisOpcoes, setMaisOpcoes] = useState<boolean>(false);

  function abrirNota() {
    if (tipo === "lista" && !maisOpcoes) {
      navigation.navigate("Nota", { nota: card });
    }
  }

  function deletarNota() {
    Alert.alert(
      "Apagar nota",
      "Você tem certeza que deseja apagar esta nota?",
      [
        { text: "Cancelar" },
        { text: "Apagar", onPress: () => apagarNota(card) },
      ]
    );
  }

  async function copiarNota() {
    await Clipboard.setStringAsync(card.texto);
  }

  // function manipularFavoritos() {}

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
          <TouchableOpacity
            style={cardStyle.apagarIcon}
            onPress={() => setMaisOpcoes((estado) => !estado)}
          >
            <IconeMaisOpcoes />
          </TouchableOpacity>
        )}
      </View>
      <TouchableOpacity
        style={tipo === "lista" ? cardStyle.notaCard : cardStyle.notaAberta}
        onPress={abrirNota}
        onLongPress={() => console.log("Pressionou por mais tempo")}
      >
        {maisOpcoes ? (
          <CardMenu deletarNota={deletarNota} copiarNota={copiarNota} />
        ) : (
          <Markdown>{card.texto}</Markdown>
        )}
      </TouchableOpacity>
    </View>
  );
}
