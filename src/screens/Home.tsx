import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import Markdown from "react-native-markdown-display";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FeatherIcons from "react-native-vector-icons/Feather";
import INota from "../interface/Nota";
import { NotasContext } from "../context/NotasContext";
import { NavigationStackProps } from "../interface/Screens";
import globalStyle from "../styles";
import Header from "../components/Header";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";

export default function Home() {
  const { notas } = useContext(NotasContext);
  const navigation = useNavigation<NavigationStackProps>();

  const adicionarIcon = (
    <MaterialCommunityIcons name="plus" size={30} color="#FFF" />
  );
  const moreIcon = <FeatherIcons name="more-vertical" size={20} color="#000" />;

  const Card = ({ card }: { card: INota }) => {
    function abrirNota() {
      navigation.navigate("Nota", { nota: card });
    }

    function maisOpcoes() {
      console.log("Abrindo as opções da nota");
    }

    return (
      <View>
        <View style={globalStyle.campoTitulo}>
          <Text style={globalStyle.tituloNotaCard}>{card.titulo}</Text>
          <TouchableOpacity
            style={globalStyle.moreIcon}
            onPress={maisOpcoes}
          >
            <Text>{moreIcon}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={abrirNota} style={globalStyle.nota}>
          <Markdown>{card.texto}</Markdown>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar />
      <Header>Notely</Header>
      <TouchableOpacity
        style={styles.botaoCriar}
        onPress={() =>
          navigation.navigate("Nota", {
            nota: { id: false, titulo: "", texto: "" },
          })
        }
      >
        <Text style={styles.centralizar}>{adicionarIcon}</Text>
      </TouchableOpacity>
      {notas.length > 0 && (
        <FlatList
          data={[...notas]}
          style={styles.lista}
          renderItem={({ item }) => <Card card={item} />}
          keyExtractor={({ id }) => `${id}`}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7F8",
    alignItems: "center",
  },
  botaoCriar: {
    backgroundColor: "#0E677A",
    width: 60,
    height: 60,
    borderRadius: 60,
    padding: 12,
    position: "absolute",
    bottom: 32,
    right: 16,
    zIndex: 1,
  },
  lista: {
    width: "100%",
    paddingTop: 16,
  },
  centralizar: {
    textAlign: "center",
  },
});
