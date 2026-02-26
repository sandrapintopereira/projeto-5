import { salvarStorage, carregarStorage } from "../storage/storage.js";
import { Transacao } from "../interfaces/transaction.js";

let transacoes: Transacao[] = carregarStorage();


export function adicionarTransacao(transacao: Transacao): Transacao {
   const novaTransacao: Transacao = {
      id: Date.now(),
      descricao: transacao.descricao,
      valor: Number(transacao.valor),
      tipo: transacao.tipo,
      data: new Date().toLocaleDateString()
   };

   transacoes.push(novaTransacao);
   salvarStorage(transacoes);
   return novaTransacao;

   
}

export function removerTransacao (id: number) {
   const idNum = Number(id);
   transacoes = transacoes.filter(t => t.id !== idNum);

   salvarStorage(transacoes);
   return transacoes;

}

export function retornarListaTransacoes(): Transacao[] {
   return [...transacoes];
}
/*
OBJETIVO:
Centralizar o controle das transações em memória.

PENSAMENTO:

1) Carregar as transações salvas quando o sistema iniciar.
2) Criar função para:
   - Retornar lista atual.
   - Adicionar nova transação.
   - (Opcional) remover transação.
3) Sempre que alterar o estado:
   - Atualizar o localStorage.

REFLEXÃO:
- Por que não manipular o localStorage diretamente no UI?
- O que significa separar responsabilidade?

DESAFIO:
Como garantir que o array nunca fique fora de sincronia?
*/