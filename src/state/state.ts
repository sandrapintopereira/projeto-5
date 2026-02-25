export function calcularSaldo(lista) {
   return lista.reduce((total, transacao) => {
      if(transacao.tipo === "receita") {
         return total + transacao.valor;
      } else {
         return total - transacao.valor;
      }
   },0);
}


export function calcularReceita(lista) {
   return lista.reduce((total, transacao) => {
      if(transacao.tipo === "receita") {
         return total + transacao.valor;
      }
      return total;
   }, 0);
}


export function calcularDespesa(lista) {
   return lista.reduce((total, transacao) => {
      if(transacao.tipo === "despesa") {
         return total + transacao.valor;
      }
      return total;
   }, 0);
}

/*
OBJETIVO:
Calcular saldo total, total de receitas e total de despesas.

PENSAMENTO:

1) O saldo começa em 0.
2) Para cada transação:
   - Se for receita, soma.
   - Se for despesa, subtrai.
3) Para calcular totais separados:
   - Filtrar por tipo.
   - Somar valores.

DICA IMPORTANTE:
Use reduce().

Pergunta:
- O que é o acumulador?
- Qual deve ser o valor inicial?

Exemplo mental:
[100, -50, 200]
Resultado esperado: 250

Não escreva loops tradicionais.
*/
