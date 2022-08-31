import INota from "../interface/Nota";

const id = 0;

const titulo = "Introdução ao Notely";

const favorito = false;

const timestamp = new Date(2022, 6, 14, 9, 26, 24, 0).getTime();

const texto: string = 
`
![Bem vindo](https://gifdb.com/images/thumbnail/aesthetic-welcome-water-akgp7yuidec4o8nn.gif)

## 📄 **Bem vindo ao Notely**

Com o **Notely** você será capaz de avançar para o próximo nível! 🥳🎉🎊

---

### **Notas descomplicadas**

Aliando a simplicidade de uso de uma interface minimalista com a alta capacidade de personalização provinda do uso da notação markdown, o Notely irá lhe levar para o próximo nível! 🥳🎉🎊

Com o campo de notas rápidas é possível criar notas com zero complicação. E o melhor é que elas ainda aceitam markdown!

---

### **Personalização com Markdown**

O markdown pode assustar um pouco no começo, mas está é uma ótima *ferramenta* de notação de textos, usada por diversas plataformas ao longo de toda a Internet.

Para mais informações sobre as aplicações e formas de uso: [Guia Markdown](https://www.markdownguide.org/basic-syntax/)

#### **Guia rápido**

| Elemento | Comandos |
| - | - |
| Negrito | **** |
| Itálico | ** |
| Riscado | ~~~~ |
| Titulo | # |
| Linha | --- |
| Link | [ ] ( ) |
| Imagem | ![ ] ( ) |
| Item ponto | - |
| Item número | 1. |
| Citação | > |
| Código | \`\`\`\`\`\` |
`;

const notaInicial: INota = {
    id,
    titulo,
    texto,
    favorito,
    criacao: timestamp,
    modificacao: timestamp,
}

export default notaInicial;