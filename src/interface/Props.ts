import INota from "./Nota";

export interface HeaderProp {
  children: string;
  setBuscando?: React.Dispatch<React.SetStateAction<boolean>>;
  setOrdenando?: React.Dispatch<React.SetStateAction<boolean>>;
  setValorBuscado?: React.Dispatch<React.SetStateAction<string>>;
}

export interface CardProp {
  card: INota;
  tipo: "lista" | "visualizacao";
}

export interface EditorNotaProp {
  titulo: string;
  texto: string;
  setTitulo: React.Dispatch<React.SetStateAction<string>>;
  setTexto: React.Dispatch<React.SetStateAction<string>>;
  setEditando: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface VisualizadorNotaProp {
  nota: INota;
  setEditando: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface SalvarNotaProp {
  adicionarNota: () => void;
}

export interface ListaCardsProp {
  notas: INota[];
  valorBuscado: string;
  valorOrdenador: number;
}

export interface BotaoPrincipalProp {
  icone: JSX.Element;
  onPress: () => void;
}

export interface IconeProp {
  size: number;
  color: string;
}

// export interface MenuProp {
//   setBuscando: React.Dispatch<React.SetStateAction<boolean>>;
//   setOrdenando: React.Dispatch<React.SetStateAction<boolean>>;
//   setValorBuscado: React.Dispatch<React.SetStateAction<string>>;
// }

export interface BuscadorProp {
  valorBuscado: string;
  setValorBuscado: React.Dispatch<React.SetStateAction<string>>;
}

export interface OrdenadorProp {
  valorOrdenador: number;
  setValorOrdenador: React.Dispatch<React.SetStateAction<number>>;
}

export interface CardMenuProp {
  deletarNota: () => void;
  copiarNota: () => void;
  manipularFavoritos: () => void;
  favorito: boolean;
}