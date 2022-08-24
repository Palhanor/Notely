import React, { useContext, useState } from "react";
import Header from "../../components/Header";
import BotaoPrincipal from "../../components/BotaoPrincipal";
import Menu from "./components/Menu";
import ListaCards from "./components/ListaCards";
import Buscador from "./components/Buscador";
import { NotasContext } from "../../context/NotasContext";
import { View, StatusBar } from "react-native";
import { IconeAdicionar } from "../../components/Icones";
import { NavigationStackProps } from "../../interface/Screens";
import { useNavigation } from "@react-navigation/native";
import { homeStyle } from "../../styles";

export default function Home() {
  const { notas } = useContext(NotasContext);
  const navigation = useNavigation<NavigationStackProps>();

  const [buscando, setBuscando] = useState<boolean>(false);
  const [valorBuscado, setValorBuscado] = useState<string>("");

  const abrirNovaNota = () => {
    navigation.navigate("Nota", {
      nota: { id: false, titulo: "", texto: "" },
    });
  };

  return (
    <View style={homeStyle.container}>
      <StatusBar />
      <Header>Notely</Header>
      {buscando && (
        <Buscador
          valorBuscado={valorBuscado}
          setValorBuscado={setValorBuscado}
        />
      )}
      <ListaCards notas={notas} valorBuscado={valorBuscado} />
      <BotaoPrincipal icone={<IconeAdicionar />} onPress={abrirNovaNota} />
      <Menu setBuscando={setBuscando} setValorBuscado={setValorBuscado} />
    </View>
  );
}
