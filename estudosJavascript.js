let ObjCPF = "087.755.055-76";

//console.log(ObjCPF);
//let novoCPF = ObjCPF.replace(/\./g,'');
//console.log(novoCPF.replace(/\-/g,''));


//------------------------------------------------

console.log(ObjCPF);
ObjCPF = ObjCPF.replace(/\./g,'');
console.log(ObjCPF);
ObjCPF = ObjCPF.replace(/\-/g,'');
console.log(ObjCPF);

ObjCPF = ObjCPF.replace(/\./g,'');
ObjCPF = ObjCPF.replace(/\-/g,'');

//--------------------------------------------------- Estudos de javascript e webdev

// Por conta da tipagem fraca qualquer variavel pode recer qualquer valor 

// Ser mais claro nos comentarios e eveitar fazer comentarios desnecessarios em aplicações ou programas

let qualquer_coisa = "fodace";
console.log(qualquer_coisa); 
console.log(typeof qualquer_coisa); 

qualquer_coisa = 45;
console.log(qualquer_coisa); 
console.log(typeof qualquer_coisa); 


//-------------------------------------------------------- Estudando tipos numéricos 

let peso1= 1.0;
let peso2= Number('2.0');

console.log(peso1);
console.log(peso2);

console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

// Mesmo após setar as variaveis como números float elas ainda sim não mostram que estão sendo 
// reconhecidas assim pelo código.

peso1= 1.1;
peso2= Number('2.1');

console.log(peso1);
console.log(peso2);

console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

// Após setar elas com um número atrelaçado ao float, as váriaveis finalmente são reconhecidas como float

console.log('----------------------------------------------------------------------------------------------------------');

// Programa básico de media 

const peso_media1 = 1.5;
const peso_media2 = 2.5;

const nota1 = 7.89;
const nota2 = 6.71;

const total = (nota1 * peso_media1) + (nota2 * peso_media2);

const calc_media = total / (peso_media1 + peso_media2);

console.log('Valor total das notas com seu determinado peso: ',total);
console.log('Valor da média do aluno: ',calc_media.toFixed(2));
// toFixed delimita o número a quantidade de caracteres escolhida depois do ponto

if(calc_media >= 7){
    console.log('Parabens você foi aprovado!');
     
}else{
    console.log('Porra você viajou!')
}

console.log(calc_media.toString(2)); //converte para binário

// A função número já nativa do javascript podendo ser referencias como Number.-nome da função- 
// ou -nome da váriavel numerica-.-função do number-

console.log(typeof Number);

console.log('----------------------------------------------------------------------------------------------------------');

// Cuidadados com váriasveis do javascript 

console.log(7/0);
// Retorna uma variavel propria infinita 

console.log("10" / 2);
// Reconhece que existe um número inteiro e executa a operação

console.log("Show" * 2);
// Não é possivel multiplicar string

console.log(0.7 + 0.1);
// As operações com números quebrados não é precisa


//---------------------- Objeto Math ----------------------------------------

console.log("----------------------------------------------------------------------------------------------------------");

const raio =5.7;
const area = Math.PI * Math.pow(raio,2);

// Objeto Math com funções matemáticas pre prontas para utilização

console.log("Raio: ", raio);
console.log(typeof Math);

//---------------------- String e suas funções ----------------------------------------

let alguma_coisa_ae = "Coisa muito loka de meu Deus! É loka pra krl!";

console.log(alguma_coisa_ae.charAt(3));
// Pegar o caractere especifico na sequencia de caracteres da string

console.log(alguma_coisa_ae.charCodeAt(3));
// Pesquisar o número do indeice na tabela asc

console.log(alguma_coisa_ae.substring(6));
console.log(alguma_coisa_ae.substring(12,16));
// separação de strings


console.log("FODACE. ".concat(alguma_coisa_ae).concat(' É isso mermo!'));
//concatenação de strings

