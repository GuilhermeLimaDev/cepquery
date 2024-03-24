var cep = document.getElementById("cep")
var botao = document.getElementById("enviar")
var bairro = document.getElementById("bairro")
var log = document.getElementById("log");
var cidade = document.getElementById("cidade");
var estado = document.getElementById("estado");

botao.addEventListener("click", dados, false)

function dados(event) {
    const url = `https://viacep.com.br/ws/${cep.value}/json`;
    fetch(url)
        .then(resposta => resposta.json())
        .then(saidaDados => {
            bairro.value = saidaDados.bairro
            log.value = saidaDados.logradouro
            cidade.value = saidaDados.localidade
            estado.value = saidaDados.uf

            bairro.innerText = bairro.value
            log.innerText = log.value
            cidade.innerText = cidade.value
            estado.innerText = estado.value

        })
}