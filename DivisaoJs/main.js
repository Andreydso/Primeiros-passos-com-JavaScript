let num = parseInt(prompt("Digite o numerador: "));
let den = parseInt(prompt("Digite o denominator: "));

if (den == 0) {
    alert("Não é possível dividir por 0!");
} else {
    let res = parseFloat(num / den).toFixed(1);
    alert(num + " dividido por " + den + " é " + res);
}