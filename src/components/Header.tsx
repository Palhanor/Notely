import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationStackProps } from "../interface/Screens";
import { HeaderProp } from "../interface/Props";
import { IconeRetornar } from "./Icones";
import { headerStyle } from "../styles";

export default function Header({ children }: HeaderProp) {
  const navigation = useNavigation<NavigationStackProps>();

  return (
    <View style={headerStyle.background}>
      {children !== "Notely" && (
        <TouchableOpacity
          style={headerStyle.botaoRetornar}
          onPress={() => navigation.goBack()}
        >
          <Text>
            <IconeRetornar />
          </Text>
        </TouchableOpacity>
      )}
      <Text style={headerStyle.texto}>{children}</Text>
    </View>
  );
}
