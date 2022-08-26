/* FEATURES DE CURTO PRAZO
  1. Adicionar um sistema de notas rápidas na página inicial
    * Fica na barra inferior e só tem campo para texto e envio
    * Enquanto estiver em foco, o botão de adicionar nota some
    * A nota é adicionada com o título (Nota rápida nº)
    * Jogar as ferramentas de busca e ordenamento para o topo
    * Inutilizar o menu periodicamente
  2. Ferramentas de personalização das notas
    * Adidionar link
    * Adicionar imagem
    * Adicionar linha
    * Adicionar negrito
    * Adicionar italico
    * Adicionar riscado
    * Adicionar tabela...
  3. Armazenamento local das notas com SQLite
*/

/* PROBLEMAS DO INTERPRETADOR
  1. Não pega multiplas quebras de linha
  2. Não dá margem superior ou inferior na linha horizontal
  3. Precisa de uma separação entre a linha horizontal e o texto anterior
  4. Não reconhece o check-list
*/

/* FEATURES DE LONGO PRAZO
 * Criar lixeira para notas apagadas (Permitir visualizar e/ou recuperar notas apagadas)
 * Visualização em blocos (Condensar o número de notas visíveis)
 ** Menu para alterar visualização
 * Sistema de tags/cadernos (Melhorar a organização das notas)
 ** Input para criar tag/caderno
 ** Sistema de apagar tags/cadernos
 ** Sistema para atribuir tags/cadernos para notas
 ** Adicionar o campo nota.tags/cadernos
 ** Sistema para filtrar notas por tags/cadernos
 * Desenvolver o menu das notas (Mais opções de personalização)
 ** Compartilhar nota
 ** Mudar cor da nota
 ** Criar alarme
 * Adicionar sistema de notas criptografadas (Aumentar a privacidade)
 * Adicionar sistema de autodestruição da nota (Aumentar privacidade)
 * Adicionar sistema de bloqueio do app com senha ou biometria (Aumentar a privacidade)
 * Adicionar personalização para texto selecionado (Aplicar personalização ao texto existente)
 * Adicionar markdown de forma inteligente (* abaixo de *, 2. abaixo de 1., []() envolvendo links...)
 * Adicionar sistema de notas rápidas (Direto da Home)
 * Adicionar sistema de expansão e retração das notas na Home (onLongPress?)
 * Adicionar seleção individual ou multipla de notas (onLongPress?)
 * Adicionar manipulação drag and drop (Ordenamento personalizado das notas)
 * Adicionar a exibição do markdown de forma simultânea (Como nas anotações do TickTick)
 * Adicionar suporte a check-list com markdown (Talvez seja necessário mudar a biblioteca de markdown)
 * Adicionar o check de itens do check-list no markdown (Não sei se é possível)
 * Adicionar personalização de estilo das notas (Não sei se é possível)
 ** Tamanho da fonte
 ** Familia da fonte
 ** Cor de fundo
 ** Cor da fonte
 ** Cor do background
 * Adicionar suporte multimidia (Não sei se é possível)
 ** Audio
 ** Imagem
 ** Vídeo
 ** Desenho
 * Dar opção de nota de áudio na forma transcrita (Não sei se é possível)
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
