import { salvarStorage, carregarStorage } from "../storage/storage.js";

let transacoes = carregarStorage();

export function adicionarTransacao(dados) {
   const novaTransacao = {
      id: Date.now(),
      descricao: dados.descricao,
      valor: Number(dados.valor),
      tipo: dados.tipo,
      categoria: dados.categoria,
      data: new Date().toLocaleDateString()
   };

   transacoes.push(novaTransacao);
   salvarStorage(transacoes);
   return novaTransacao;

   
}

export function removerTransacao (id) {
   const idNum = Number(id);
   transacoes = transacoes.filter(t => t.id !== idNum);

   salvarStorage(transacoes);
   return transacoes;

}

export function retornarListaTransacoes() {
   return transacoes;
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