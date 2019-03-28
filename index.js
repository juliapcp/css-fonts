const x = 2;
const y = 3;
console.log(x + y);
// o arquivo sempre precisa de uma linha em branco no final

// JSON
// Java
// Script
// Object
// Notation
// parte da POO (Programação orientada a objetos)

const th = { // json => {} objeto
    nome: 'Thiago',
    idade: 16
}; // {chave1: valor, chave2: valor, ... }

console.log(th.nome); //Thiago
th.nome = "Thiago Teixeira Gomes"; // conseguimos mudar a chave de um json mesmo que num primeiro momento ele sera uma constante, só não podemos mudar th = 'novo th'
th['idade'] //procuramos pelo nome da chave desse modo e não pelo indice
console.log(th['idade'] + 1); //17
th.signo = 'Escorpião'; //criamos uma nova chave no objeto th
console.log(th); // {nome: 'Thiago Teixeira Gomes, idade: 16, signo: 'Escorpião'}
console.log(Object.keys(th)); // ['nome', 'idade', 'signo'] retorna as chaves de determinado objeto num vetor
const keys = Object.keys(th); // podemos guardar essas keys em uma varíavel
console.log(th[keys[1]]); // retorna a string do vetor que armazena as keys na posição 1 e joga no objeto com o nome, correspondendo a idade 16

for (const k in th) { // percorre o objetos e cada um dos elementos (chaves) do vetor se torna um k no vetor th
    console.log(`${k}: ${th[k]}`); //interpolamos como se fosse k + ':' + th[k] só que mais chique
}

const curso = {
    nome: 'Informática',
    horas: 1200,
    modalidade: 'Integrado'
};

delete(curso.modalidade); // assim como podemos adicionar coisas podemos excluir coisas
console.log(curso.modalidade);
if (curso.curriculo) console.log(curso.curriculo); //se existir mostrará
console.log(curso.curriculo || 'Sem currículo'); //se existir curso.currículo mostrará ele ou mostrará 'sem currículo', retornou sem curriculo

Object.keys(this); // mostra todas as funções existentes na biblioteca JS, this é o contexto inicial, o browser no caso
//this['Math'].['pow'](2, 8); // mostra que dentro do contexto this tem a chave math e dentro dela tem a chave pow

const artista = {
    nome: 'Legião Urbana',
    albuns: [{
            nome: 'As quatro estações',
            cancoes: [{
                    titulo: 'Pais e filhos',
                    duracao: 5 * 60 + 8
                },
                {
                    titulo: 'Maurício',
                    duracao: 3 * 60 + 18
                }
            ]
        },
        {
            nome: 'V',
            cancoes: [{
                titulo: 'Metal Contra as Nuvens',
                duracao: 11 * 60 + 30
            }]
        }
    ]
}

console.log(artista.albuns[0].cancoes[1].titulo); // Maurício

function trimLeft() {
    let r = '';
    let copy = false;
    for (let i = 0; i < this.txt.length; i++) {
        if (copy || this.txt[i] != ' ') {
            copy = true;
            r += this.txt.charAt(i);
        }
    }
    return r;
}

const o = {
    nome: 'teste',
    txt: '   um texto   ',
    tleft: trimLeft
};
// o.tleft(), quando chamamos assim, o 'o' ja é o this, o contexto onde a função esta sendo chamada, não precisamos usar call para mudar o this

// estamos chamando a função no contexto de o
trimLeft.call(o) // passamos para a função quem queremos que seja o this porque a funçao espera achar um txt no ambiente em que está envolta, quando nao acha no window (browser) quebra
// ao ter um 'this' numa função ou em qualquer lugar estamos orientando um objeto e direcionado-o até onde deve atuar

let nome = 'Marcio';
console.log(nome['toUpperCase']());
