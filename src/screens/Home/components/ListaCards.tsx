// Um FlatList atrapalharia a implementação de filtros e favoritos
import React from "react";
import Card from "../../../components/Card";
import { ScrollView } from "react-native";
import { ListaCardsProp } from "../../../interface/Props";
import { listaCardsStyle } from "../../../styles";

export default function ListaCards({
  notas,
  valorBuscado,
  valorOrdenador,
}: ListaCardsProp) {
  (function () {
    // console.log("Reordenando as notas (modificando estado)");
    /* Reordena quando:
     * Atualiza a Home
     * Cria ou edita uma nota
     * Abre ou fecha o ordenador */
    switch (valorOrdenador) {
      case 0:
        return notas.sort((a, b) => (b.id as number) - (a.id as number));
      case 1:
        return notas.sort((a, b) => (a.id as number) - (b.id as number));
      // case 2: return notas; // Data de modificação (mais recente)
      // case 3: return notas; // Data de modificação (mais antiga)
      case 4:
        return notas.sort((a, b) => a.titulo.localeCompare(b.titulo));
      case 5:
        return notas.sort((a, b) => b.titulo.localeCompare(a.titulo));
      default:
        return notas;
    }
  })();

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
