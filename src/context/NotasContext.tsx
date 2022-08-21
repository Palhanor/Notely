import { createContext, useState } from "react";
import { INotasContext } from "../interface/INotasContext";
import INota from "../interface/Nota";
import IdGenerator from "../utils/IdGenerator";

const initialValues: INotasContext = {
  notas: [],
  adicionaNota: () => {},
  atualizaNota: () => {},
};

export const NotasContext = createContext<INotasContext>(initialValues);

export function NotasContextProvider({ children }: { children: any }) {
  const [notas, setNotas] = useState<INota[]>([]);

  // Adiciona uma nova nota na lista de notas (Create)
  const adicionaNota = (nota: INota) => {
    setNotas([
      { id: IdGenerator(), titulo: nota.titulo, texto: nota.texto },
      ...notas,
    ]);
  };

  // Atualiza uma nota antiga reeditada (Update)
  const atualizaNota = (nota: INota) => {
    const novasNotas = notas.map((notaAntiga) => {
      if (notaAntiga.id === nota.id) {
        return { ...notaAntiga, titulo: nota.titulo, texto: nota.texto };
      } else {
        return { ...notaAntiga };
      }
    });
    setNotas(novasNotas);
  };

  // Apaga a nota que foi selecionada (Delete)
  // const apagarNota = (nota: INota) => {
  // }

  return (
    <NotasContext.Provider value={{ notas, adicionaNota, atualizaNota }}>
      {children}
    </NotasContext.Provider>
  );
}
