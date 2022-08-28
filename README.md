<h1 align="center">Notely</h1>

O **Notely** é um sistema otimizado de criação e gestão de notas em markdown, que permite uma maior produtividade por aliar simplicidade, organização e personalização.

## Sumário

- [Sumário](#sumário)
- [Sobre o Projeto](#sobre-o-projeto)
- [Inspirações](#inspirações)
- [Próximos passos](#próximos-passos)
- [Tecnologias](#tecnologias)
- [Créditos](#créditos)
- [Tópicos futuros](#tópicos-futuros)

## Sobre o Projeto

Atualmente existem diversos sistemas de gestão de notas no mercado, e muitos conseguem aglutinar diversas funcionalidades disponibilizadas para seus usuários. Contudo, por muitas vezes, a maximização de uma determinada área necessariamente leva a um prejuizo em outras. Assim, muitos desses sistemas possúem ferramentas quase inutilizadas pela larga maioria dos usuários, que so atribuem mais complexidade para o sistema e geram mais sobrecarga de informações em termos de usabilidade, prejudicando ambos o desempenho do usuário e do próprio sistema.

Em muitas ocasiões os usuários preferem utilizar sistemas não voltados para notas, como um grupo individual no WhatsApp ou o chat de mensagens salvas no Telegram. Isso se dá, pois, mesmo com as limitações de personalização e filtragem, estes sistemas são diretos quando se trata do processe de abrir o app, escrever a nota e salva-la. Por isso o **Notely** conta com o sitema de Notas rápidas sempre disponível para todos os usuários.

Por fim, a questão da personalização também é importante em vários aspectos. Acontece que em determinados casos sequer é possível deixar determinados termos das notas em negrito, ou criar linhas verticais para seprar conteúdos. Por isso, o sistema do **Notely** sustena interpretação de notação markdown de forma nativa, o que permite interpretação das notas com estilos padronizados, mesmo que estas sejam armazenadas na forma de texto puro, o que economiza armazenamento.

## Inspirações

- **TickTick** - Este sistema de gestão de tarefas possúi um ótimo sistema de notas descritivas paseado em markdown, o que permite muito mais personalização das descrições das tarefas. Ainda, por ser um sistema de interpretação simultânea, este consegue ser ainda mais responsívo e otimizado que o normal.
- **Notion** - Este por sua vez se trata de um sistema All-in-one, que dá suporte para quase todo tipo de ferramentas em termos de organização de conteúdos. Por ser muito abrangente, não é tão indicado para servir simplesmente como um sistema de notas, mas no geral pode constribuir com insights para estes.
- **Google Keep** - O serviço de notas da Google é extremamente utilizado, e por isso deve ser tomado como um referencial detro da área. Contudo, este ainda peca em não ser tão otimizado e não suportar quaisquer formas de personalização das notas.
- **Docs** - Também uma ferramenta da Google, este é o oposto do Keep, no sentido de que permite uma personalização extrema dos documentos escritos. Contudo, este já adota uma caracterítica demasiado robusta para servir como um sistema de notas, sendo ainda menos otimizado e focado em usabilidade.
- **Mensageiros** - Como mencionado anteriormente, sistemas como o _WhatsApp_ e _Telegram_ não se enquadram como sistemas de notas, mas diversos usuários se aproveitam de sua simplicidade para armazenar informações nos mesmos. É importante citar que estes se encontram entre os sistemas de melhor usabilidade, mas não contam com tantas ferramentas voltadas para a organização das notas.

## Próximos passos

Estes são alguns dos próximos desafios de implementação do sistema. É importante sempre considerar a relação Facilidade/Importância, para que o desenvolvimento seja focado no que é mais simples e principalmente mais importante para a concretização de uma boa ferramenta de notas.

GERAL

- [ ] Utilizar o SQLite para permitir o armazenamento dos dados localmente no dispositivo dos usuários.
- [ ] Criar lixeira para notas apagadas (Permitir visualizar e/ou recuperar notas apagadas).
- [ ] Sistema de tags/cadernos (Melhorar a organização das notas).
  - Input para criar tag/caderno
  - Sistema de apagar tags/cadernos
  - Sistema para atribuir tags/cadernos para notas
  - Adicionar o campo nota.tags/cadernos
  - Sistema para filtrar notas por tags/cadernos
- [ ] Permitir o armazenamento das notas dos usuários em um servidor externo.

HOME

- [ ] Visualização em blocos (Condensar o número de notas visíveis).
  - Menu para alterar visualização

CARDS DAS NOTAS

- [ ] Desenvolver o menu das notas (Mais opções de personalização).
  - Compartilhar nota
  - Mudar cor da nota
  - Criar alarme
- [ ] Seleção individual ou multipla de notas (onLongPress?).
- [ ] Expansão e retração das notas na Home (onLongPress?).
- [ ] Manipulação de notas com drag and drop (Ordenamento personalizado das notas).

SEGURANÇA

- [ ] Notas criptografadas (Aumentar a privacidade).
- [ ] Autodestruição da nota com timer (Aumentar privacidade).
- [ ] Permitir bloqueio do app com senha ou biometria (Aumentar a privacidade).

EDITOR DE NOTAS

- [ ] Adicionar markdown de forma inteligente (_ abaixo de _, 2. abaixo de 1., []() envolvendo links...).
- [ ] Exibição do markdown de forma simultânea no input (Como nas anotações do TickTick). SERÁ QUE DÁ PRA FAZER UM SISTEMA QUE FICA ALTERNANDO ENTRE O INPUT E O INTERPRETADOR 120 VEZES POR SEGUNDO, PARA ASSIM GERAR A IMPRESSÃO DE QUE EDITA E VISUALIZA AO MESMO TEMPO?
- [ ] Interpretar o check-list com markdown (Talvez seja necessário mudar a biblioteca de markdown). TALVEZ ISSO POSSA SER FEITO ATRAVÉS DE UM PLUGIN OU EXTENSÃO DO REACT NATIVE MARKDOWN DISPLAY
- [ ] Interpretar calculos matemáticos. TALVEZ ISSO POSSA SER FEITO ATRAVÉS DE UM PLUGIN OU EXTENSÃO DO REACT NATIVE MARKDOWN DISPLAY
- [ ] Permitir a escrita e interpretação de material no formato LaTeX. TALVEZ ISSO POSSA SER FEITO ATRAVÉS DE UM PLUGIN OU EXTENSÃO DO REACT NATIVE MARKDOWN DISPLAY
- [ ] Permitir o usuário dar check em itens do check-list (Não sei se é possível).
- [ ] Permitir a personalização das notas (Não sei se é possível).
  - Tamanho da fonte
  - Familia da fonte
  - Cor de fundo
  - Cor da fonte
  - Cor do background
- [ ] Adicionar suporte multimidia (Não sei se é possível).
  - Audio
  - Imagem
  - Vídeo
  - Desenho
  - Transcrição de audio

## Tecnologias

- TypeScript;
- React Native com Expo;
- React Navigation;
- useContext;
- React Native Markdown Display;

## Créditos

Lista de contribuidores:

- [Lucas Palhano](https://github.com/Palhanor)

## Tópicos futuros

**Layout e Guia de Estilo** (imagem das telas, imagem do guia de estilo, gif do sistema rodando, link para o Figma)

**Abordagem e Padrões usados**

**Arquitetura básica do sistema** (Interfaces, Estrutura das pastas...)

**Como colaborar**

**Flairs de status**

**Flairs de licença** (verificar tipos)
