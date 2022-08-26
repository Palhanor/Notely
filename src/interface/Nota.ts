export default interface INota {
    id: number | boolean;
    titulo: string;
    texto: string;
    favorito: boolean;
    criacao: number;
    modificacao: number;
    // tags: string[];
    // senha: string;
    // lixeira: boolean;
}