import React from "react";
import styleHome from "../../../styles/homeScreen";
import Card from "./Card";
import { FlatList } from "react-native";
import { ListaCardsProp } from "../../../interface/Props";

export default function ListaCards({ notas }: ListaCardsProp) {
  return (
    <>
      {notas.length > 0 && (
        <FlatList
          data={[...notas]}
          style={styleHome.lista}
          renderItem={({ item }) => <Card card={item} />}
          keyExtractor={({ id }) => `${id}`}
        />
      )}
    </>
  );
}
