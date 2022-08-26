import React from "react";
import { View, TextInput } from "react-native";
import { BuscadorProp } from "../../../interface/Props";
import { buscadorStyle } from "../../../styles";

export default function Buscador({
  valorBuscado,
  setValorBuscado,
}: BuscadorProp) {
  return (
    <View style={buscadorStyle.buscador}>
      <TextInput
        placeholder="Buscar por nota!"
        value={valorBuscado}
        onChangeText={setValorBuscado}
        style={{ width: "100%" }}
      />
    </View>
  );
}
