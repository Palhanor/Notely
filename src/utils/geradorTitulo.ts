// TODO: O sistema retorna valor "Nota sem nome" caso o primeiro caractere seja um \n

export default function geradorTitulo(texto: string) {
    const temQuebraDeLinha = /\n/.test(texto);

    if (!temQuebraDeLinha && texto.length > 24) {
        let novoTitulo: string = texto.slice(0, 23) + "...";
        if (novoTitulo[22] === " ") {
            novoTitulo = novoTitulo.slice(0, 22) + novoTitulo.slice(23);
        }
        return novoTitulo;
    } else if (!temQuebraDeLinha && texto.length <= 24) {
        return texto;
    }

    const padraoTextoAntesDaQuebra = /^(.+)\n/;
    const textoSelecionado = texto.match(padraoTextoAntesDaQuebra);
    let novoTitulo: string = textoSelecionado
        ? textoSelecionado[0].replace(/\n/, "")
        : "Nota sem titulo";
    if (novoTitulo.length > 24) {
        novoTitulo = novoTitulo.slice(0, 23) + "...";
        novoTitulo = novoTitulo.slice(0, 22) + novoTitulo.slice(23);
    }
    return novoTitulo;
};