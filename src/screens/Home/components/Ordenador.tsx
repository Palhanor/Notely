import React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import { ordenadorStyle } from "../../../styles";

// Pegar o valor selecionado e atualizar o estado
// Atualizar o valor selecionado de negrito
export default function Ordenador() {
  return (
    <View style={ordenadorStyle.ordenador}>
      <TouchableWithoutFeedback
        onPress={() => console.log("Criadas recentemente")}
      >
        <View style={ordenadorStyle.opcao}>
          <Text style={ordenadorStyle.opcaoTexto}>Criadas recentemente</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => console.log("Criadas há mais tempo")}
      >
        <View style={ordenadorStyle.opcao}>
          <Text style={ordenadorStyle.opcaoTexto}>Criadas há mais tempo</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => console.log("Modificadas recentemente")}
      >
        <View style={ordenadorStyle.opcao}>
          <Text style={ordenadorStyle.opcaoTexto}>
            Modificadas recentemente
          </Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => console.log("Modificadas há mais tempo")}
      >
        <View style={ordenadorStyle.opcao}>
          <Text style={ordenadorStyle.opcaoTexto}>
            Modificadas há mais tempo
          </Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => console.log("De A a Z")}>
        <View style={ordenadorStyle.opcao}>
          <Text style={ordenadorStyle.opcaoTexto}>De A a Z</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => console.log("De Z a A")}>
        <View style={ordenadorStyle.opcao}>
          <Text style={ordenadorStyle.opcaoTexto}>De Z a A</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
