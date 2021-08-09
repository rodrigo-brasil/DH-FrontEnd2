/* Micro desafio - Etapa I */
let arrNotas = [3, 2.5, 6, 8.9];

const soma = arrNotas.reduce((sum, nota) => {
    console.log(`${sum} + ${nota}`);
    return sum + nota;
});

const media = soma / arrNotas.length;
console.log(`Média: ${media}`);

arrNotas.forEach((nota, i) =>
    console.log(`Parabéns pela conclusão do ${i + 1}° bimestre. Sua nota foi: ${nota}`));
console.log(`Nota final: ${media}`);
if (media >= 7) console.log("Aprovado")
else console.log("Reprovado")


/* Micro desafios - Etapa II - Extra */

const divNotas = Array.from(document.querySelectorAll("[data-notas=notas]"))
const divMedia = document.querySelector("#media")
const divSituacao = document.querySelector("#situacao")
const arrNotasFromHtml = new Array(4).fill(0);

const calcMedia = () =>
    arrNotasFromHtml.reduce((sum, nota) => {
        return sum + nota;
    }) / arrNotasFromHtml.length;
const estaAprovado = media => media >= 7;
divNotas.forEach(
    (element, index) => element.addEventListener("input", (event) => {
        let text = event.target.value;
        text = text.replace(",", ".");
        arrNotasFromHtml[index] = Number(text);
        let media = calcMedia();
        divMedia.value = media;
        estaAprovado(media) ? divSituacao.classList.add("aprovado") : divSituacao.classList.remove("aprovado");
    })
);


