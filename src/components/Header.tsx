import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationStackProps } from "../interface/Screens";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function Header({ children }: { children: string }) {
  const navigation = useNavigation<NavigationStackProps>();

  const retrnarIcon = <Icon name="chevron-left" size={30} color="#FFF" />;

  return (
    <View style={styles.background}>
      {children !== "Notely" && (
        <TouchableOpacity
          style={styles.botaoRetornar}
          onPress={() => navigation.goBack()}
        >
          <Text>{retrnarIcon}</Text>
        </TouchableOpacity>
      )}
      <Text style={styles.texto}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#0E677A",
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
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
});
