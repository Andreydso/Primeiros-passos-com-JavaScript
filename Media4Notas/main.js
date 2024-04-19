

let nota1 = parseInt(prompt("Nota1: "));
let nota2 = parseInt(prompt("Nota2: "));
let nota3 = parseInt(prompt("Nota3: "));
let nota4 = parseInt(prompt("Nota4: "));

let media = parseFloat((nota1 + nota2 + nota3 + nota4) / 4).toFixed(1);

if (media > 6 && media <= 10) {
    alert("Você ficou com média " + media + "," + " resultado: Aprovado");
} else if (media >= 5 && media <= 6) {
    alert("Você ficou com média " + media + "," + " resultado: Em recuperação");
} else if (media < 5){
    alert("Você ficou com média " + media + "," + " resultado: Reprovado");
} else {
    alert("Digite somente notas entre 0 e 10, ou digite em todas os campos.");
}