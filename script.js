const estudantes = [
    {
        nome: "Darley",
        idade: 27,
        nota1: 7,
        nota2: 5,
        sexo: "M"
    },
    {
        nome: "Lene",
        idade: 50,
        nota1: 9,
        nota2: 6,
        sexo: "F"
    },
    {
        nome: "Regiane",
        idade: 27,
        nota1: 8,
        nota2: 5,
        sexo: "F"
    },
    {
        nome: "Raissa",
        idade: 27,
        nota1: 6,
        nota2: 10,
        sexo: "F"
    },
];

function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) / 2;
}

function validarAprovacao(estudante) {
    const media = calcularMedia(estudante.nota1, estudante.nota2);
    return media > 6 ? "Aprovado" : "Reprovado";
}

estudantes.forEach(estudante => {
    const status = validarAprovacao(estudante);
    alert(`${estudante.nome} está ${status}.`);
});
