import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { BotaoPrincipalProp } from "../interface/Props";
import { botaoPrincipalStyle } from "../styles";

export default function BotaoPrincipal({
  icone,
  onPress,
  altura,
}: BotaoPrincipalProp) {
  return (
    <TouchableOpacity
      style={botaoPrincipalStyle(altura).botaoPrincipal}
      onPress={onPress}
    >
      <Text style={botaoPrincipalStyle().posicaoIcone}>{icone}</Text>
    </TouchableOpacity>
  );
}
