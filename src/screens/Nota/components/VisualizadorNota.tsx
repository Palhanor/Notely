import React from "react";
import { ScrollView } from "react-native";
import { VisualizadorNotaProp } from "../../../interface/Props";
import { IconeEditar } from "../../../components/Icones";
import BotaoPrincipal from "../../../components/BotaoPrincipal";
import Card from "../../../components/Card";

export default function VisualizadorNota({
  nota,
  setEditando,
}: VisualizadorNotaProp) {
  return (
    <>
      <ScrollView>
        <Card card={nota} tipo="visualizacao" />
      </ScrollView>
      <BotaoPrincipal
        icone={<IconeEditar />}
        onPress={() => setEditando(true)}
      />
    </>
  );
}
