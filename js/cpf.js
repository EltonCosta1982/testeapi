const form = document.getElementById('search-form');
const cpfInput = document.getElementById('cpf-input');
const resultContainer = document.getElementById('result-container');
const result = document.getElementById('result');
const limite = document.getElementById('limite');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	const cpf = cpfInput.value;

	// Faça a requisição GET para a API
	fetch(`https://isyubii-api.tk/api/puxar?type=cpf3&q=${cpf}&token=Eltonpainel`)
		.then(response => response.json())
		.then(data => {
			// Atualize o elemento HTML para exibir o resultado e o limitee restante
			result.innerText = data.result;
			limite.innerText = data.limite;
			resultContainer.classList.remove('hidden');
		})
		.catch(error => console.error(error));
});