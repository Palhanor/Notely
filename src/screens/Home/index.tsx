import React, { useContext } from "react";
import { NotasContext } from "../../context/NotasContext";
import Header from "../../components/Header";
import styleHome from "../../styles/homeScreen";
import BotaoCriarNota from "./components/BotaoCriarNota";
import ListaCards from "./components/ListaCards";
import { View, StatusBar } from "react-native";

export default function Home() {
  const { notas } = useContext(NotasContext);

  return (
    <View style={styleHome.container}>
      <StatusBar />
      <Header>Notely</Header>
      <ListaCards notas={notas}></ListaCards>
      <BotaoCriarNota></BotaoCriarNota>
    </View>
  );
}
