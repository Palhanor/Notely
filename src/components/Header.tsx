import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationStackProps } from "../interface/Screens";
import { HeaderProp } from "../interface/Props";
import { IconeBusca, IconeOrdenador, IconeRetornar } from "./Icones";
import { headerStyle } from "../styles";

export default function Header({
  children,
  setBuscando,
  setOrdenando,
  setValorBuscado,
}: HeaderProp) {
  const navigation = useNavigation<NavigationStackProps>();

  const manipulaOrdenamento = () => {
    if (setBuscando && setOrdenando) {
      setBuscando(false);
      setOrdenando((ordenamento) => !ordenamento);
    }
  };

  const manipulaBusca = () => {
    if (setBuscando && setOrdenando && setValorBuscado) {
      setOrdenando(false);
      setBuscando((buscador) => {
        const buscadorInvertido = !buscador;
        if (!buscadorInvertido) setValorBuscado("");
        return buscadorInvertido;
      });
    }
  };

  return (
    <View style={headerStyle.background}>
      {children !== "Notely" && (
        <View style={headerStyle.ferramentas}>
          <TouchableOpacity
            style={headerStyle.botaoRetornar}
            onPress={() => navigation.goBack()}
          >
            <Text>
              <IconeRetornar />
            </Text>
          </TouchableOpacity>
          <Text style={headerStyle.texto}>{children}</Text>
        </View>
      )}
      {children === "Notely" && (
        <>
          <Text style={headerStyle.texto}>{children}</Text>
          <View style={headerStyle.ferramentas}>
            <TouchableWithoutFeedback onPress={manipulaBusca}>
              <View>
                <IconeBusca />
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={manipulaOrdenamento}>
              <View>
                <IconeOrdenador />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </>
      )}
    </View>
  );
}
