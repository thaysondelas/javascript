// 1. Par ou Ímpar
// Crie uma função chamada `parOuImpar` que recebe um número (tipo: Number).
// Utilize o operador de mod (%) e uma estrutura condicional `if` para retornar "Par" ou "Ímpar".

function parOuImpar(numero) {
    if (numero % 2 === 0) {
        return "Par"
    } else {
        return "Ímpar"
    }
}


console.log(parOuImpar(4))
console.log(parOuImpar(7))


// 2. Maior de Três
// Crie uma função chamada `maiorDeTres` que recebe três números (tipo: Number).
// Crie uma lógica de programação para retornar o maior número.

function maiorDeTres(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } else if (num2 >= num1 && num2 >= num3) {
        return num2;
    } else {
        return num3;
    }
}

console.log(maiorDeTres(10, 20, 15))
console.log(maiorDeTres(5, 7, 5))   
console.log(maiorDeTres(4, 8, 9))


// 3. Verificação de Idade
// Crie uma função chamada `verificaIdade` que recebe a idade (tipo: Number).
// Utilize uma estrutura condicional `if` para retornar "Menor de idade" ou "Maior de idade".

function verificaIdade(idade) {
    if (idade < 18) {
        return "Menor de idade"
    } else {
        return "Maior de idade"
    }
}

// Exemplos de uso:
console.log(verificaIdade(15))
console.log(verificaIdade(18))
console.log(verificaIdade(21))


// 4. Classificação de Notas
// Crie uma função chamada `classificaNota` que recebe uma nota (tipo: Number).
// Utilize `if`, `else if` e `else` para retornar "Aprovado", "Recuperação" ou "Reprovado".

function classificaNota(nota) {
    if (nota >= 7) {
        return "Aprovado"
    } else if (nota >= 4) {
        return "Recuperação"
    } else {
        return "reprovado"
    }
}

console.log(classificaNota(8))
console.log(classificaNota(5))
console.log(classificaNota(2))


// 5. Dia da Semana
// Crie uma função chamada `diaDaSemana` que recebe um número (tipo: Number) de 1 a 7.
// Utilize uma estrutura `switch` para retornar o nome do dia da semana correspondente.

function diaDaSemana(dia) {
    switch (dia) {
        case 1:
            return "Domingo"
        case 2:
            return "Segunda-feira"
        case 3:
            return "Terça-feira"
        case 4:
            return "Quarta-feira"
        case 5:
            return "Quinta-feira"
        case 6:
            return "Sexta-feira"
        case 7:
            return "Sábado"
        default:
            return "Número inválido! Deve ser de 1 a 7."
    }
}

console.log(diaDaSemana(1))
console.log(diaDaSemana(3))
console.log(diaDaSemana(7))
console.log(diaDaSemana(8))


// 6. Classificação de Animal
// Crie uma função chamada `classificaAnimal` que recebe uma string representando um animal dentre os seguintes: cachorro, gato, passarinho, salmão, lagarto.
// Utilize uma estrutura `switch` para retornar se é "Mamífero", "Ave", "Anfíbio", "Peixe".

function classificaAnimal(animal) {
    switch (animal.toLowerCase()) {
        case "cachorro":
        case "gato"
        return "passarinho"
            return "Ave
        case "salmão":
            return "Peixe"
        case "lagarto"
            return "Anfíbio"
        default:
            return "Animal desconhecido"
    }
}
// Exemplos de uso:
console.log(classificaAnimal("cachorro"))
console.log(classificaAnimal("passarinho"))
console.log(classificaAnimal("salmão"))
console.log(classificaAnimal("lagarto"))
console.log(classificaAnimal("elefante"))


// 8. Par ou Ímpar em uma Lista
// Crie uma função chamada `listaParOuImpar` que recebe um array de números.
// Utilize o método `map()` e uma estrutura condicional `if` para retornar uma nova lista com "Par" ou "Ímpar" para cada número.

function listaParOuImpar(numeros) {
    return numeros.map(num => {
        if (num % 2 === 0) {
            return "Par"
        } else {
            return "Ímpar"
        }
    })
}


console.log(listaParOuImpar([1, 2, 3, 4, 5]))
console.log(listaParOuImpar([10, 15, 20, 25]))


// 9. Mensagem de Boas-Vindas
// Crie uma função chamada `mensagemBoasVindas` que recebe um nome (tipo: String) e um horário (tipo: Number).
// Utilize uma estrutura condicional `if`, `else if` e `else` para retornar uma mensagem apropriada: "Bom dia", "Boa tarde" ou "Boa noite".

function mensagemBoasVindas(nome, horario) {
    let saudacao

    if (horario >= 5 && horario < 12) {
        saudacao = "Bom dia"
    } else if (horario >= 12 && horario < 18) {
        saudacao = "Boa tarde"
    } else {
        saudacao = "Boa noite"
    }

    return `${saudacao}, ${nome}!`
}

// Exemplos de uso:
console.log(mensagemBoasVindas("Maria", 9))


// 10. Classificação de Filmes
// Crie uma função chamada `classificaFilme` que recebe uma nota (tipo: Number) de um filme.
// Utilize uma estrutura condicional `if`, `else if` e `else` para retornar "Excelente" (nota 8 ou mais), 
// "Bom" (nota de 5 a 7) ou "Ruim" (nota abaixo de 5).

function classificaFilme(nota) {
    if (nota >= 8) {
        return "Excelente"
    } else if (nota >= 5) {
        return "Bom"
    } else {
        return "Ruim"
    
}
}


console.log(classificaFilme(9))
console.log(classificaFilme(7))
console.log(classificaFilme(2))
