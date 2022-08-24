// Um FlatList atrapalharia a implementação de filtros e favoritos
import React from "react";
import Card from "../../../components/Card";
import { ScrollView } from "react-native";
import { ListaCardsProp } from "../../../interface/Props";
import { listaCardsStyle } from "../../../styles";

// Pegar o valor vindo do Ordenador
// A depender do valor, fazer um sort diferente das notas
export default function ListaCards({ notas, valorBuscado }: ListaCardsProp) {
  const notasFiltradas = notas.filter(
    (nota) =>
      (valorBuscado !== "" &&
        nota.titulo.toLowerCase().indexOf(valorBuscado.toLowerCase()) !== -1) ||
      nota.texto.toLowerCase().indexOf(valorBuscado.toLowerCase()) !== -1
  );

  return (
    <ScrollView style={listaCardsStyle.lista}>
      {notasFiltradas.map((nota) => (
        <Card card={nota} tipo="lista" key={nota.id as number} />
      ))}
    </ScrollView>
  );
}