console.log(alguma_coisa_ae.replace('loka','legal')); 
console.log(alguma_coisa_ae.replace(/\loka/g,'legal')); // Utilizando a o tipo global de substiruição 
// substituição de strings

let exemp_string_para_aray = 'UMA COISA, OUTRA COISA, MAIS UMA COISA';
console.log(exemp_string_para_aray); 
let aray = exemp_string_para_aray.split(',');
console.log(aray);
// Tranformando strings em arays

console.log('10'+3);
console.log('10'+ '10');
// Outra forma de concatenar strings

console.log("----------------------------------------------------------------------------------------------------------");

//------------------- Template String -----------------------------------

let nome_sla = 'Felipe Borges';

let template = `
Fodace
${nome_sla}
é isso mesmo
${30-10}
`
console.log(nome_sla);
console.log(template);

console.log(`ISSO da pra
fazer coisa
como a zora! ${nome_sla}`);

const up = texto => texto.toUpperCase();
// Setando uma função através do =>

console.log(`Ei... ${up('cuidado')}!`);
// Chamando uma função setada atraves do template

console.log("----------------------------------------------------------------------------------------------------------");

//------------------- Variavel Booleana -----------------------------------

let bool2 = true;
console.log(bool2);
console.log(typeof bool2);
const bool3 = 1;
console.log(!!bool3);
// Aplicando !! aplica uma dupla negação o que resulta em uma afimação 
console.log(!bool3);
// Aplicando ! somente uma negação que transforma o valor em false  

console.log('Valores que são verdadeiros: ');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!bool3);

console.log('Valores que são falsos: ');
console.log(!!'');
console.log(!!0);
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(bool2 = false));

console.log('Estrutura de OU: ');
console.log(!!('' || NaN || 0 || ''));
console.log(!!('' || NaN || 0 || ' '));

console.log("----------------------------------------------------------------------------------------------------------");

//------------------- Arays -----------------------------------

let impar = [1,3,5,7,9];
let par = [2,4,6,8,10];

console.log(impar[0],par[0],impar[1],par[1]);

impar[7] = 11;

console.log(impar[7]);

console.log(impar);

console.log(impar.length);
 
console.log(impar[40]);
// Referenciar uma posisão no aray que não existe retorna undefined 

impar.push({id:8}, true, false, null, 'fodace');
// Qualquer valor pode ser adicionado no aray

console.log(impar);

console.log(impar.pop());
// Retira o ultimo valor adicionado

console.log(impar);

delete impar[9];
// Deleta um ou mais valores especificos

console.log(impar);

console.log(typeof impar);
// Arays são considerados objetos


console.log("----------------------------------------------------------------------------------------------------------");

//------------------- Objetos -----------------------------------

const prod1 = {};
prod1.nome = 'Felipe Roberto de Oliveira Borges';
console.log(prod1);
prod1.atributos = 'Bom programados, ótimo reciocinio lógicom bonito pra klr, gostoso, vai ser milhonario um dia, foda pra krl';
console.log(prod1);
prod1.idade = 21;
console.log(prod1);
prod1.foi_empregado = 3;
console.log(prod1);
prod1["Linguagens de Programação"] = 'Javascriopt, Java, PHP, Python'; // Evitar atributos com nomeclatura string e com espaçamento
console.log(prod1);

const prod2 = {
    nome: 'Qualquer um ',
    atributos: 'Nada de interesante, realemente nada de interesante',
    idade:'Quem liga',
    foi_empregado:0,
    linguagens_de_programacao:'Nenhuma',
    obj:{
        fodace: 'Sla'
    }
};
// Podem ser criados objetos dentro de objetos
console.log(prod2);

console.log("----------------------------------------------------------------------------------------------------------");

//------------------- Null e Undefined -----------------------------------

const x = {nome:'Projeto X'};

console.log(x);
let c = x;

c.nome = 'Outra coisa';
console.log(x);
console.log(c);

c.nome = 'Fodace';
console.log(x);
console.log(c);
//Quando um objeto é deriviado de outro objetos, eles ocupam o mesmo espaço na memória, ou seja, sendo modificadas ao mesmo tempo

