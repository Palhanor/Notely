import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesomeIcons from "react-native-vector-icons/FontAwesome";
import { COLORS } from "../utils/Colors";

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

export const IconeLixo = ({ size, color }: { size: number; color: string }) => (
  <MaterialCommunityIcons
    name="trash-can-outline"
    size={size}
    color={color}
  />
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
  <FontAwesomeIcons name="sort" size={30} color={COLORS.blueGray} />
);

export const IconeBusca = () => (
  <FontAwesomeIcons name="search" size={30} color={COLORS.blueGray} />
);
