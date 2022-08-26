import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { IconeEnviar } from "../../../components/Icones";
import { COLORS } from "../../../styles/Colors";

export default function NotaRapida() {
  return (
    <View style={menuStyle.menu}>
      <View style={menuStyle.teste}>
        <TextInput
          style={menuStyle.input}
          placeholder="Nota rápida!"
          multiline
        />
        <IconeEnviar />
      </View>
    </View>
  );
}

export const menuStyle = StyleSheet.create({
  menu: {
    backgroundColor: COLORS.ferramentas,
    bottom: 0,
    height: 60,
    left: 0,
    paddingHorizontal: 26,
    position: "absolute",
    width: "100%",
    zIndex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  teste: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  input: {
    width: "80%",
    minHeight: 40,
    maxHeight: 220,
  },
});
