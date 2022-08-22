import { createContext, useState } from "react";
import { INotasContext } from "../interface/INotasContext";
import INota from "../interface/Nota";
import IdGenerator from "../utils/IdGenerator";

const initialValues: INotasContext = {
  notas: [],
  adicionaNota: () => {},
  atualizaNota: () => {},
  apagarNota: () => {},
};

const textoDeApresentacao = `
## 📄 **Bem vindo ao Notely**

Com o **Notely** você será capaz de avançar para o próximo nível! 🥳🎉🎊
`;

const notaInicial = {
  id: 0,
  titulo: "Introdução ao Notely",
  texto: textoDeApresentacao,
};

export const NotasContext = createContext<INotasContext>(initialValues);

export function NotasContextProvider({ children }: { children: any }) {
  const [notas, setNotas] = useState<INota[]>([notaInicial]);

  // Adiciona uma nova nota na lista de notas (Create)
  const adicionaNota = (nota: INota) => {
    const idNota = IdGenerator();
    const novasNotas = [
      {
        id: idNota,
        titulo: nota.titulo ? nota.titulo : `Nota ${idNota}`,
        texto: nota.texto,
      },
      ...notas,
    ];
    setNotas(novasNotas);
  };

  // Atualiza uma nota antiga reeditada (Update)
  const atualizaNota = (nota: INota) => {
    const novasNotas = notas.map((notaAntiga) => {
      if (notaAntiga.id === nota.id) {
        return {
          ...notaAntiga,
          titulo: nota.titulo ? nota.titulo : `Nota ${nota.id}`,
          texto: nota.texto,
        };
      }
      return { ...notaAntiga };
    });
    setNotas(novasNotas);
  };

  // Apaga a nota que foi selecionada (Delete)
  const apagarNota = (nota: INota) => {
    const novasNotas = notas.filter((notaAntiga) => notaAntiga.id !== nota.id);
    setNotas(novasNotas);
  };

  return (
    <NotasContext.Provider
      value={{ notas, adicionaNota, atualizaNota, apagarNota }}
    >
      {children}
    </NotasContext.Provider>
  );
}
