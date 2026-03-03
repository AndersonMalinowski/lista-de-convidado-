// Base de dados expandida
let convidados = JSON.parse(localStorage.getItem('convidados')) || [
    "Alice Ferreira", "Bruno Alves", "Amanda Costa", "Carlos Souza", 
    "Beatriz Matos", "Alexandre Pires", "Zeca Pagodinho", "Adriana Lima",
    "Fernando Meira", "Gabriel Magalhães", "Priscila Rocha", "Zuleide Castro",
    "Humberto Gessinger", "Igor Guimarães", "Juliana Paes", "Kevinho", "Larissa Manoela"
];

let letraSelecionada = "";
const range = (start, end) => Array.from({ length: end - start }, (v, k) => k + start);

// 1. Relógio em tempo real
setInterval(() => {
    document.getElementById('clock').textContent = new Date().toLocaleTimeString();
}, 1000);

// 2. Gerador de Alfabeto com range()
const alfabetoDiv = document.getElementById('alfabeto');
range(65, 91).forEach(cod => {
    const letra = String.fromCharCode(cod);
    const btn = document.createElement('button');
    btn.textContent = letra;
    btn.className = 'btn-letra';
    btn.onclick = () => {
        document.querySelectorAll('.btn-letra').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        letraSelecionada = letra;
        filtrarGeral();
    };
    alfabetoDiv.appendChild(btn);
});

// 3. Adicionar com persistência
function adicionarConvidado() {
    const input = document.getElementById('novoNome');
    const nome = input.value.trim();
    if (nome) {
        convidados.push(nome);
        salvarEDistribuir();
        input.value = "";
    }
}

// 4. Remover convidado
function removerConvidado(index) {
    convidados.splice(index, 1);
    salvarEDistribuir();
}

function salvarEDistribuir() {
    localStorage.setItem('convidados', JSON.stringify(
