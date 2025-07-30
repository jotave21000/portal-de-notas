function notas() {
    let n1 = Number(document.getElementById("part").value);  // Nota de Participação
    let n2 = Number(document.getElementById("Prati").value); // Nota de Av. Prática
    let n3 = Number(document.getElementById("escri").value); // Nota de Av. Escrita
    let n4 = Number(document.getElementById("simu").value);  // Nota de Simulado
    
    // Calcular a soma total das notas
    let total = n1 + n2 + n3 + n4;

    // Exibir o resultado com base na soma das notas
    if (total >= 7 && total <= 10) {
        document.getElementById("resultado").innerText = "Aprovado";
    } else if (total >= 5 && total < 7) {
        document.getElementById("resultado").innerText = "Recuperação";
    } else if (total < 5) {
        document.getElementById("resultado").innerText = "Reprovado";
    } else {
        document.getElementById("resultado").innerText = "Nota Inválida";
    }
}