import React, { useContext, useState } from "react";
import Header from "../../components/Header";
import BotaoPrincipal from "../../components/BotaoPrincipal";
// import Menu from "./components/Menu";
import ListaCards from "./components/ListaCards";
import Buscador from "./components/Buscador";
import { NotasContext } from "../../context/NotasContext";
import { View, StatusBar } from "react-native";
import { IconeAdicionar } from "../../components/Icones";
import { NavigationStackProps } from "../../interface/Screens";
import { useNavigation } from "@react-navigation/native";
import { homeStyle } from "../../styles";
import Ordenador from "./components/Ordenador";
import NotaRapida from "./components/NotaRapida";

export default function Home() {
  const { notas } = useContext(NotasContext);
  const navigation = useNavigation<NavigationStackProps>();

  // Ferramenta sendo utilizada
  const [buscando, setBuscando] = useState<boolean>(false);
  const [ordenando, setOrdenando] = useState<boolean>(false);

  // Valor armazenado pela ferramenta
  const [valorBuscado, setValorBuscado] = useState<string>("");
  const [valorOrdenador, setValorOrdenador] = useState<number>(0);

  const [notaRapidaTexto, setNotaRapidaTexto] = useState<string>("");

  const abrirNovaNota = () => {
    navigation.navigate("Nota", {
      nota: {
        id: false,
        titulo: "",
        texto: "",
        favorito: false,
        criacao: 0,
        modificacao: 0,
      },
    });
  };

  return (
    <View style={homeStyle.container}>
      <StatusBar />
      <Header
        setBuscando={setBuscando}
        setOrdenando={setOrdenando}
        setValorBuscado={setValorBuscado}
      >
        Notely
      </Header>
      {buscando && (
        <Buscador
          valorBuscado={valorBuscado}
          setValorBuscado={setValorBuscado}
        />
      )}
      {ordenando && (
        <Ordenador
          valorOrdenador={valorOrdenador}
          setValorOrdenador={setValorOrdenador}
        />
      )}
      <ListaCards
        notas={notas}
        valorBuscado={valorBuscado}
        valorOrdenador={valorOrdenador}
      />
      {!notaRapidaTexto && (
        <BotaoPrincipal icone={<IconeAdicionar />} onPress={abrirNovaNota} />
      )}
      {/* <Menu
        setBuscando={setBuscando}
        setOrdenando={setOrdenando}
        setValorBuscado={setValorBuscado}
      /> */}
      <NotaRapida
        notaRapidaTexto={notaRapidaTexto}
        setNotaRapidaTexto={setNotaRapidaTexto}
      />
    </View>
  );
}
