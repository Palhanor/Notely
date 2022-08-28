import React from "react";
import { ScrollView, Text, View } from "react-native";
import { VisualizadorNotaProp } from "../../../interface/Props";
import { IconeEditar } from "../../../components/Icones";
import BotaoPrincipal from "../../../components/BotaoPrincipal";
import Card from "../../../components/Card";
import { visualizadorNotaStyle } from "../../../styles";

export default function VisualizadorNota({
  nota,
  setEditando,
}: VisualizadorNotaProp) {
  // const padraoData = /(\d{2})\/(\d{2})\/(\d{4})/g;

  let dataCriacao = new Date(nota.criacao).toLocaleDateString();
  const criacaoMes = dataCriacao[0] + dataCriacao[1];
  const criacaoDia = dataCriacao[3] + dataCriacao[4];
  const criacaoAno = dataCriacao[6] + dataCriacao[7];
  const dataCriacaoBR = `${criacaoDia}/${criacaoMes}/${criacaoAno}`;
  const horarioCriacao = new Date(nota.criacao)
    .toLocaleTimeString()
    .slice(0, 5);

  const dataModificacao = new Date(nota.modificacao).toLocaleDateString();
  const modificacaoMes = dataModificacao[0] + dataModificacao[1];
  const modificacaoDia = dataModificacao[3] + dataModificacao[4];
  const modificacaoAno = dataModificacao[6] + dataModificacao[7];
  const dataModificacaoBR = `${modificacaoDia}/${modificacaoMes}/${modificacaoAno}`;
  const horarioModificacao = new Date(nota.modificacao)
    .toLocaleTimeString()
    .slice(0, 5);

  return (
    <>
      <ScrollView>
        <Card card={nota} tipo="visualizacao" />
        <View style={visualizadorNotaStyle.blocoMetadados}>
          {nota.criacao > 0 && (
            <Text style={visualizadorNotaStyle.metadados}>
              <Text style={visualizadorNotaStyle.metadadosTitulo}>
                Criação:
              </Text>{" "}
              {dataCriacaoBR} &#x2022; {horarioCriacao}
            </Text>
          )}
          {nota.modificacao > 0 && (
            <Text style={visualizadorNotaStyle.metadados}>
              <Text style={visualizadorNotaStyle.metadadosTitulo}>
                Modificação:
              </Text>{" "}
              {dataModificacaoBR} &#x2022; {horarioModificacao}
            </Text>
          )}
        </View>
      </ScrollView>
      <BotaoPrincipal
        icone={<IconeEditar />}
        onPress={() => setEditando(true)}
        altura={80}
      />
    </>
  );
}
