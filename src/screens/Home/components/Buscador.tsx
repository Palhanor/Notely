import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { BuscadorProp } from "../../../interface/Props";
import { COLORS } from "../../../styles/Colors";

export default function Buscador({
  valorBuscado,
  setValorBuscado,
}: BuscadorProp) {
  return (
    <View style={styles.buscador}>
      <TextInput
        placeholder="Buscar por nota!"
        value={valorBuscado}
        onChangeText={setValorBuscado}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  buscador: {
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: COLORS.blueGray,
    height: 50,
    paddingHorizontal: 16,
    width: "100%",
  },
});