let undef;

console.log(undef);

undef = null;

console.log(undef);

// console.log(endef.toString()); Operação não pode ser concluida porque null não tem um valor que possa ser modificado

console.log(typeof undef);

const produto={};
console.log(produto.preco);
// console.log(produto.preco.a); - Resulta em erro pois o javascript só consegue puxar undefined apartir de algo que já foi definido antes,ou seja, produto 

produto.preco = 35;
console.log(produto.preco);

produto.preco = undefined; // Evitar setar variáveis como undefined, pois é melhor deixar o proprio sistemas definir oque é indefinido(facilita a identificar erros)
console.log(produto.preco);


console.log("----------------------------------------------------------------------------------------------------------");

//------------------- Função -----------------------------------

console.log(typeof Object);

console.log(typeof Function);

function imprimir_soma(a, b){
    console.assert(a + b);
}

imprimir_soma(2, 3);
imprimir_soma(2);
imprimir_soma(2, 3, 4, 6, 10);
imprimir_soma();

function soma(a, b = 1){
    return a + b
}

console.log(soma(5,7));

console.log(soma(7));

const imprimirSoma = function(a,b){
    console.log(a + b);
};

const somar = (a , b)  => {
    return a + b;
}
// Forma reduzida de se instanciar uma função atravez do arow =>

console.log(somar(10,38));

const subtracao = (a,b) => a - b;
// Retorno implicito faz com que os valores definidos na linha sejam retornados 

console.log(subtracao(19,50));

console.log("----------------------------------------------------------------------------------------------------------");

//------------------- Var e Let -----------------------------------

var numero1 =3;
{
    var numero1 =9;
    console.log(numero1);
}
console.log(numero1);
// Var altera o valor de forma globar

let numero2 =3;
{
    let numero2 =9;
    console.log(numero2);
}
console.log(numero2);
// Let altera o valor de forma de forma local

console.log("----------------------------------------------------------------------------------------------------------");

//------------------- Loops -----------------------------------

for(var i= 0;i<=10;i++){
    console.log(i);
}

console.log('Valor de I: ',i);
//Mesmo após o fechamento da estrutura de repetição a variavel i ainda continua com seu valor final atribuido

for(let e= 0;e<=10;e++){
    console.log(e);

}

// console.log('Valor de E: ',e);
// Setando a variavel com let a mesma só ficara visivel dentro do escopo do bloco for
// Imposibilitando sua referenciação em outro local 

var funk = [];

for(var e= 0;e<=10;e++){
    funk.push(function(){
        console.log(e);
    });
}

funk[2]();
funk[8]();
// Pelo o uso da variavel var ao inves de adicionar os numeros de forma crescente, os numeros são adicionados apartir do valor final da variavel(obiamente gerando um bug)

var func = [];

for(let u= 0;u<=10;u++){
    func.push(function(){
        console.log(u);
    });
}

func[2]();
func[8]();


console.log("----------------------------------------------------------------------------------------------------------");

//------------------- Conceito de Hoisting -----------------------------------

console.log(hoisted);
var hoisted = 30;
console.log(hoisted);
// Nota-se que a varival pode ser referenciada como undefined(Não comum em outras linguagens) 
// Isso só acontece com var, o javascript emputa variavel para cima do código(Tornando possivel sua referenciação)

//console.log(hoisted2);
let hoisted2 = 50;
console.log(hoisted2);
// O efeito de hoisting não ocorre quando a variavel é setada com let

console.log("----------------------------------------------------------------------------------------------------------");

//------------------- Objetos -----------------------------------

console.log(typeof Object);
console.log(typeof new Object);

const Client = function() {}
console.log(typeof Client);
console.log(typeof new Client);

class Produc {};
console.log(typeof Produc);
console.log(typeof new Produc());
// Objetos são criados apartir de funções (também chamadas de classes) 
// Após criar uma função diversos objetos podem ser referenciados


