import { createContext, useState } from "react";
import { INotasContext } from "../interface/INotasContext";
import INota from "../interface/Nota";
import geradorTitulo from "../utils/geradorTitulo";
import geradorId from "../utils/geradorId";

const initialValues: INotasContext = {
  notas: [],
  adicionaNota: () => {},
  atualizaNota: () => {},
  apagarNota: () => {},
  favoritosNota: () => {},
};

const textoDeApresentacao = `
## 📄 **Bem vindo ao Notely**

Com o **Notely** você será capaz de avançar para o próximo nível! 🥳🎉🎊

Mais informações: [Notely](https://www.google.com)`;

const notaInicial = {
  id: 0,
  titulo: "Introdução ao Notely",
  texto: textoDeApresentacao,
  favorito: false,
  criacao: new Date().getTime(),
  modificacao: new Date().getTime(),
};

export const NotasContext = createContext<INotasContext>(initialValues);

export function NotasContextProvider({ children }: { children: any }) {
  const [notas, setNotas] = useState<INota[]>([notaInicial]);

  // Adiciona uma nova nota na lista de notas (Create)
  const adicionaNota = (nota: INota) => {
    const idNota = geradorId();
    const novasNotas = [
      {
        id: idNota,
        titulo: nota.titulo ? nota.titulo : geradorTitulo(nota.texto),
        texto: nota.texto,
        favorito: nota.favorito,
        criacao: new Date().getTime(),
        modificacao: new Date().getTime(),
      },
      ...notas,
    ];
    setNotas(novasNotas);
    // console.log(notas);
  };

  // Atualiza uma nota antiga reeditada (Update)
  const atualizaNota = (nota: INota) => {
    const novasNotas = notas.map((notaAntiga) => {
      if (notaAntiga.id === nota.id) {
        return {
          ...notaAntiga,
          titulo: nota.titulo ? nota.titulo : `Nota ${nota.id}`,
          texto: nota.texto,
          modificacao: new Date().getTime(),
        };
      }
      return { ...notaAntiga };
    });
    setNotas(novasNotas);
    // console.log(notas);
  };

  // Apaga a nota que foi selecionada (Delete)
  const apagarNota = (nota: INota) => {
    const novasNotas = notas.filter((notaAntiga) => notaAntiga.id !== nota.id);
    setNotas(novasNotas);
  };

  // Favorita ou desfavorita a nota selecionada
  const favoritosNota = (nota: INota) => {
    const novasNotas = notas.map((notaAntiga) => {
      if (notaAntiga.id === nota.id) {
        return {
          ...notaAntiga,
          favorito: !notaAntiga.favorito,
        };
      }
      return { ...notaAntiga };
    });
    setNotas(novasNotas);
  };

  return (
    <NotasContext.Provider
      value={{ notas, adicionaNota, atualizaNota, apagarNota, favoritosNota }}
    >
      {children}
    </NotasContext.Provider>
  );
}
