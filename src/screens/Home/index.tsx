import React, { useContext } from "react";
import { NotasContext } from "../../context/NotasContext";
import Header from "../../components/Header";
import BotaoPrincipal from "../../components/BotaoPrincipal";
import ListaCards from "./components/ListaCards";
import { View, StatusBar } from "react-native";
import { IconeAdicionar } from "../../components/Icones";
import { NavigationStackProps } from "../../interface/Screens";
import { useNavigation } from "@react-navigation/native";
import Menu from "./components/Menu";
import { homeStyle } from "../../styles";

export default function Home() {
  const { notas } = useContext(NotasContext);
  const navigation = useNavigation<NavigationStackProps>();

  const abrirNovaNota = () => {
    navigation.navigate("Nota", {
      nota: { id: false, titulo: "", texto: "" },
    });
  };

  return (
    <View style={homeStyle.container}>
      <StatusBar />
      <Header>Notely</Header>
      <ListaCards notas={notas} />
      <BotaoPrincipal icone={<IconeAdicionar />} onPress={abrirNovaNota} />
      <Menu />
    </View>
  );
}