console.log("----------------------------------------------------------------------------------------------------------");

//------------------- Notação Ponto -----------------------------------

console.log(Math.ceil(9.7));
const object1 = {};
object1.nome = 'Alguma coisa';
console.log(object1.nome);
// Referenciar ou adicionar atributos de objetos atravez da notação de ponto
object1['nome'] = 'Alguma coisa';
console.log(object1.nome);
// Utilizando essa notação diferente é possivel tem mais fexibilidade com o nome do atributo, porem não aconselhada

function objectPrime(nome){
    this.nome = nome;
    this.exec = function(){
        console.log('Exec...');        
    }
}
// Atravez do this é possivel tornar atributos de um objeto globais, assim como novas funções 

let object3 = new objectPrime('Alguma coisa!');
let object4 = new objectPrime('Outra coisa!');
// Sendo possivel criar novos objetos com os atributos já setados

console.log(object3);
console.log(object3.nome);
console.log(object4.nome);
console.log(object3.exec());
console.log(object4.nome);
object4.exec();

console.log("----------------------------------------------------------------------------------------------------------");

//------------------- Operadores -----------------------------------

{
    let b = 10;
    let a = 10;
    console.log(b);
    b+=a;
    console.log(b);
    // Operador de tribuição (mesmo que utilizar - b= b+a)
    b-=a;
    console.log(b);
    // Atribuição subitrativa 
    b*=a;
    console.log(b);
    b/=a;
    console.log(b);

    b%=a;
    console.log(b);
    // Operador para descobrir se o número tem disima periodica
    
         
}

console.log("----------------------------------------------------------------------------------------------------------");

//------------------- GitCommit -----------------------------------

{
    console.log('Pequena alteração, feita para o repositorio do git estar acessesível no trabalho.');
}

console.log("----------------------------------------------------------------------------------------------------------");

//------------------- Operador Destrution para Objetos  -----------------------------------

const pessoa = {
    nome: 'Fodace',
    idade: 45, 
    endereco: {
        logradura: 'Rua slá.',
        numero2: 1000
    }
}

const {nome, idade } = pessoa;
// Atravez do operador de destructuring é possovel retirar atributos de determinado objeto

console.log(nome, idade);

const{nome: n, idade: ida} = pessoa;
console.log(n, ida);

const {sobrenome, bemhumorada=true} = pessoa;
console.log(sobrenome, bemhumorada);
// Na hora de retirar atributos com o metodo de destructuring ele acaba criando um espaço na memoria especifico 
// para ele 

console.log(pessoa);

//const{conta:{ag, num} } = pessoa;
// Nesse caso é importante ter certeza que o caminho até os dados está dispoveil, caso contrato se retorna um erro

console.log("----------------------------------------------------------------------------------------------------------");

//------------------- Operador Destrution para arays -----------------------------------

const [aray_de_destructuring] = [1,2,3,4,5,6,7,8,9];
console.log(aray_de_destructuring);
// Tomar cuidado ao setar aray pois pode cair nesse problema (Adicionando somente um e talver até aplicando 
//o destructuring )

const[n1, , ,  n4 , n5 , n6=0] = [4,7,9,10,13];
console.log(n1, n4,n5,n6);
// Eleemntos pode ser desestruturados e logo após isso setados na mesma linha
// Consonante a isso é possivel também pular valores que devem ser setadas ou desestruturados dexando espaços vazios
// por meio das virgulas

const [,[, nota]] = [, [8.9 , 4.6,], [7.5 , 9.3]]
console.log(nota);
// Possivel retirar e atribuir valores a matrizer atravez do destructuring, porem não é recomendado,
// muito mais praticor retirar atravez do índice 

function random ({min = 0, max= 1000}){
    const value = Math.random() * (max - min) + min;
    return Math.floor(value);
}

const obj = {
    max:100,
    min:10
}
console.log(random(obj));
console.log(random({min:800}));


