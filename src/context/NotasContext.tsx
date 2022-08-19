import { createContext, useState } from "react";
import { INotasContext } from "../interface/INotasContext";
import INota from "../interface/Nota";
import IdGenerator from "../utils/IdGenerator";

const initialValues: INotasContext = {
  notas: [],
  adicionaNota: () => {},
};

export const NotasContext = createContext<INotasContext>(initialValues);

export function NotasContextProvider({ children }: { children: any }) {
  const [notas, setNotas] = useState<INota[]>([]);

  const adicionaNota = (nota: INota) => {
    setNotas([
      { id: IdGenerator(), titulo: nota.titulo, texto: nota.texto },
      ...notas,
    ]);
  };

  // const atualizaNota = () => {}

  // const deletaNota = () => {}

  return (
    <NotasContext.Provider value={{ notas, adicionaNota }}>
      {children}
    </NotasContext.Provider>
  );
}
