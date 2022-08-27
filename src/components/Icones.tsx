import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesomeIcons from "react-native-vector-icons/FontAwesome";
import FeatherIcons from "react-native-vector-icons/Feather";
import IoniconsIcons from "react-native-vector-icons/Ionicons";
import { COLORS } from "../styles/Colors";
import { IconeProp } from "../interface/Props";

export const IconeRetornar = () => (
  <MaterialCommunityIcons name="chevron-left" size={30} color="#FFF" />
);

export const IconeAdicionar = () => (
  <MaterialCommunityIcons name="plus" size={30} color="#FFF" />
);

export const IconeVisualizar = () => (
  <MaterialCommunityIcons name="note-outline" size={30} color="#FFF" />
);

export const IconeEditar = () => (
  <MaterialCommunityIcons name="pencil-outline" size={30} color="#FFF" />
);

export const IconeLixo = ({ size, color }: IconeProp) => (
  <MaterialCommunityIcons name="trash-can-outline" size={size} color={color} />
);

export const IconeGrid = () => (
  <MaterialCommunityIcons
    name="view-grid-outline"
    size={30}
    color={COLORS.blueGray}
  />
);

export const IconeLista = () => (
  <MaterialCommunityIcons
    name="view-agenda-outline"
    size={30}
    color={COLORS.blueGray}
  />
);

export const IconeTag = () => (
  <MaterialCommunityIcons
    name="bookmark-outline"
    size={30}
    color={COLORS.blueGray}
  />
);

export const IconeOrdenador = () => (
  <FontAwesomeIcons name="sort" size={24} color={COLORS.white} />
);

export const IconeBusca = () => (
  <FontAwesomeIcons name="search" size={24} color={COLORS.white} />
);

export const IconeFavoritar = () => (
  <FontAwesomeIcons name="star-o" size={20} color={COLORS.black} />
);

export const IconeDesfavoritar = () => (
  <FontAwesomeIcons name="star" size={20} color={COLORS.black} />
);

export const IconeMaisOpcoes = () => (
  <FeatherIcons name="more-vertical" size={20} color={COLORS.black} />
);

export const IconeEnviar = ({ size, color }: IconeProp) => (
  <IoniconsIcons name="send" size={size} color={color} />
);

export const IconeCopiar = () => (
  <MaterialCommunityIcons
    name="clipboard-outline"
    size={20}
    color={COLORS.black}
  />
);
