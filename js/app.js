function comprar(){
    // Obtém os valores dos campos do formulário
    let tipoIngresso = document.getElementById("tipo-ingresso").value;
    let quantidade = parseInt(document.getElementById("qtd").value);

    // obtem quantidades de ingressos disponiveis
    let dispPista = parseInt(document.getElementById("qtd-pista").innerText);
    let dispSup = parseInt(document.getElementById("qtd-superior").innerText);
    let dispInf = parseInt(document.getElementById("qtd-inferior").innerText);

    // subtrai quantidade de ingressos comprada dos disponíveis
    if (tipoIngresso === "pista") {
        if (quantidade < 0) {
            alert("Quantidade inválida");
        } else if (quantidade > dispPista) {
            alert("Quantidade indisponível para o tipo pista.");
        } else {
            dispPista -= quantidade;
            document.getElementById("qtd-pista").innerText = dispPista;
            alert("Compra realizada com sucesso!");
        }

    } else if (tipoIngresso === "superior") {
        if (quantidade < 0) {
            alert("Quantidade inválida");
        } else if (quantidade > dispSup) {
            alert("Quantidade indisponível para o tipo Superior.");
        } else {
            dispSup -= quantidade;
            document.getElementById("qtd-superior").innerText = dispSup;
            alert("Compra realizada com sucesso!");
        }
    } else if (tipoIngresso === "inferior") {
        if (quantidade < 0) {
            alert("Quantidade inválida");
        } else if (quantidade > dispInf) {
            alert("Quantidade indisponível para o tipo Inferior.");
        } else {
            dispInf -= quantidade;
            document.getElementById("qtd-inferior").innerText = dispInf;
            alert("Compra realizada com sucesso!");
        }
    }
}