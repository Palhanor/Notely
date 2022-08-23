import React from "react";
import Card from "../../../components/Card";
import { FlatList } from "react-native";
import { ListaCardsProp } from "../../../interface/Props";
import { listaCardsStyle } from "../../../styles";

export default function ListaCards({ notas }: ListaCardsProp) {
  return (
    <>
      {notas.length > 0 && (
        <FlatList
          data={[...notas]}
          style={listaCardsStyle.lista}
          renderItem={({ item }) => <Card card={item} tipo="lista" />}
          keyExtractor={({ id }) => `${id}`}
        />
      )}
    </>
  );
}
