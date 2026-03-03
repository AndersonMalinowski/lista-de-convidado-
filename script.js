const convidados = ["Alice", "Bruno", "Amanda", "Carlos", "Beatriz", "Alexandre", "Zeca", "Adriana", "Fernando", "Gabriel", "Priscila", "Zuleide"];

const range = (start, end) => Array.from({ length: end - start }, (v, k) => k + start);

let letraSelecionada = "";

// Criar Alfabeto com range()
const alfabetoDiv = document.getElementById('alfabeto');
range(65, 91).forEach(codigo => {
    const letra = String.fromCharCode(codigo);
    const btn = document.createElement('button');
    btn.textContent = letra;
    btn.className = 'btn-letra';
    btn.onclick = () => {
        // Alternar classe ativa
        document.querySelectorAll('.btn-letra').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        letraSelecionada = letra;
        filtrarGeral();
    };
    alfabetoDiv.appendChild(btn);
});

function filtrarGeral() {
    const termoBusca = document.getElementById('inputBusca').value.toUpperCase();
    
    const ulMaiuscula = document.getElementById('lista-maiuscula');
    const ulLetraA = document.getElementById('lista-letra-a');
    const ulLongos = document.getElementById('lista-longos');
    const pContadorA = document.getElementById('contador-a');

    ulMaiuscula.innerHTML = "";
    ulLetraA.innerHTML = "";
    ulLongos.innerHTML = "";
    
    let contadorA = 0;

    // Loop com range para percorrer os índices
    for (let i of range(0, convidados.length)) {
        const nome = convidados[i];
        const nomeUpper = nome.toUpperCase();

        // Lógica de Filtro Duplo (Texto + Letra do Botão)
        const atendeLetra = letraSelecionada === "" || nomeUpper.startsWith(letraSelecionada);
        const atendeBusca = nomeUpper.includes(termoBusca);

        if (atendeLetra && atendeBusca) {
            // 1. Lista Principal (Maiúscula)
            const li = document.createElement('li');
            li.textContent = nomeUpper;
            ulMaiuscula.appendChild(li);

            // 3. Lista Nomes Longos (> 5 letras)
            if (nome.length > 5) {
                const liL = document.createElement('li');
                liL.textContent = nome;
                ulLongos.appendChild(liL);
            }
        }

        // 2. Estatística Fixa: Começam com A (Sempre conta da base original)
        if (nomeUpper.startsWith('A')) {
            contadorA++;
            const liA = document.createElement('li');
            liA.textContent = nome;
            ulLetraA.appendChild(liA);
        }
    }
    pContadorA.textContent = `Total de "A" cadastrados: ${contadorA}`;
}

function limparFiltros() {
    document.getElementById('inputBusca').value = "";
    letraSelecionada = "";
    document.querySelectorAll('.btn-letra').forEach(b => b.classList.remove('active'));
    filtrarGeral();
}

// Inicia o sistema
filtrarGeral();
