// Lista original de convidados
const convidados = ["Alice", "Bruno", "Amanda", "Carlos", "Beatriz", "Alexandre", "Zeca", "Adriana"];

// Função que simula o range() do Python
const range = (start, end) => Array.from({ length: end - start }, (v, k) => k + start);

// Seleção dos elementos do DOM
const ulMaiuscula = document.getElementById('lista-maiuscula');
const ulLetraA = document.getElementById('lista-letra-a');
const ulLongos = document.getElementById('lista-longos');
const pContadorA = document.getElementById('contador-a');

let contadorA = 0;

// Loop usando a lógica de range para percorrer a lista
// range(0, convidados.length) gera [0, 1, 2, 3...]
for (let i of range(0, convidados.length)) {
    const nomeOriginal = convidados[i];

    // 1. Imprimir em Maiúsculo
    const liMaiusculo = document.createElement('li');
    liMaiusculo.textContent = nomeOriginal.toUpperCase();
    ulMaiuscula.appendChild(liMaiusculo);

    // 2. Contar e listar nomes que começam com 'A'
    if (nomeOriginal.toUpperCase().startsWith('A')) {
        contadorA++;
        const liA = document.createElement('li');
        liA.textContent = nomeOriginal;
        ulLetraA.appendChild(liA);
    }

    // 3. Nomes com mais de 5 letras
    if (nomeOriginal.length > 5) {
        const liLongo = document.createElement('li');
        liLongo.textContent = nomeOriginal;
        ulLongos.appendChild(liLongo);
    }
}

// Atualiza o contador de nomes com A na tela
pContadorA.textContent = `Total encontrado: ${contadorA}`;
