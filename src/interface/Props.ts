import INota from "./Nota";

export interface HeaderProp {
  children: string
}

export interface EditorNotaProp {
  titulo: string;
  texto: string;
  setTitulo: React.Dispatch<React.SetStateAction<string>>;
  setTexto: React.Dispatch<React.SetStateAction<string>>;
  setEditando: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface VisualizadorNotaProp {
  titulo: string;
  texto: string;
  setEditando: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface SalvarNotaProp {
  adicionarNota: () => void;
}

export interface ListaCardsProp { 
  notas: INota[] 
}