console.log("----------------------------------------------------------------------------------------------------------");

//------------------- Operadores e Comparação -----------------------------------

console.log('01)','1' ==1);
// O primeiro comprara o valor, testando sé o mesmo é igual 
console.log('02)','1' ===1);
// O Segundo comprara a variavel, testando sé o mesmo é igual e se é do mesmo tipo, ou seja um igual absoluto
console.log('03)',1 ===1);
console.log('04)','1' !=1);
console.log('05)','1' !==1);
let time = new Date(0);
console.log(time.getTime());

console.log("----------------------------------------------------------------------------------------------------------");

//------------------- Operadores Lógicas -----------------------------------

function compras(trabalho1,trabalho2){
    const comprar_sorverte = trabalho1 || trabalho2;
    const comprar_tv50 = trabalho1 && trabalho2;
    //const comprar_tv32 = !!(trabalho1 ^ trabalho2); //bitwise xor (operador ou exclusivo)
    const comprar_tv32 = trabalho1 != trabalho2; // Mesmo resultado do operador exclusivo porém de forma 
    //mais simplificada
    const manter_saudavel = !comprar_sorverte
    return{comprar_sorverte, comprar_tv50, comprar_tv32, manter_saudavel}; // Retornando diversos valores atraverz de um objeto
    // O javascript permite a omição de uma atribuição de varial a um valor entregue, poupando codido 
    
    // return{comprar_sorverte: comprar_sorverte,comprar_tv50: comprar_tv50,comprar_tv32: comprar_tv32,
    //  manter_saudavel: manter_saudavel}; - Forma antiga de se retornar valores
}

console.log(compras(true,true));
console.log(compras(true,false));
console.log(compras(false,false));

console.log("----------------------------------------------------------------------------------------------------------");

//------------------- Operadores unarios -----------------------------------

let unario= 1;
let unario1= 2;

console.log(unario++);
console.log(-unario);
console.log(--unario);
console.log(++unario === unario--);

//------------------- Operadores ternario -----------------------------------

const ternario = nota4 => nota4 >= 7 ? 'Aprovado': 'Reprovado';
console.log(ternario(8));
console.log(ternario(6.6));
// Chamando uma função arow para fazer uma comparação apartir do operador ? (Equivalente a um if/else)

console.log("----------------------------------------------------------------------------------------------------------");

//------------------- Try/Catch/Throw -----------------------------------

function tratarErroELancar(erro){
//throw'mansagem'
throw{
    nome: erro.nome,
    msg: erro.message,
    date: new Date 
}

}

function imprimirNomeGritado(object7){
    try{
        console.log(object7.name.toUpperCase());
    } catch(e) {
        tratarErroELancar(e)
    }finally{
        console.log('final');
    }
    // Finally ou inves do trow roda de qualquer forma independente de ter erro ou não 
}
// Tratamento de mensagens de erro para usuário e programador

//const object7 = {nome: 'Roberto'};
const object7 = {name: 'Roberto'};

imprimirNomeGritado(object7)

console.log("----------------------------------------------------------------------------------------------------------");

//-------------------------- Estruturas Condicionais -----------------------------------

const imprimir_resultado = function (j){
    switch (Math.floor(j)){
        case 10:
        case 9:
            console.log('Passou bem mizera!');
            break
        // Para sair do switch ao execuar uma condicional é nescessario um break ao final do case
        case 8: case 7:
            console.log('Aprovado!');
            break
        case 6: case 5: case 4:
            console.log('Recuperação!');
            break
         case 3: case 2: case 1: case 0:
            console.log('Reprovado!');
            break
        default:
            console.log('Nota invalida');
    }
}

imprimir_resultado(9);
imprimir_resultado(8);
imprimir_resultado(5);
imprimir_resultado(3);
imprimir_resultado(0);
imprimir_resultado(12);

console.log("----------------------------------------------------------------------------------------------------------");

//-------------------------- While -----------------------------------

function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log('Até a próxima!')