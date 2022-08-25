import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { CardMenuProp } from "../interface/Props";
import { cardMenuStyle } from "../styles";
import { COLORS } from "../styles/Colors";
import { IconeCopiar, IconeFavoritar, IconeLixo } from "./Icones";

export default function CardMenu({ deletarNota, copiarNota }: CardMenuProp) {
  return (
    <View>
      <TouchableOpacity style={cardMenuStyle.apagar} onPress={deletarNota}>
        <IconeLixo size={20} color={COLORS.black} />
        <Text> Apagar nota</Text>
      </TouchableOpacity>
      <TouchableOpacity style={cardMenuStyle.copiar} onPress={copiarNota}>
        <IconeCopiar />
        <Text> Copiar nota</Text>
      </TouchableOpacity>
      <TouchableOpacity style={cardMenuStyle.favoritar}>
        <IconeFavoritar />
        <Text> Favoritar</Text>
      </TouchableOpacity>
    </View>
  );
}
