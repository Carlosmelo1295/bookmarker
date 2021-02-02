"use strict";
/* pegando os dois campos de input */
const inputLivro = document.getElementById("fildBook");
const inputPagina = document.getElementById("fildPag");

//Div que irá receber os livros adicionados na hora
const livroAdd = document.getElementById("livros");

// Div que irá receber os valores que serão recuperados
const $recuperar = document.getElementById("recuperar");

//Função que recebe um callback para criar os 3 botões ( enviar, recuperar, limpar )
function botaoEnviar(texto, callback) {
	const inserir_aqui = document.querySelector("#buttons");
	const botao = document.createElement("button");
	botao.textContent = texto;

	callback(botao);

	inserir_aqui.insertAdjacentElement("beforeend", botao);
	return botao;
}

//botão de enviar🚀

botaoEnviar("Salvar🚀", (e) => {
	e.addEventListener("click", () => {
		const livros = {
			Livro: inputLivro.value,
			Página: inputPagina.value,
		};

		//converter JSON String em JSON Object.
		const lv = localStorage["livro"] ? JSON.parse(localStorage["livro"]) : [];

		//para cada clique ira adicionar um novo elemento
		lv.push(livros);

		//salvar os elementos no localStorage
		localStorage.setItem("livro", JSON.stringify(lv));

		//criando elemento (i) que ira receber o valor para ser mostrado na tela
		const i = document.createElement("i");
		i.innerHTML = `<br> Livro: <strong>${livros.Livro}</strong> <br> Página: <strong>${livros.Página}</strong> <br><hr>`;
		livroAdd.insertAdjacentElement("beforeend", i);

		Swal.fire({
			position: "top-center",
			icon: "success",
			title: "Livro adicionado com sucesso🚀",
			showConfirmButton: false,
			timer: 1500,
		});
	});
});

//✨

const $p = document.createElement("p");

botaoEnviar("Recuperar🎉", (e) => {
	e.addEventListener("click", () => {
		const saida = $p;
		saida.innerHTML = `

		 <br> ${localStorage
       .getItem("livro")
       //remover todas as aspas
       .replace(/[\\"]/g, "")
       //remover todos os " [{ "
       .replace(/[\\"[{"]/g, "")
       //remover todos os " } "
       .replace(/[\\"}"]/g, "<br> <hr>")
       // trocar as virgulas por quebra de linha
       .replace(/[\\","]/g, "<br>")
       //remover " ] "
       .replace("]", "")} <br>
		
		
		`;

		$recuperar.insertAdjacentElement("beforeend", saida);
	});
});

//🚨

botaoEnviar("Limpar💫", (e) => {
	e.addEventListener("click", () => {
		localStorage.removeItem("livro");
		localStorage.removeItem("pagina");
		livroAdd.textContent = "";
		$p.remove();
		inputLivro.value = inputLivro.style.placeContent = "Livro";
		inputPagina.value = inputPagina.style.placeContent = "287";
	});
});

const modal = document.getElementById("howToUse");
const modalEvent = {
	open() {
		modal.style.display = "block";
	},
	close() {
		modal.style.display = "none";
	},
};

document.querySelector(".fa-eye").addEventListener("click", modalEvent.open);

document
	.querySelector(".fa-times-circle")
	.addEventListener("click", modalEvent.close);
modalEvent.open;
modalEvent.close;