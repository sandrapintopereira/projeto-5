import { adicionarTransacao, retornarListaTransacoes, removerTransacao} from "./transactions/transactions.js";
import {containerLista, renderizarListaTransacoes} from './userInterface/userIterface.js';

renderizarListaTransacoes(retornarListaTransacoes());

const botaoAdicionar = document.querySelector(".adiciona-historia");


botaoAdicionar.addEventListener("click", () => {
    const descricao = document.querySelector("#descricao").value.trim();
    const valor = document.querySelector("#quantidade").value;
    const tipo = document.querySelector("#tipo-transacao").value;
    
    if(!descricao || valor <= 0) {
        alert("Preenche corretamente os campos.");
        return;
    }

    adicionarTransacao({
        descricao,
        valor,
        tipo
    });


    renderizarListaTransacoes(retornarListaTransacoes());
        //para limpar formulário depois de adicionar 
        document.querySelector("#descricao").value = "";
        document.querySelector("#quantidade").value = "";
        document.querySelector("#tipo-transacao").value = "receita";
    
});

containerLista.addEventListener("click", (e) => {
    if(e.target.classList.contains("botao-remover")) {
        const id = e.target.dataset.id;
        removerTransacao(id);
        renderizarListaTransacoes(retornarListaTransacoes());
    }
})
/*OBJETIVO:
Conectar tudo.

PASSO A PASSO:

1) Capturar inputs do formulário.
2) Escutar clique do botão.
3) Validar dados.
4) Criar objeto transação.
5) Atualizar estado.
6) Re-renderizar UI.
7) Limpar formulário.

IMPORTANTE:
Sempre que adicionar uma transação:
- Atualizar lista
- Atualizar cards

Pergunta:
O que deve acontecer quando a página recarrega?
*/
