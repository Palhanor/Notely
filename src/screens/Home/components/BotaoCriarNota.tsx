import React from "react";
import styleHome from "../../../styles/homeScreen";
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity } from "react-native";
import { NavigationStackProps } from "../../../interface/Screens";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function BotaoCriarNota() {
  const navigation = useNavigation<NavigationStackProps>();

  const adicionarIcon = <Icon name="plus" size={30} color="#FFF" />;

  return (
    <TouchableOpacity
      style={styleHome.botaoCriar}
      onPress={() =>
        navigation.navigate("Nota", {
          nota: { id: false, titulo: "", texto: "" },
        })
      }
    >
      <Text style={styleHome.centralizar}>{adicionarIcon}</Text>
    </TouchableOpacity>
  );
}
