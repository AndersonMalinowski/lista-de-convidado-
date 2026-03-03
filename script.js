const convidados = ["Alice", "Bruno", "Amanda", "Carlos", "Beatriz", "Alexandre", "Zeca", "Adriana", "Fernando", "Gabriel", "Priscila"];

// Função range personalizada
const range = (start, end) => Array.from({ length: end - start }, (v, k) => k + start);

// Gerar botões de A a Z dinamicamente usando range e códigos ASCII (65-91)
const alfabetoDiv = document.getElementById('alfabeto');
range(65, 91).forEach(codigo => {
    const letra = String.fromCharCode(codigo);
    const botao = document.createElement('button');
    botao.textContent = letra;
    botao.className = 'btn-letra';
    botao.onclick = () => filtrarPorLetra(letra);
    alfabetoDiv.appendChild(botao);
});

function renderizarListas(filtro = null) {
    const ulMaiuscula = document.getElementById('lista-maiuscula');
    const ulLetraA = document.getElementById('lista-letra-a');
    const ulLongos = document.getElementById('lista-longos');
    const pContadorA = document.getElementById('contador-a');

    // Limpar listas antes de renderizar
    ulMaiuscula.innerHTML = "";
    ulLetraA.innerHTML = "";
    ulLongos.innerHTML = "";
    
    let contadorA = 0;

    // Loop principal usando range para os índices
    for (let i of range(0, convidados.length)) {
        const nome = convidados[i];

        // Lógica de Filtro A-Z (se houver filtro ativo)
        if (filtro && !nome.toUpperCase().startsWith(filtro)) continue;

        // 1. Lista Maiúscula
        const liM = document.createElement('li');
        liM.textContent = nome.toUpperCase();
        ulMaiuscula.appendChild(liM);

        // 2. Lista apenas com Letra 'A' (independente do filtro geral)
        if (nome.toUpperCase().startsWith('A')) {
            contadorA++;
            const liA = document.createElement('li');
            liA.textContent = nome;
            ulLetraA.appendChild(liA);
        }

        // 3. Lista nomes com mais de 5 letras
        if (nome.length > 5) {
            const liLongo = document.createElement('li');
            liLongo.textContent = nome;
            ulLongos.appendChild(liLongo);
        }
    }
    pContadorA.textContent = `Total de "A" na base: ${contadorA}`;
}

function filtrarPorLetra(letra) {
    renderizarListas(letra);
}

// Inicializa a página
renderizarListas();
