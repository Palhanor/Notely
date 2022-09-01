import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { FerramentasNotaProp } from "../../../interface/Props";
import { ferramentasNota } from "../../../styles";
import {
  IconeCitacao,
  IconeCodigo,
  IconeHeader,
  IconeImagem,
  IconeItalico,
  IconeLinha,
  IconeLink,
  IconeListaBullet,
  IconeListaNumero,
  IconeNegrito,
  IconeRiscado,
} from "../../../components/Icones";

export default function FerramentasNota({
  setTexto,
  posicaoCursorInicial,
  posicaoCursorFinal,
}: FerramentasNotaProp) {
  const adicionarNegrito = () => {
    setTexto((textoAnterior) => {
      const conteudo = textoAnterior.slice(
        posicaoCursorInicial,
        posicaoCursorFinal
      );
      if (!/\*\*.*\*\*/.test(conteudo)) {
        return (
          textoAnterior.slice(0, posicaoCursorInicial) +
          "**" +
          conteudo +
          "**" +
          textoAnterior.slice(posicaoCursorFinal)
        );
      }
      return (
        textoAnterior.slice(0, posicaoCursorInicial) +
        "" +
        conteudo.slice(2, conteudo.length - 2) +
        "" +
        textoAnterior.slice(posicaoCursorFinal)
      );
    });
  };

  const adicionarItalico = () => {
    setTexto((textoAnterior) => {
      const conteudo = textoAnterior.slice(
        posicaoCursorInicial,
        posicaoCursorFinal
      );
      if (!/\*.*\*/.test(conteudo)) {
        return (
          textoAnterior.slice(0, posicaoCursorInicial) +
          "*" +
          conteudo +
          "*" +
          textoAnterior.slice(posicaoCursorFinal)
        );
      }
      return (
        textoAnterior.slice(0, posicaoCursorInicial) +
        "" +
        conteudo.slice(1, conteudo.length - 1) +
        "" +
        textoAnterior.slice(posicaoCursorFinal)
      );
    });
  };

  const adicionarRiscado = () => {
    setTexto((textoAnterior) => {
      const conteudo = textoAnterior.slice(
        posicaoCursorInicial,
        posicaoCursorFinal
      );
      if (!/~~.*~~/.test(conteudo)) {
        return (
          textoAnterior.slice(0, posicaoCursorInicial) +
          "~~" +
          conteudo +
          "~~" +
          textoAnterior.slice(posicaoCursorFinal)
        );
      }
      return (
        textoAnterior.slice(0, posicaoCursorInicial) +
        "" +
        conteudo.slice(2, conteudo.length - 2) +
        "" +
        textoAnterior.slice(posicaoCursorFinal)
      );
    });
  };

  const adicionarHeader = () => {
    setTexto((textoAnterior) => {
      const conteudo = textoAnterior.slice(
        posicaoCursorInicial,
        posicaoCursorFinal
      );
      if (!/###\s.*/.test(conteudo)) {
        return (
          textoAnterior.slice(0, posicaoCursorInicial) +
          "### " +
          textoAnterior.slice(posicaoCursorInicial)
        );
      }
      return (
        textoAnterior.slice(0, posicaoCursorInicial) +
        conteudo.slice(4, conteudo.length) +
        textoAnterior.slice(posicaoCursorFinal)
      );
    });
  };

  const adicionarLinha = () => {
    setTexto((textoAnterior) => {
      const conteudo = textoAnterior.slice(
        posicaoCursorInicial,
        posicaoCursorFinal
      );
      if (!/\n{0,2}---\n{0,2}/.test(conteudo)) {
        return (
          textoAnterior.slice(0, posicaoCursorInicial) +
          "\n\n---\n\n" +
          textoAnterior.slice(posicaoCursorFinal)
        );
      }
      return (
        textoAnterior.slice(0, posicaoCursorInicial) +
        "" +
        textoAnterior.slice(posicaoCursorFinal)
      );
    });
  };

  // Não remove a notação
  const adicionarLink = () => {
    setTexto((textoAnterior) => {
      return (
        textoAnterior.slice(0, posicaoCursorInicial) +
        "[" +
        textoAnterior.slice(posicaoCursorInicial, posicaoCursorFinal) +
        "](url)" +
        textoAnterior.slice(posicaoCursorFinal)
      );
    });
  };

  // Não remove a notação
  const adicionarImagem = () => {
    setTexto((textoAnterior) => {
      return (
        textoAnterior.slice(0, posicaoCursorInicial) +
        "![" +
        textoAnterior.slice(posicaoCursorInicial, posicaoCursorFinal) +
        "](url)" +
        textoAnterior.slice(posicaoCursorFinal)
      );
    });
  };

  const adicionarListaBullet = () => {
    setTexto((textoAnterior) => {
      const conteudo = textoAnterior.slice(
        posicaoCursorInicial,
        posicaoCursorFinal
      );
      if (!/-\s.*/.test(conteudo)) {
        return (
          textoAnterior.slice(0, posicaoCursorInicial) +
          "- " +
          textoAnterior.slice(posicaoCursorInicial)
        );
      }
      return (
        textoAnterior.slice(0, posicaoCursorInicial) +
        conteudo.slice(2, conteudo.length) +
        textoAnterior.slice(posicaoCursorFinal)
      );
    });
  };

  const adicionarListaNumero = () => {
    setTexto((textoAnterior) => {
      const conteudo = textoAnterior.slice(
        posicaoCursorInicial,
        posicaoCursorFinal
      );
      if (!/\d\.\s.*/.test(conteudo)) {
        return (
          textoAnterior.slice(0, posicaoCursorInicial) +
          "1. " +
          textoAnterior.slice(posicaoCursorInicial)
        );
      }
      return (
        textoAnterior.slice(0, posicaoCursorInicial) +
        conteudo.slice(3, conteudo.length) +
        textoAnterior.slice(posicaoCursorFinal)
      );
    });
  };

  const adicionarCitacao = () => {
    setTexto((textoAnterior) => {
      const conteudo = textoAnterior.slice(
        posicaoCursorInicial,
        posicaoCursorFinal
      );
      if (!/>\s.*/.test(conteudo)) {
        return (
          textoAnterior.slice(0, posicaoCursorInicial) +
          "> " +
          textoAnterior.slice(posicaoCursorInicial)
        );
      }
      return (
        textoAnterior.slice(0, posicaoCursorInicial) +
        conteudo.slice(2, conteudo.length) +
        textoAnterior.slice(posicaoCursorFinal)
      );
    });
  };

  const adicionarCodigo = () => {
    setTexto((textoAnterior) => {
      const conteudo = textoAnterior.slice(
        posicaoCursorInicial,
        posicaoCursorFinal
      );
      if (!/\`\`\`\n.*\n\`\`\`/.test(conteudo)) {
        return (
          textoAnterior.slice(0, posicaoCursorInicial) +
          "```\n" +
          conteudo +
          "\n```" +
          textoAnterior.slice(posicaoCursorFinal)
        );
      }
      return (
        textoAnterior.slice(0, posicaoCursorInicial) +
        "" +
        conteudo.slice(4, conteudo.length - 4) +
        "" +
        textoAnterior.slice(posicaoCursorFinal)
      );
    });
  };

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      keyboardShouldPersistTaps="always"
      style={ferramentasNota.barra}
    >
      <TouchableOpacity
        style={ferramentasNota.botao}
        onPress={adicionarNegrito}
      >
        <IconeNegrito />
      </TouchableOpacity>
      <TouchableOpacity
        style={ferramentasNota.botao}
        onPress={adicionarItalico}
      >
        <IconeItalico />
      </TouchableOpacity>
      <TouchableOpacity
        style={ferramentasNota.botao}
        onPress={adicionarRiscado}
      >
        <IconeRiscado />
      </TouchableOpacity>
      <TouchableOpacity style={ferramentasNota.botao} onPress={adicionarHeader}>
        <IconeHeader />
      </TouchableOpacity>
      <TouchableOpacity style={ferramentasNota.botao} onPress={adicionarLinha}>
        <IconeLinha />
      </TouchableOpacity>
      <TouchableOpacity style={ferramentasNota.botao} onPress={adicionarLink}>
        <IconeLink />
      </TouchableOpacity>
      <TouchableOpacity style={ferramentasNota.botao} onPress={adicionarImagem}>
        <IconeImagem />
      </TouchableOpacity>
      <TouchableOpacity
        style={ferramentasNota.botao}
        onPress={adicionarListaBullet}
      >
        <IconeListaBullet />
      </TouchableOpacity>
      <TouchableOpacity
        style={ferramentasNota.botao}
        onPress={adicionarListaNumero}
      >
        <IconeListaNumero />
      </TouchableOpacity>
      <TouchableOpacity
        style={ferramentasNota.botao}
        onPress={adicionarCitacao}
      >
        <IconeCitacao />
      </TouchableOpacity>
      <TouchableOpacity
        style={[ferramentasNota.botao, { marginRight: 10 }]}
        onPress={adicionarCodigo}
      >
        <IconeCodigo />
      </TouchableOpacity>
    </ScrollView>
  );
}
