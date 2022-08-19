import INota from "./Nota"

export interface INotasContext {
    notas: INota[]
    adicionaNota: (nota: INota) => void
}