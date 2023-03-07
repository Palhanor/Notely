<img alt="Logo" src="./assets/readme/Logo.png" style="width: 100px; display: block; margin: 30px auto;"/>

<h1 style="font-size: 38px; font-weight: 500; letter-spacing: 1.5px; text-align: center">Notely</h1>

O **Notely** é um sistema otimizado de criação e gestão de notas em markdown, que permite uma maior produtividade por aliar simplicidade, organização e personalização.

## Sumário

- [Sumário](#sumário)
- [Sobre o Projeto](#sobre-o-projeto)
  - [Inspirações](#inspirações)
  - [Próximos passos](#próximos-passos)
  - [Desenvolvedores](#desenvolvedores)
- [Arquitetura do sistema](#arquitetura-do-sistema)
  - [Tecnologias usadas](#tecnologias-usadas)
  - [Árvore de diretórios](#árvore-de-diretórios)
  - [Interfaces](#interfaces)
- [Design](#design)
  - [Usabilidade](#usabilidade)
  - [Guia de estilos](#guia-de-estilos)

---

## Sobre o Projeto

Atualmente existem diversos sistemas de gestão de notas no mercado, e muitos conseguem aglutinar diversas funcionalidades disponibilizadas para seus usuários. Contudo, por muitas vezes, a maximização de uma determinada área necessariamente leva a um prejuízo em outras. Assim, muitos desses sistemas possuem ferramentas quase inutilizadas pela larga maioria dos usuários, que só atribuem mais complexidade para o sistema e geram mais sobrecarga de informações em termos de usabilidade, prejudicando ambos o desempenho do usuário e do próprio sistema.
 
Em muitas ocasiões os usuários preferem utilizar sistemas não voltados para notas, como um grupo individual no WhatsApp ou o chat de mensagens salvas no Telegram. Isso se dá, pois, mesmo com as limitações de personalização e filtragem, estes sistemas são diretos quando se trata do processo de abrir o app, escrever a nota e salvá-la. Por isso o **Notely** conta com o sistema de Notas rápidas sempre disponível para todos os usuários.
 
Por fim, a questão da personalização também é importante em vários aspectos. Acontece que em determinados casos sequer é possível deixar determinados termos das notas em negrito, ou criar linhas verticais para separar conteúdos. Por isso, o sistema do **Notely** sustenta interpretação de notação markdown de forma nativa, o que permite interpretação das notas com estilos padronizados, mesmo que estas sejam armazenadas na forma de texto puro, o que economiza armazenamento.

### Inspirações

- **TickTick** - Este sistema de gestão de tarefas possui um ótimo sistema de notas descritivas baseado em markdown, o que permite muito mais personalização das descrições das tarefas. Ainda, por ser um sistema de interpretação simultânea, este consegue ser ainda mais responsivo e otimizado que o normal.
- **Notion** - Este por sua vez se trata de um sistema All-in-one, que dá suporte para quase todo tipo de ferramentas em termos de organização de conteúdos. Por ser muito abrangente, não é tão indicado para servir simplesmente como um sistema de notas, mas no geral pode contribuir com insights para estes.
- **Google Keep** - O serviço de notas da Google é extremamente utilizado, e por isso deve ser tomado como um referencial dentro da área. Contudo, este ainda peca em não ser tão otimizado e não suportar quaisquer formas de personalização das notas.
- **Docs** - Também uma ferramenta da Google, este é o oposto do Keep, no sentido de que permite uma personalização extrema dos documentos escritos. Contudo, este já adota uma característica demasiado robusta para servir como um sistema de notas, sendo ainda menos otimizado e focado em usabilidade.
- **Mensageiros** - Como mencionado anteriormente, sistemas como o _WhatsApp_ e _Telegram_ não se enquadram como sistemas de notas, mas diversos usuários se aproveitam de sua simplicidade para armazenar informações nos mesmos. É importante citar que estes se encontram entre os sistemas de melhor usabilidade, mas não contam com tantas ferramentas voltadas para a organização das notas.

### Próximos passos

Estes são alguns dos próximos desafios de implementação do sistema. É importante sempre considerar a relação Facilidade/Importância, para que o desenvolvimento seja focado no que é mais simples e principalmente mais importante para a concretização de uma boa ferramenta de notas.
 
| ID | Feature | Relevância | Dificuldade |
| -- | ------- | ---------- | ----------- |
| 0 | ~~Ajeitar a splashscreen e o ícone do aplicativo~~ | 10 | 03 |
| 1 | ~~Resolver o problema da barra de ferramentas ficar em cima no input multiline~~ | 10 | 05 |
| 2 | Criar uma scrollbar grande e redonda para ser fácil navegar, e deixar ela invisível quando não estiver acontecendo scroll | 08 | 07 |
| 3 | Adicionar campo de emojis na barra de ferramentas | 03 | 03 |
| 4 | Utilizar o SQLite para permitir o armazenamento dos dados localmente no dispositivo dos usuários | 10 | 08 |
| 5 | Criar lixeira para notas apagadas para permitir visualizar e/ou recuperar notas apagadas (Organizar como Favoritas, Geral e Apagadas) | 09 | 08 |
| 6 | Sistema de tags/cadernos (Será necessário criar formas de criar, apagar, atribuir, remover e filtrar as tags/cadernos) | 07 | 08 |
| 7 | Permitir o armazenamento das notas dos usuários em um servidor externo | 10 | 10 |
| 8 | Adicionar um local de configurações onde o usuário pode dizer o tamanho dos cards (escolher um valor fixo, tamanho ajustável) | 05 | 06 |
| 9 | Criar um tema escuro para o aplicativo e permitir alterar | 04 | 06 |
| 10 | Visualização em blocos (Duas notas por linha) | 06 | 06 |
| 11 | Visualização de listas (A nota fica apenas com o título, ocultando o conteúdo) | 06 | 06 |
| 12 | Adicionar mais opções no menu das notas (Compartilhar nota...) | 05 | 05 |
| 13 | Seleção múltipla de notas com onLongPress | 09 | 07 |
| 14 | Expansão e retração das notas na Home | 03 | 04 |
| 15 | Manipulação de notas com drag and drop (Ordenamento personalizado) | 06 | 06 |
| 16 | Notas criptografadas | 04 | 05 |
| 17 | Autodestruição da nota com timer | 04 | 06 |
| 18 | Permitir bloqueio do app com senha ou biometria (LocalAuthentication) | 08 | 08 |
| 19 | ~~Desmarcar um elemento caso ele já esteja marcado com uma notação markdown e o usuário selecionar e tocar no mesmo marcador~~ | 07 | 04 |
| 20 | Adicionar novos tipos de estilização: sublinhado, grifado, checklist (markdown-it-task-lists), dropdown (markdown-it-container, tab, retornar, avançar | 10 | 07 |
| 21 | Criar um sistema para receber informações de edição como um modal para texto e link, ou para link da imagem, ou para selecionar o tipo de título | 08 | 06 |
| 22 | Adicionar markdown de forma dinâmica de acordo com as inserções do usuário | 10 | 06 |
| 23 | Exibição do markdown de forma simultânea no input (Como nas anotações do TickTick, pode tentar alternar entre as duas telas em uma alta frequência) | 10 | 10 |
| 24 | Permitir a escrita e interpretação de material no formato LaTeX (User plugins ou extensões do markdown-it) | 03 | 06 |
| 25 | Permitir o usuário dar check em itens do checklist (Não sei se é possível, mas o TickTick e Notion conseguem) | 10 | 08 |
| 26 | Resolver o problema das quebras de linha ignoradas | 09 | 07 |
| 27 | Permitir a estilização das notas (Tamanho da fonte, família da fonte, cor da fonte, cor do background) | 07 | 08 |
| 28 | Adicionar suporte multimídia com dados do dispositivo (Áudio, imagem, vídeo, desenho, documentos, transcrição de áudio) | 06 | 10 |
| 29 | Trocar os Alert por modais personalizados do sistema | 04 | 06 |
| 30 | Criar sistema de dropdown dentro dos campos de Favoritas, Geral e Apagadas | 06 | 04 |
| 31 | Otimizar a performance do sistema evitando fluxo de dados e atualizações de componentes de forma desnecessária | 08 | 08 |
| 32 | Usar importação dinâmica para aumentar a escalabilidade do projeto | 05 | 03 |


### Desenvolvedores

| Desenvolvedor | Github | LinkedIn | Behance |
| ------------- | ------ | -------- | ------- |
| Lucas Palhano | [Palhanor](https://github.com/Palhanor) | [Lucas Palhano](https://www.linkedin.com/in/lucaspalhano) | [Lucas Palhano](https://www.behance.net/lucaspalhano2) |

---

## Arquitetura do sistema

Seguem descritas as principais características da estruturação do projeto, tal como os principais diretórios, as interfaces usadas e os dados compartilhados globalmente.

### Tecnologias usadas

Atualmente o projeto roda através do React Native com a plataforma Expo, e usa o TypeScript como sua linguagem de programação padrão.
 
Entre as principais bibliotecas utilizadas encontram-se por exemplo o React Navigation para a navegação entre as telas e o React Native Markdown Display para a interpretação da notação markdown nos textos das notas.


### Árvore de diretórios

```
/assets - Imagens usadas no projeto do Notely
  /readme - Imagens usadas no Readme
/src - Diretório raíz da aplicação
  /components - Componentes compartilhados (Header, botões, ícones...)
  /context - Estados e funções globais
  /interface - Interfaces e tipos usados no projeto
  /screens - As duas telas da aplicação
    /Home - Tela inicial com lista de notas
      /components - Componentes usados na tela inicial, como o buscador, ordenador, a lista de cards e o sistema de notas rápidas
    /Nota - Tela de edição/visualização das notas
      /components - Componentes usados na tela de nota, como os campos de visualização, edição, ferramenta de personalização e botão de salvar nota
  /styles - Cores e StyleSheets dos componentes
  /utils - Ferramentas adicionais como geradores de id e título
```

### Interfaces

**INota**
- **id**: Valor numérico único da nota (fixo)
- **titulo**: Texto exibido no título das notas (variável)
- **texto**: Texto exibido no copo das notas (variável)
- **favorito**: Valor booleano que indica se a nota é ou não favorita
- **criacao**: Timestamp de criação da nota (fixo)
- **modificacao**: Timestamp de modificação da nota (variável)
 
**Dados globais**
- **notas**: Array de notas do tipo INota.
- **adicionaNota**: Recebe uma nota e a adiciona no array de notas.
- **atualizaNota**: Recebe a nova versão de uma nota existente e a atualiza dentro do array de notas.
- **apagarNota**: Recebe uma nota e a remove no array de notas.
- **favoritosNota**: Recebe uma nota existente e inverte o valor de seu favorito dentro do array de notas.

---

## Design

O design do Notely foi pensado para ser de fácil usabilidade, fazendo uso de uma estética minimalista que não oculta ferramentas e torna todas o mais acessíveis possíveis para que os usuários possam otimizar sua experiência ao criar, visualizar, editar, personalizar, filtrar, ordenar ou apagar notas.

### Usabilidade

_Nota rápida_

_Barra de ferramentas_

_Menu de notas_

_Visualização e edição_

_Filtros e ordenadores_

_Gifs das funções_

### Guia de estilos

Por fim, segue um guia de estilos exibindo as principais características referentes ao design do Notely, passando por elementos como a paleta de cores, tipografia e até mesmo a estruturação do layout.

<img alt="Design do Projeto" src="https://mir-cdn.behance.net/v1/rendition/project_modules/max_1200/4ad69d151573985.630e824d2b01e.png" width="100%"/>
