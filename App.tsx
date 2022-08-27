/* FEATURES DE CURTO PRAZO
  1. Ferramentas de personalização das notas
    * Adidionar link
    * Adicionar imagem
    * Adicionar linha
    * Adicionar negrito
    * Adicionar italico
    * Adicionar riscado
    * Adicionar tabela...
  2. Armazenamento local das notas com SQLite
*/

/* PROBLEMAS DO INTERPRETADOR
  1. Não pega multiplas quebras de linha
  2. Não dá margem superior ou inferior na linha horizontal
  3. Precisa de uma separação entre a linha horizontal e o texto anterior
  4. Não reconhece o check-list
*/

/* FEATURES DE LONGO PRAZO (Matriz Facilidade/Importancia)

GERAL
  * Criar lixeira para notas apagadas (Permitir visualizar e/ou recuperar notas apagadas)
  * Sistema de tags/cadernos (Melhorar a organização das notas)
    * Input para criar tag/caderno
    * Sistema de apagar tags/cadernos
    * Sistema para atribuir tags/cadernos para notas
    * Adicionar o campo nota.tags/cadernos
    * Sistema para filtrar notas por tags/cadernos

HOME
  * Visualização em blocos (Condensar o número de notas visíveis)
    * Menu para alterar visualização

CARDS DAS NOTAS
  * Desenvolver o menu das notas (Mais opções de personalização)
    * Compartilhar nota
    * Mudar cor da nota
    * Criar alarme
  * Seleção individual ou multipla de notas (onLongPress?)
  * Expansão e retração das notas na Home (onLongPress?)
  * Manipulação de notas com drag and drop (Ordenamento personalizado das notas)

SEGURANÇA
 * Notas criptografadas (Aumentar a privacidade)
 * Autodestruição da nota com timer (Aumentar privacidade)
 * Permitir bloqueio do app com senha ou biometria (Aumentar a privacidade)

EDITOR DE NOTAS
  * Aplicação de markdown em texto selecionado (Simplificar a escrita personalizada)
  * Adicionar markdown de forma inteligente (* abaixo de *, 2. abaixo de 1., []() envolvendo links...)
  * Exibição do markdown de forma simultânea no input (Como nas anotações do TickTick)
  * Interpretar o check-list com markdown (Talvez seja necessário mudar a biblioteca de markdown)
  * Permitir o usuário dar check em itens do check-list (Não sei se é possível)
  * Permitir a personalização das notas (Não sei se é possível)
    * Tamanho da fonte
    * Familia da fonte
    * Cor de fundo
    * Cor da fonte
    * Cor do background
  * Adicionar suporte multimidia (Não sei se é possível)
    * Audio
    * Imagem
    * Vídeo
    * Desenho
    * Transcrição de audio
 */

import React from "react";
import Home from "./src/screens/Home";
import Nota from "./src/screens/Nota";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NotasContextProvider } from "./src/context/NotasContext";
import { RootStackProps } from "./src/interface/Screens";
import { COLORS } from "./src/styles/Colors";

const Stack = createNativeStackNavigator<RootStackProps>();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.statusBar} />
      <NotasContextProvider>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={Home}></Stack.Screen>
          <Stack.Screen name="Nota" component={Nota} />
        </Stack.Navigator>
      </NotasContextProvider>
    </NavigationContainer>
  );
}
