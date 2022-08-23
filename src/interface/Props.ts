import INota from "./Nota";

export interface HeaderProp {
  children: string
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
  notas: INota[]
}

export interface BotaoPrincipalProp {
  icone: () => JSX.Element;
  onPress: () => void;
}

export interface IconeProp {
  size: number;
  color: string
}