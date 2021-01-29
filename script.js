//campos de input
const getInputValueBook = document.getElementById("fildBook");
const getInputValuePag = document.getElementById("fildPag");

//botões
const start = document.getElementById("add");
const recuperarBtn = document.getElementById("recuperar");
const limparBtn = document.getElementById("limpar");

const getDiv = document.getElementById("recuperarValor");

(function executar() {
	"use strict";

	start.addEventListener("click", () => {
		let tr = document.createElement("tr");
		let td1 = document.createElement("td");
		let td2 = document.createElement("td");

		td1.innerHTML = getInputValueBook.value;
		td2.innerHTML = getInputValuePag.value;

		tr.appendChild(td1);
		tr.appendChild(td2);

		document.querySelector("tbody").insertAdjacentElement("beforeend", tr);

		function addLocalStorage() {
			const livros = {
				livro: getInputValueBook.value,
				Pagina: getInputValuePag.value,
			};

			const storage = localStorage.getItem("Livros");

			if (storage) {
				let json = JSON.parse(storage);
				json.push(livros);

				json = JSON.stringify(json);

				localStorage.setItem("Livros", json);
			} else {
				localStorage.setItem("Livros", JSON.stringify([livros]));
			}
			return;
		}
		addLocalStorage();
	});

	limparBtn.addEventListener("click", () => {
		getInputValueBook.value = null;
		getInputValuePag.value = null;

		localStorage.removeItem("Livros");
		localStorage.removeItem("Página");
	});

	//

	function recuperar() {
		const p = document.createElement("p");
		p.innerHTML = localStorage.getItem("Livros");
		getDiv.insertAdjacentElement("beforeend", p);
		return;
	}
	recuperarBtn.addEventListener("click", recuperar);

	//
})();