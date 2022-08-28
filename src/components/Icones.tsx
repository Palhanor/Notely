import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesomeIcons from "react-native-vector-icons/FontAwesome";
import FeatherIcons from "react-native-vector-icons/Feather";
import IoniconsIcons from "react-native-vector-icons/Ionicons";
import OcticonsIcons from "react-native-vector-icons/Octicons";
import { COLORS } from "../styles/Colors";
import { IconeProp } from "../interface/Props";

export const IconeRetornar = () => (
  <MaterialCommunityIcons name="chevron-left" size={30} color={COLORS.white} />
);

export const IconeAdicionar = () => (
  <MaterialCommunityIcons name="plus" size={30} color={COLORS.white} />
);

export const IconeVisualizar = () => (
  <MaterialCommunityIcons name="note-outline" size={30} color={COLORS.white} />
);

export const IconeEditar = () => (
  <MaterialCommunityIcons
    name="pencil-outline"
    size={30}
    color={COLORS.white}
  />
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

export const IconeNegrito = () => (
  <MaterialCommunityIcons name="format-bold" size={25} color={COLORS.black} />
);

export const IconeItalico = () => (
  <MaterialCommunityIcons name="format-italic" size={25} color={COLORS.black} />
);

export const IconeRiscado = () => (
  <MaterialCommunityIcons
    name="format-strikethrough-variant"
    size={18}
    color={COLORS.black}
  />
);

export const IconeHeader = () => (
  <FontAwesomeIcons name="header" size={16} color={COLORS.black} />
);

export const IconeLinha = () => (
  <OcticonsIcons name="horizontal-rule" size={16} color={COLORS.black} />
);

export const IconeLink = () => (
  <MaterialCommunityIcons name="link-variant" size={18} color={COLORS.black} />
);

export const IconeImagem = () => (
  <FontAwesomeIcons name="image" size={16} color={COLORS.black} />
);

export const IconeListaBullet = () => (
  <MaterialCommunityIcons
    name="format-list-bulleted"
    size={18}
    color={COLORS.black}
  />
);

export const IconeListaNumero = () => (
  <MaterialCommunityIcons
    name="format-list-numbered"
    size={18}
    color={COLORS.black}
  />
);

export const IconeCitacao = () => (
  <MaterialCommunityIcons
    name="format-quote-close"
    size={18}
    color={COLORS.black}
  />
);

export const IconeCodigo = () => (
  <MaterialCommunityIcons name="code-tags" size={18} color={COLORS.black} />
);
