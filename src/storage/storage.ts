/*
OBJETIVO:
Salvar e recuperar as transações no localStorage.

PENSAMENTO:

1) Precisamos definir uma chave fixa para armazenar os dados.*/
const CHAVE_FIXA = "transacoes";
/*2) Quando salvar:
   - Converter array de objetos para JSON.
   - Usar localStorage.setItem().*/
export function salvarStorage(transacoes) {
   return localStorage.setItem(CHAVE_FIXA, JSON.stringify(transacoes));
   
}
/*3) Quando carregar:
   - Buscar com localStorage.getItem().
   - Se existir, converter de volta com JSON.parse().
   - Se não existir, retornar array vazio.*/
export function carregarStorage() {
   const dadosCarregados = localStorage.getItem(CHAVE_FIXA);

   if(dadosCarregados) {
      return JSON.parse(dadosCarregados);
   } else {
      return [];
   }
}
/*PERGUNTAS PARA VOCÊ:
- O que acontece se não existir nada salvo?
- Por que precisamos usar JSON.stringify?
- O que localStorage realmente armazena?

DICA:
localStorage só aceita strings.
*/
