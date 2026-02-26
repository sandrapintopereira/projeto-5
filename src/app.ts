import { adicionarTransacao, retornarListaTransacoes, removerTransacao} from "./transactions/transactions.js";
import {containerLista, renderizarListaTransacoes} from './userInterface/userIterface.js';

renderizarListaTransacoes(retornarListaTransacoes());

const botaoAdicionar = document.querySelector(".adiciona-historia") as HTMLButtonElement;


botaoAdicionar.addEventListener("click", () => {
    const descricao: string = (document.querySelector("#descricao") as HTMLInputElement).value.trim();
    const valor: number = parseFloat((document.querySelector("#quantidade") as HTMLInputElement).value);
    const tipo: "receita" | "despesa"= (document.querySelector("#tipo-transacao") as HTMLInputElement).value as "receita" | "despesa";
    
    if(!descricao || valor <= 0) {
        alert("Preenche corretamente os campos.");
        return;
    }

    adicionarTransacao({
        id: Date.now(),
        descricao,
        valor,
        tipo, 
        data: new Date().toLocaleDateString(),
    });


    renderizarListaTransacoes(retornarListaTransacoes());
        //para limpar formulário depois de adicionar 
        (document.querySelector("#descricao") as HTMLInputElement).value = "";
        (document.querySelector("#quantidade") as HTMLInputElement).value = "";
        (document.querySelector("#tipo-transacao") as HTMLInputElement).value = "receita";
    
});

containerLista.addEventListener("click", (e) => {
    if((e.target as HTMLElement).classList.contains("botao-remover")) {
        const id = (e.target as HTMLElement).dataset.id;
        removerTransacao(Number(id!));
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
