// Um FlatList atrapalharia a implementação de filtros e favoritos
import React from "react";
import Card from "../../../components/Card";
import { ScrollView, View, Text } from "react-native";
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
        return notas.sort((a, b) => b.criacao - a.criacao);
      case 1:
        return notas.sort((a, b) => a.criacao - b.criacao);
      case 2:
        return notas.sort((a, b) => b.modificacao - a.modificacao);
      case 3:
        return notas.sort((a, b) => a.modificacao - b.modificacao);
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

  const notasFavoritas = notasFiltradas.filter(
    (nota) => nota.favorito === true
  );
  const notasNormais = notasFiltradas.filter((nota) => nota.favorito === false);

  return (
    <ScrollView style={listaCardsStyle.lista}>
      {notasFavoritas.length > 0 && (
        <View>
          <Text style={listaCardsStyle.header}>Favoritas</Text>
          {notasFavoritas.map((nota) => (
            <Card card={nota} tipo="lista" key={nota.id as number} />
          ))}
        </View>
      )}
      <View>
        {notasFavoritas.length > 0 && notasNormais.length > 0 && (
          <Text style={listaCardsStyle.header}>Outras</Text>
        )}
        {notasNormais.map((nota) => (
          <Card card={nota} tipo="lista" key={nota.id as number} />
        ))}
      </View>
    </ScrollView>
  );
}
