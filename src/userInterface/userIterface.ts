import { calcularSaldo, calcularReceita,calcularDespesa } from "../state/state.js";
import { retornarListaTransacoes, removerTransacao } from "../transactions/transactions.js";

export const containerLista = document.querySelector(".lista-transacoes");
export const saldoTotal = document.querySelector(".card-saldo");
export const receitaTotal = document.querySelector(".card-receitas");
export const despesaTotal = document.querySelector(".card-despesas");


export function limparLista() {
   return containerLista.innerHTML = "";
}

export function criarTransacaoElemento(transacao) {
   const elementoTransacao = document.createElement("div");
   elementoTransacao.className = "item-transacao";
   let valorFormatado;

   if(transacao.tipo === "receita") {
      valorFormatado = transacao.valor + "€";
   } else {
      valorFormatado = transacao.valor + "€";
   };

   elementoTransacao.innerHTML = `
   <span>${transacao.descricao}</span>
   <span class="etiqueta-${transacao.tipo}">${transacao.tipo}</span>
   <span>${transacao.data}</span>
   <span>${valorFormatado}</span>
   <button class="botao-remover" data-id="${transacao.id}">X</button>
   `;

   return elementoTransacao;
};

export function renderizarListaTransacoes(lista) {
   limparLista();
   lista.forEach(transacao => {
      containerLista.appendChild(criarTransacaoElemento(transacao));
   });

   atualizarCards();
};

export function atualizarCards() {
   const lista = retornarListaTransacoes();

   saldoTotal.textContent = Number(calcularSaldo(lista)).toFixed(2) + "€";
   receitaTotal.textContent = Number(calcularReceita(lista)).toFixed(2) + "€";
   despesaTotal.textContent = Number(calcularDespesa(lista)).toFixed(2) + "€";

};


/*
OBJETIVO:
Atualizar a interface sempre que o estado mudar.

PENSAMENTO:

1) Selecionar o container da lista.
2) Limpar o conteúdo antes de renderizar novamente.
3) Para cada transação:
   - Criar elemento HTML dinamicamente.
   - Inserir no DOM.
4) Atualizar os cards com os valores calculados.

REFLEXÃO:
- Por que limpar antes de renderizar?
- O que acontece se não limpar?

DESAFIO:
Como aplicar classes diferentes para receita e despesa?
*/
