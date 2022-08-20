import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import Markdown from "react-native-markdown-display";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import INota from "../interface/Nota";
import { NotasContext } from "../context/NotasContext";
import { NavigationStackProps } from "../interface/Screens";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  FlatList,
} from "react-native";

export default function Home() {
  const { notas } = useContext(NotasContext);
  const navigation = useNavigation<NavigationStackProps>();

  const adicionarIcon = <Icon name="plus" size={30} color="#FFF" />;

  const Card = ({ card }: { card: INota }) => {
    return (
      <View>
        <Text style={styles.tituloNota}>{card.titulo}</Text>
        <View style={styles.nota}>
          <Markdown>{card.texto}</Markdown>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar />
      <TouchableOpacity
        style={styles.botaoCriar}
        onPress={() => navigation.navigate("Nota")}
      >
        <Text style={styles.centralizar}>{adicionarIcon}</Text>
      </TouchableOpacity>
      {notas.length > 0 ? (
        <FlatList
          data={[...notas]}
          style={styles.lista}
          renderItem={({ item }) => <Card card={item} />}
          keyExtractor={({ id }) => `${id}`}
        />
      ) : (
        <Text>Sem notas no momento...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7F8",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
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
    marginTop: 12,
  },
  nota: {
    width: "100%",
    borderColor: "#EEEEEE",
    borderWidth: 1,
    borderRadius: 10,
    padding: 16,
    marginBottom: 22,
    backgroundColor: "#FBFDFE",
    elevation: 2,
    shadowColor: "#1D7C92",
    overflow: "hidden",
  },
  tituloNota: {
    fontWeight: "600",
    fontSize: 17,
    marginBottom: 10,
    marginLeft: 8,
  },
  centralizar: {
    textAlign: "center",
  },
});
