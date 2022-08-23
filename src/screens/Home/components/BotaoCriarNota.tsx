import React from "react";
import styleHome from "../../../styles/homeScreen";
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity } from "react-native";
import { NavigationStackProps } from "../../../interface/Screens";
import { IconeAdicionar } from "../../../components/Icones";

export default function BotaoCriarNota() {
  const navigation = useNavigation<NavigationStackProps>();


  return (
    <TouchableOpacity
      style={styleHome.botaoCriar}
      onPress={() =>
        navigation.navigate("Nota", {
          nota: { id: false, titulo: "", texto: "" },
        })
      }
    >
      <Text style={styleHome.centralizar}><IconeAdicionar /></Text>
    </TouchableOpacity>
  );
}
