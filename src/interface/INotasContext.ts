import INota from "./Nota"

export interface INotasContext {
    notas: INota[]
    adicionaNota: (nota: INota) => void
    atualizaNota: (nota: INota) => void
    apagarNota: (nota: INota) => void
    favoritosNota: (nota: INota) => void
}