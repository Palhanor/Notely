import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationStackProps } from "../interface/Screens";
import { HeaderProp } from "../interface/Props";
import { COLORS } from "../utils/Colors";
import { IconeRetornar } from "./Icones";

export default function Header({ children }: HeaderProp) {
  const navigation = useNavigation<NavigationStackProps>();

  return (
    <View style={styles.background}>
      {children !== "Notely" && (
        <TouchableOpacity
          style={styles.botaoRetornar}
          onPress={() => navigation.goBack()}
        >
          <Text>
            <IconeRetornar />
          </Text>
        </TouchableOpacity>
      )}
      <Text style={styles.texto}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: COLORS.theme,
    width: "100%",
    height: 60,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  botaoRetornar: {
    marginLeft: -10,
    marginRight: 5,
  },
  texto: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: "bold",
  },
});
