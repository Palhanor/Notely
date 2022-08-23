import React, { useContext } from "react";
import Markdown from "react-native-markdown-display";
import INota from "../../../interface/Nota";
import globalStyle from "../../../styles/cardStyle";
import { NotasContext } from "../../../context/NotasContext";
import { useNavigation } from "@react-navigation/native";
import { NavigationStackProps } from "../../../interface/Screens";
import { Text, View, TouchableOpacity, Alert } from "react-native";
import { IconeLixo } from "../../../components/Icones";
import { COLORS } from "../../../utils/Colors";

export default function Card({ card }: { card: INota }) {
  const { apagarNota } = useContext(NotasContext);
  const navigation = useNavigation<NavigationStackProps>();

  function abrirNota() {
    navigation.navigate("Nota", { nota: card });
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
      <View style={globalStyle.campoTitulo}>
        <Text style={globalStyle.tituloNotaCard}>{card.titulo}</Text>
        <TouchableOpacity style={globalStyle.apagarIcon} onPress={deletar}>
          <Text>
            <IconeLixo size={20} color={COLORS.black} />
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={globalStyle.notaCard}
        onPress={abrirNota}
        onLongPress={() => console.log("Pressionou por mais tempo")}
      >
        <Markdown>{card.texto}</Markdown>
      </TouchableOpacity>
    </View>
  );
}
