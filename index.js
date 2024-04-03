// -- lição 1: básico

//console.log(`Hello`); // print no console do website, acessível ao inspecionar elemento
//console.log(`Hello World!`);
//window.alert(`This is an alert!`); // pop up quando abre a página
//window.alert(`Eu gosto de pizza!`)
//document.getElementById("myH1").textContent = `Hello!`;
//document.getElementById("myP").textContent = `Eu gosto de pizza.`;
// esses dois acima permitem alterar algum elemento do html por meio do ID

//-- lição 2: variáveis

// 1. declaração    let x;
// 2 . assignment   x = 100;
// tipos de data básicos: number, string, boolean
//let x;
//x = 100;
//let age = 25;
//console.log(typeof age) //mostra o tipo de data
//console.log(`You are ${age} years old`);
//let firstName = "Diogo";
//console.log(typeof firstName);
//console.log(`Your name is ${firstName}`);
//let online = false;
//console.log(`Diogo está online: ${online}.`)
/*let fullName = "Diogo de Almeida Semblano";
let age = 18;
let student = false;
document.getElementById("p1").textContent = `Meu nome é ${fullName}.`;
document.getElementById("p2").textContent = `Eu tenho ${age} anos de idade.`
document.getElementById("p3").textContent = `Estudante: ${student}.`*/

//-- lição 3: arithmetic operators
// operandos (valores, variáveis, etc.)
// operadores (+ - * /)
// ex: 11 * x * 5;
// let students = 30;
//students = students + 1 (ou * 2, / 2, - 2, afins)
//students = students ** 2; // potência
//students = students % 4 // módulo, sobra da divisão, 30/4 sobra 2 
//students += 1 //students -= 1 //students *= 2 //students /= 2 
//students **= 2 //students %= 2
//students ++ //studentes -- (mais um e menos um)
/* operators precedence:
PEMDAS - em ordem: parenteses, exponentes, multiplicação & divisão & módulo, 
adição & subtração */
// console.log(students);

//-- lição 4: accept user input
// 1. versão fácil: window prompt
// 2. versão profissional: textbox em html com botão para submit

/* let username;
username = window.prompt("Qual é seu username?");
console.log(username); */ // 1. versão fácil

/* let username;
document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username}!`
} */ // 2. jeito profissional

//-- lição 5: type conversion
// type conversion = mudar o datatype de um valor para outro
// (strings, numbers, booleans)
/* let age = window.prompt("How old are you?")
age = Number(age); */
// Number(x) // Boolean(y) // String(z)
// uma string sem nada convertida em boolean fica false
// um 0 convertido em boolean vira true

//-- lição 6: constants
// const = uma variável que não pode ser mudada
/* const PI = 3.14159;
let radius;
let circumference;
document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = circumference + "cm";
} */

//-- lição 7: counter program, em seu próprio arquivo
// outro arquivo

//-- lição 8: Math
// objeto built-in de math que providencia uma coleção de propriedade e 
// métodos
// Math.round(arredondar); // Math.floor(arredondarbaixo) 
// Math.ceil(arredondarcima) // Math.trunc(eliminadecimal)
// Math.pow(numero,potencia) // Math.sqrt(raizquadrada)
// Math.log(acharlog) // Math.sin() // Math.cos() // Math.tan()
// Math.abs(absoluto) // Math.sign(sinal) 
// Math.max(1,2,3,4,5) dá o valor máximo de várias variáveis
// Math.min(1,2,3,4,5) dá o valor mínimo de várias variáveis

// -- lição 9: random number generator
// let randomNum = Math.random(); // gera um número aleatório de 0 até 1
// let randomNum = Math.floor(Math.random() * 6) + 1; // um número de 1 até 6
/* const MAX = 100;
const MIN = 50;
let randomNum = Math.floor(Math.random() * (MAX-MIN)) + MIN; */
// gerador de número aleatório inteiro com mínimo e máximo acima

// -- lição 10: IF STATEMENTS
// se uma condição é verdadeira, execute uma linha de código
// se não for, faça outra coisa
/*  if(){
    }
    else if{

    }
    else{
    }
*/

//-- lição 11: checked properties - outro arquivo
// .checked: propriedade que checa o checked state de
// uma html checkbox ou radio button

//-- lição 12: ternary operator
// um shortcut para if/else statement
// ajuda a dar assign numa variável baseado em uma condição
// condition ? codeIfTrue : codeIfFalse;
/*  let age = 21;
    let message = age >= 18 ? "You're and adult" : "You're a minor";
    console.log(message)
*/
/*    let isStudent = true;
    let message = isStudent ? "You're a student" : "You're not a student"
    console.log(message)
*/

//-- lição 13: switches
// switch eu te amo
/* 
let day = 4;
switch(day){
    case 1:
        console.log("Hoje é domingo.");
        break;
    case 2:
        console.log("Hoje é segunda.");
        break;
    case 3:
        console.log("Hoje é terça.");
        break;
    case 4:
        console.log("Hoje é quarta.");
        break;
    case 5:
        console.log("Hoje é quinta.");
        break;
    case 6:
        console.log("Hoje é sexta.");
        break;
    case 7:
        console.log("Hoje é sábado.");
        break;
    default:
        console.log("Inventaram um novo dia?");
        break;
}
*/ 

//-- lição 14: string methods
// te permite manipular e mexer com strings
// let username = "Bro Code        ";
// let result = username.startsWith(" ") // valor bool se uma string começar com X caractere
//let result = username.endsWith(" ") // valor bool mas se uma string começar
// username = username.trim(); // tira os espaços inutilizados do nome
// username = username.toUpperCase(); // deixa tudo em maiúsculo
// username = username.toLowerCase(); // deixa tudo em minúsculo
// username = username.repeat(5); // repete a string várias vezes
// username = username.replaceAll("o","a"); // troca um caractere por outro
// username = username.padStart(20,"0"); // adiciona um pad no inicio com um caractere escolhido até ter X caracteres de length
// username = username.padEnd(30,"0"); // mesmo de cima, mas no final
// console.log(username.charAt(2)); // acha um caractere usando um index
// console.log(username.indexOf("")); // acha o primeiro aparecimento de um caractere em especifico, case sensitive
// console.log(username.length); // mostra o tamanho de uma String
// console.log(username);
// console.log(result);

//-- lição 15: string slicing
// criando uma substring usando uma porçõa de outra string
// string.slice(start, end)
// const fullName = "Diogo de Almeida Semblano";
/* let firstName = fullName.slice(0,5);
let middleName = fullName.slice(6,16);
let lastName = fullName.slice(17); */ // forma simples de fazer
/* let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ")) */ // forma mais inteligente
// let firstChar = fullName.slice(0,1);
// let lastChar = fullName.slice(-1);
// console.log("Your name is: "+firstName+lastName);

//-- lição 16: method chaining
// method chaining = chamar um método atrás do outro, em uma linha contínua de código
// let username = window.prompt("Enter ytour username: ");
// -- NO METHOD CHAIN --
/* username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();
let extraChars = username.slice(1);
extraChars = extraChars.toLowerCase();
username = letter + extraChars;
console.log(username); */
// -- METHOD CHAINING
// username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
// console.log(username)

//-- lição 17: logical operators
// logical operators = usados para combinar ou manipular valores bool
// and = &&
// or = ||
// NOT = !
/* const temp = 20;
if(temp > 0 && temp <= 30){
    console.log("O tempo está bom.");
}
else{
    console.log("O tempo está uma merda.")
} */

//-- lição 18: strict equality
//  = assignment operator
//  == comparison operator (se os valores são iguais)
//  === strict equality (compara se os valores e datatype são iguais)
//  != inequality operator
//  !== strict inequality operator
/* const PI = 3.14;
if(PI === "3.14"){ // se for ==, é PI, se for ===, não é PI, pois é String
    console.log("Isto é PI.")
}
else{
    console.log("Isto não é PI.")
} /* 

//-- lição 19: while loop
// while loop = repete código enquanto uma condição for verdadeira
let username = "";
/* while(){
    } */
/* do{
    username = window.prompt(`Enter your name`);
} while(username==="" || username===null) // variação do while, coloque o código primeiro e depois cheque a condição

console.log(`Hello ${username}`); */

//-- lição 20: for loop
// for loop = repete um código por um número limitado de vezes
/* for(let i = 10; i>=0; i-= 1){
    if(i == 7){
        continue // pula essa iteração do loop
        // break; // quebra o loop
    }
    console.log(i);
}
console.log("Feliz ano novo!"); */

//-- lição 21: number guessing game - outro arquivo
// outro arquivo

//-- lição 22: functions
// functions = uma seção de código reusável
// declare o código, e você pode usá-lo quando quiser
// chame a função para executar este código
/* let username = "Diogo de Almeida Semblano";
function happy_birthday(i, username){
    console.log(`${i}: Feliz aniversário, ${username}!`)
}
for(let i = 1; i<=3; i++){
    happy_birthday(i, username);
} */
/* function add(x, y){
    return x + y; // retorna para quem chamou a função
}
answer = add (10, 3); // o return vira a variável answer
console.log(answer) */

//-- lição 23: variable scope
// variable scope = onde uma variável é reconhecida
// e acessível (local vs global)
// você não pode declarar duas variáveis globais iguais
// mas você pode declarar duas variáveis locais iguais, como variáveis dentro de uma função

//-- lição 24: temperature conversion program - outro arquivo
// outro arquivo

//-- lição 25: array
// array = uma estrutura-variável que pode segurar mais de um valor
/* let fruits = ["apple", "orange", "banana"];
fruits[0] = "coconut";
fruits.push = "tomate";
fruits.pop();
fruits.unshift("mango");
fruits.shift();
let numOfFruits = fruits.length;
let index = fruits.indexOf("apple");
fruits.sort(); // ordem alfabetica
fruits.sort().reverse(); // ordem alfabetica descendente
console.log(fruits);
for(let fruit of fruits){ // enhanced for loop
    console.log(fruit);
} */

//-- lição 26: spread operator
// spread operator = ... permite um iterable como uma array ou string
// ser expandida em elementos separados (unpack)
// pode ser usado para combinar arrays
/* let numbers = [1,2,3,4,5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);
console.log(minimum); */
/* let username = "Diogo Semblano";
let letters = [...username].join("-");
console.log(letters); */
/* let fruits = ["apple", "orange", "banana"];
let vegetables = ["carrots", "celery", "potatoes"]
let foods = [...fruits, ...vegetables, "eggs", "milk"];
console.log(foods); */

//-- lição 27: rest parameters
// rest parameters = (...rest) permite uma função trabalhar com um variável
// número de argumentos ao juntar eles em uma array
// spread = expande um array em elementos separados
// rest = junta elementos separados em um array
/* function openFridge(...foods){
    console.log(...foods);
}
function getFood(...foods){
    return foods
}
const food1 = "pizza";
const food2 = "hamburguer";
const food3 = "hotdog";
const food4 = "sushi";
const foods = getFood(food1,food2,food3,food4)
//openFridge(food1,food2,food3,food4);
console.log(...foods) */
/* function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}
const total = sum(1,6,15,29,4);
console.log(`Your total is: $${total}`); */
/* function combineStrings(...strings){
    return strings.join(" ");
}
const fullName = combineStrings("Mr.", "Spongebob", "Squarepants", "III")
console.log(fullName); */

//-- lição 28: dice roller program - outro arquivo
// outro arquivo

//-- lição 29: random password generator - outro arquivo
// outro arquivo

//-- lição 30: callbacks
// função que é passada como argumento para outra função
// usada para manejar operações assíncronas
// 1. ler um arquivo
// 2. network requests
// 3. interação com banco de dados
// "quando você estiver pronto, chame esta"
// quando uma função terminar, a outra será executada
/* hello(wait);
function hello(callback){
    console.log("Hello!");
    callback();
}
function goodbye(){
    console.log("Goodbye!");
}
function leave(){
    console.log("Leave!");
}
function wait(){
    console.log("Wait!");
} */

//-- lição 31: forEach()
// forEach() = método usado para iterar sob os elementos de
// um array e aplicar uma função específica (callback) para cada elemento
// array.forEach(callback);
// elemento, index, array são dados automaticamente
/* let numbers = [1, 2, 3, 4, 5];
numbers.forEach(double); // duplica o valor de cada elemento do array
numbers.forEach(display); // da display em cada elemento do array
function display(element){
    console.log(element);
}
function double(element, index, array){
    array[index] = element * 2;
} */

//-- lição 32: map method
// .map() = aceita um callback e aplica essa função
// para cada elemento de um array, então retorna um novo array
/* const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(square);
console.log(squared);
function square(element){
    return Math.pow(element, 2)
} */
/* const students = ["Spongebob", "Patrick"];
console.log(students.map(upperCase));

function upperCase(element){
    return element.toUpperCase();
} */

//-- lição 33: filter method
// .filter() = cria um novo array ao filtrar elementos 
/* let numbers = [1, 2, 3, 4, 5, 6, 7];
let evenNums = numbers.filter(isEven);
console.log(evenNums);

function isEven(element){
    return element % 2 === 0;
} */ 

//-- lição 34: reduce method
// .reduce() = reduz os elementos de um array
// para um valor singular 
/* const prices = [5, 30, 10, 25, 15, 20];
const total = prices.reduce(sum);
console.log(`${total.toFixed(2)}`);

function sum(prevelement, nextelement){
    return prevelement + nextelement;
} */

//-- lição 35: function expressions
// function declaration = define um bloco
// reusável de código que perfoma uma tarefa
// específica
// function expressions = uma maneira de declarar
// funções como valores ou variáveis
/* const hello = function(){
    console.log("Hello");
}*/
/* setTimeout(function(){
    console.log("Hello!");
}, 3000); */


//-- lição 36: arrow functions 
// arrow functions = uma maneira concisa de 
// escrever function expressions
// bom para funções simples que você só vai usar
// uma vez
// (parameters) => some code
/* const hello = (name) => {console.log(`Hello ${name}`);
                        console.log("Você é velho.");}
hello("Diogo"); */
// setTimeout( () => console.log("Hello"), 3000);
/* const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map((element) => Math.pow(element, 2));
const cubes = numbers.map((element) => Math.pow(element, 3));
const evenNums = numbers.filter((element) => element % 2 === 0);
const oddNums = numbers.filter((element) => element % 2 !== 0);
const total = numbers.reduce((accumulator, element) => accumulator + element);
console.log(total); */

//-- lição 37: javascript objects 
// object = coleção de propriedades relacionadas
// e/ou métodos
// pode representar objetos reais 
// object = {key:value,
//           function()}
/* const person = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello: () => console.log("Hello!"),
}
person.sayHello(); */

//-- lição 38: what is THIS
// this = referência a um objeto em que THIS
// é usado. (depende do contexto imediato)
// person.name = this.name
// this não funciona com arrow function
/* const person1 = {
    name: "Spongebob",
    favFood: "Hamburgers",
    sayHello: function(){console.log(`Olá! Eu sou
    ${this.name}`)}
}
person1.sayHello(); */ 

//-- lição 39: constructor
// constructor = método especial para definir
// as propriedades e métodos de objetos 
/* function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color
    this.drive = function(){console.log(`You drive the ${this.model}!`)}
}
const car1 = new Car("Ford", "Mustang", 2024, "Red");
const car2 = new Car("Chevrolet", "Camaro", 2025, "Blue")
car1.drive();
car2.drive(); */

//-- lição 40: class
// (ES6 feature) que providencia uma forma mais estruturada de
// trabalhar com objetos, em comparação a construtores tradicionais
// ex. static keyword, inheritance, encapsulation
/* class Products{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    displayProduct(){ // dentro da classe não precisa da function keyword
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price}`);
    }
}
const product1 = new Products("Shirt", 19.99);
product1.displayProduct(); */

//-- lição 41: static keyword
// static = keyword que define as propriedades ou métodos
// que permitem a uma classe em sí ao contrário dos objetos
// criados desta classe
// (a classe que é dona de algo static, não o objeto)
/* class MathUtil{
    static PI = 3.14159;

    static getDiameter(radius){
        return radius * 2;
    }
    static getCircumference(radius){
        return 2 * this.PI * radius;
    }
    static getArea(radius){
        return this.PI * radius * radius;
    }
}
console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10)); */
/* class User{ // toda vez que um novo user é feito, a usercount aumenta
    static userCount = 0;
    constructor(username){
        this.username = username;
        User.userCount++;
    }
} */ 

//-- lição 42: inheritance
// permite a uma nova classe herdar propriedades
// e métodos de uma classe existente (parent -> child)
// ajuda a reusar código
/* class Animal{
    alive = true;
    eat(){
        console.log(`This ${this.name} is eating.`);
    }
}
class Rabbit extends Animal{
    name = "rabbit";
    run(){
        console.log(`This ${this.name} is running.`);
    }
}
const rabbit = new Rabbit();
console.log(rabbit.alive);
rabbit.eat(); */

//-- lição 43: super
// super = keyword usada em classe para chamar o
// construtor ou acessar as propriedades/métodos de
// uma parent class (superclass)
// this = this object
// super = parent
/* class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    move(speed){
        console.log(`The ${this.name} moves at ${speed} per hour.`)
    }
}
class Rabbit extends Animal{
    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }
    run(){
        console.log(`This ${this.name} runs.`);
        super.move(this.runSpeed);
    }
}
class Fish extends Animal{
    constructor(name, age, swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }
}
const rabbit = new Rabbit("rabbit", 1, 25);
const fish = new Fish("fish", 2, 12);
rabbit.run(); */

//-- lição 44: GETTERS e SETTERS
// GETTERS = método especial que faz uma propriedade legível
// SETTERS = método especial que faz uma propriedade escrevível
/* class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth;
        }
        else{
            console.error("Width deve ser um número positivo.");
        }
    }
    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight;
        }
        else{
            console.error("Height deve ser um número positivo.");
        }
    }
    get width(){
        return this._width.toFixed(1);
    }
    get height(){
        return this._height.toFixed(1);
    }
    get area(){
        return (this._width * this._height).toFixed(1);
    }
}
const rectangle = new Rectangle(3, 4);
console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area); */

//-- lição 45: destructuring 
// destructuring = extrair valores de arrays e objetos,
// e então dar assign neles em variáveis de uma forma conveniente
// [] = para fazer array destructuring
// {} = para fazer object destructuring 

// ---- EXEMPLO 1: TROCAR O VALOR DE DUAS VARIÁVEIS --
/* let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a);
console.log(b); */

// ---- EXEMPLO 2: TROCAR ELEMENTOS EM UM ARRAY
/* const colors = ["vermelho", "verde", "azul", "preto", "branco"];
[colors[0], colors[4]] = [colors[4], colors[0]];
// -- EXEMPLO 3: TRANSFORMAR ELEMENTOS EM VARIÁVEIS
const [firstColor, secColor, thirdColor, ...extraColors] = colors;
console.log(firstColor);
console.log(extraColors); */

// ---- EXEMPLO 4: TIRAR VALORES DE OBJETOS
/* const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    job: "Fry Cook",
}
const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 34,
}
// const {firstName, lastName, age, job} = person2;
// console.log(job); 
// -- EXEMPLO 5: DESTRUCTURE NOS PARÂMETROS DE FUNÇÃO
function displayPerson({firstName, lastName, age, job="Unemployed"}){
    console.log(firstName);
    console.log(age)
    console.log(job);
}
displayPerson(person2); */ 

//-- lição 46: nested objects
// nested objects = objetos dentro de objetos
// te permite representar tipos de data mais complexos
// Child Object é fechada por um Parent Object
/* const person = {
    fullName: "Spongebob Squarepants",
    age: 30,
    isStudent: true,
    hobbies: ["karate", "jellyfishing", "cooking"],
    address: {
        street: "Rua Valentino Miranda, 672",
        city: "Duque de Caxias",
        country: "Brazil",
    }
}
for(const property in person.address){
    console.log(person.address[property]);
} */

//-- lição 47: array of objects
// array de objetos.
/* const fruits = [{
    name: "apple",
    color: "red",
    calories: 95,
}, {
    name: "orange",
    color: "orange", 
    calorius: 45
}, {
    name: "banana",
    color: "yellow",
    calories: 105
}, {
    name: "coconut",
    color: "white",
    calories: 159
}, {
    name: "pineapple",
    color: "yellow",
    calories: 37
}]
fruits.push({name: "grapes", color: "purple", calories: 26})
fruits.forEach(fruit => console.log(fruit.name)); */
// vale usar o forEach, reduce, map e filter para trabalhar com as arrays de objetos

//-- lição 48: sort()
// sort() = método para dar sort em elementos de um array
// dá sort e melementos como strings na ordem lexicográfica, não alfabética
// lexicographica = (alfabeto + números + simbolos) como strings
/* let numbers = [1, 10, 12, 14, 13, 11, 2, 3, 4, 5, 8, 7, 9, 6];
numbers.sort((a, b) => a - b);
// people sort((a, b) => a.name.localeCompare(b.name));
console.log(numbers); */

//-- lição 49: shuffle
// como dar shuffle num elemento de um array
// fisher-vates algorithm
/* const cards = ['A', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']
// cards.sort(() => Math.random() - 0.5); // método ruim
shuffle(cards);
console.log(cards);
function shuffle(array){
    for(let i = array.length - 1; i > 0; i--){
        const random = Math.floor(Math.random() * (i + 1));

        [array[i], array[random]] = [array[random], array[i]]
    }
} */

//-- lição 50: date objects
// objetos que contêm valor que representam datas
// podem ser mudados e formatados
// Date(year, month, day, hour, minute, second, ms)
// pode passar em string também: "2024-01-02T12:00:00"
// pode passar em milissegundos desde a época: new Date(17000000000);
/* const date = new Date(2024, 4, 13, 0, 0, 0, 500);
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const dayOfWeek = date.getDay();
date.setFullYear(2024);
date.setMonth(1);
date.setDate(1);
date.setHours(2);
date.setMinutes(3);
console.log(date); */

//-- lição 51: closure
// uma função definida dentro de outra função
// a função de dentro possui acesso as variáveis da outra função
// permite private variables e state maintenance
// usado frequentemente em react, vue, angular
/* function outer(){

    let message = "Hello!";
    function inner(){
        console.log(message);
    }
    inner();
}
outer(); */
/* function createCounter(){
    let count = 0;

    function increment(){
        count++;
        console.log(`Count increased to: ${count}.`)
    }
    function getCount(){
        return count;
    }
    return {increment, getCount};
}
const counter = createCounter();
counter.increment();
console.log(`The current count is: ${counter.getCount()}`); */
/* function createGame(){
    let score = 0;
    function increaseScore(points){
        score += points;
        console.log(`+${points}pts`);
    }
    function decreaseScore(points){
        score -= points;
        console.log(`-${points}pts`);
    }
    function getScore(){
        return score;
    }
    
    return {increaseScore, decreaseScore, getScore};
}

const game = createGame();
game.increaseScore(6);
game.increaseScore(9);
game.decreaseScore(2);
console.log(`The final score is: ${game.getScore()}`); */

//-- lição 52: setTimeout()
// setTimeout() = função no javascript que te permite programar
// a execução de uma função depois de um determinado tempo (milissegundos)
// tempos são aproximados (varia no workload do JRE)
// setTimeout(callback, delay)
/* const timeoutID = setTimeout(() => window.alert("Hello!"), 3000)
clearTimeout(timeoutID); */
/* let timeoutId;
function startTimer(){
    timeoutId = setTimeout(() => window.alert("Hello!"), 3000);
    console.log("STARTED!");
}
function clearTimer(){
    clearTimeout(timeoutId);
    console.log("CLEARED!");
} */

//-- lição 53: digital clock - outro arquivo
// outro arquivo

//-- lição 54: stopwatch - outro arquivo
// outro arquivo

//-- lição 55: ES6 modules
// ES6 modules = um arquivo externo que contêm código reusável
// que pode ser importado em outros arquivos javascript
// escreve código reusável para outros diferentes aplicativos;
// pode conter variáveis, classes, funções, e outros;
// introduzido como parte do ECMAScript 2015 update
/* import {PI, getCircumference, getArea, getVolume} from './mathUtil.js';
const circumference = getCircumference(10);
const area = getArea(10);
const volume = getVolume(10);
console.log(PI);
console.log(`${circumference.toFixed(2)}cm`);
console.log(`${area.toFixed(2)}cm^2`);
console.log(`${volume.toFixed(2)}cm^3`); */

//-- lição 56: asynchronous code
// synchronous: executa código linha por linha consecutivamente em uma 
// maneira sequencial
// código que espera por uma operação para completar
// asynchronous: permite múltiplas operações serem performadas concormitantemente sem esperar
// não bloqueia o fluxo de execução e permite o programa continuar
// (I/O operations, network requests, fecthing data)
// trabalhado por: callback, promises, async/await
/* function func1(callback){
    setTimeout(() => {console.log("Task 1");
                      callback()}, 3000);
}
function func2(){
    console.log("Task 2");
    console.log("Task 3");
    console.log("Task 4");
}
func1(func2); */

//-- lição 57: error handling
// error = um objeto que é criado para representar um problema que aconteceu
// ocorre as vezes com user input ou ao estabelecer uma conexão
// try { } = dá enclose em qualquer código que pode causar um erro
// catch { } = captura e trabalha com qualquer erro do try
// finally { } = opcional, sempre executa, clean up
// console.lag("Hello!"); // type error
// console.log(x); // reference error
/* try{
    console.log("Hello!");
}
catch(error){
    console.error(error);
}
finally{
    console.log("Sempre executará.");
    // FECHAR ARQUIVOS, CONEXÕES OU DAR RELEASE EM RECURSOS
}
console.log("Você chegou ao fim!"); */
/* try{
    const dividend = Number(window.prompt("Bote um dividendo: "));
    const divisor = Number(window.prompt("Bote um divisor: "));

    if(divisor == 0){
        throw new Error("Você não pode dividir por 0!");
    }
    if(isNaN(dividend) || isNaN(divisor)){
       throw new Error("Valores devem ser um número!"); 
    }

    const result = dividend / divisor;
    console.log(result);
}
catch(error){
    console.error(error);
}
console.log("Você chegou ao fim!"); */

//-- lição 58: calculadora - outro arquivo
// outro arquivo

//-- lição 59: DOM = DOCUMENT OBJECT MODEL
// Object() que representa a página que você vê no webbrowser
// e o providencia uma API para interagir com ela
// web browsers construem o DOM quando carregam um elemento html
// e estrutura todos os elementos como se fosse uma árvore
// javascript pode acessar o dom para dinamicamente mudar o
// conteúdo, estrutura e estilo de uma página
// document -> root -> element <head> or <body> -> elements
//
// console.log(document);
/* document.title = "My website";
document.body.style.backgroundColor = "hsl(0, 0%, 15%)";
console.dir(document); */
/* const username = "Bro Code";
const welcomeMessage = document.getElementById("myH1");
welcomeMessage.textContent += username === "" ? `Guest` : username; */

//-- lição 60: element selectors - outro arquivo
// element selectors = métodos usados para manipular elementos html
// eles o permitem selecionar um ou múltiplos elementos html
// do DOM (document object model)
//
// 1. document.getElementByID() // ELEMENT OR NULL
// 2. document.getElementsClassName() // HTML COLLECTION
// 3. document.getElementsByTagName() // HTML COLLECTION
// 4. document.querySelector() // ELEMENT OR NULL
// 5. document.querySelectorAll() // NODELIST
// OUTRO ARQUIVO

//-- lição 61: DOM navigation - outro arquivo
// DOM navigation = processo de navegar pela estrutura de um
// documento html usando javascript
// outro arquivo
// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children
//
// ---- .firstElementChild: seleciona o primeiro elemento de um parente
/* const firstChild = element1.firstElementChild;
firstChild.style.backgroundColor = "yellow"; */
// const ulElements = document.querySelectorAll("ul");
/* ulElements.forEach(ulElement => {
    const firstChild = ulElement.firstElementChild;
    firstChild.style.backgroundColor = "yellow";
}); */
// ---- .lastElementChild: seleciona o ultimo elemento de um parente
/* const element = document.getElementById("fruits");
const lastChild = element.lastElementChild;
lastChild.style.backgroundColor = "yellow"; */
/* const ulElements = document.querySelectorAll("ul");
ulElements.forEach(ulElement => {
    const lastChild = ulElement.lastElementChild;
    lastChild.style.backgroundColor = "yellow";
}); */
// ---- .nextElementSibling: o próximo "irmão" de um elemento selecionado
/* const element = document.getElementById("carrots");
const nextSibling = element.nextElementSibling;
nextSibling.style.backgroundColor = "yellow"; */
// ---- .previousElementSibling: o anterior "irmão" de um elemento selecionado
/* const element = document.getElementById("batata");
const prevSibling = element.previousElementSibling;
prevSibling.style.backgroundColor = "yellow" */
// ---- .parentElement: seleciona o parente de um elemento
/* const element = document.getElementById("carrots");
const parent = element.parentElement;
parent.style.backgroundColor = "yellow"; */
// ---- .children: seleciona o child element; retorna uma html collection, não tem array methods
/* const element = document.getElementById("vegetables");
const children = element.children;
children[0].style.backgroundColor = "yellow"; */
/* Array.from(children).forEach(child =>{
    child.style.backgroundColor = "yellow";
}) */

//-- lição 62: add or change HTML
// ------ EXEMPLO 1 <h1>
// --- PASSO 1: CRIAR O ELEMENTO
// const newH1 = document.createElement("h1");
// --- PASSO 2: ADICIONAR ATRIBUTOS / PROPRIEDADES
/* newH1.textContent = "eu amo pizaz"
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center"; */
// --- PASSO 3: ADICIONAR ELEMENTO PRO DOM
// document.body.prepend(newH1); // prepend como first child, append como último child;
// document.getElementById("box1").append(newH1);
// const box2 = document.getElementById("box2");
// document.body.insertBefore(newH1, box1); // newElement, CurrentElement; inserir antes de algo
// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1, boxes[4]);
// --- RETIRAR ELEMENTO HTML
// document.body.removeChild(newH1);
// document.getElementById("box1").removeChild(newH1);
// ------ EXEMPLO 2 <ol>
// --- PASSO 1: CRIAR O ELEMENTO
// const newListItem = document.createElement("li");
// --- PASSO 2: ADICIONAR ATRIBUTOS / PROPRIEDADES
/* newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen"; */
// --- PASSO 3: ADICIONAR ELEMENTO PRO DOM
// const orange = document.getElementById("orange");
// document.body.prepend(newListItem);
// document.getElementById("fruits").prepend(newListItem);
// document.getElementById("fruits").insertBefore(newListItem, orange);
// const listItems = document.querySelectorAll("#fruits li");
// document.getElementById("fruits").insertBefore(newListItem, listItems[2]);
// --- RETIRAR ELEMENTO HTML
// document.getElementById("fruits").removeChild(newListItem);

//-- lição 63: mouse events
// eventListener = escuta eventos específicos para criar páginas interativas
// events: click mouseover, mouseout
// .addEventListener(event, callback); // ou anonymous function, ou arrow func
/* const myBox = document.getElementById("myBox");
const myBtn = document.getElementById("myBtn63");
myBtn.addEventListener("click", event => {
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "Valeu mano! 😁";
});
myBtn.addEventListener("mouseover", event =>{
    myBox.style.backgroundColor = "yellow";
    myBox.textContent = "Não faz isso! 🤢";
});
myBtn.addEventListener("mouseout", event =>{
    myBox.style.backgroundColor = "lightgreen";
    myBox.textContent = "Me clique! 😊";
}); */

//-- lição 64: key events
// eventListener = escuta eventos específicos para criar páginas interativas
// events: keydown, keyup
// document.addEventListener(event, callback);
/* const myBox = document.getElementById("myBox");
const moveAround = 10;
let x = 0;
let y = 0; */
// --- mudar de cor e console log
/* document.addEventListener("keydown", event => {
    myBox.textContent = "😎";
    myBox.style.backgroundColor = "tomato";
    console.log(`key down = ${event.key}`);
});
document.addEventListener("keyup", event => {
    myBox.textContent = "😊";
    myBox.style.backgroundColor = "lightgreen";
    console.log(`key up = ${event.key}`);
}) */
// --- mover por aí
/* document.addEventListener("keydown", event => {
    if(event.key.startsWith("Arrow")){
        event.preventDefault();
        switch(event.key){
            case "ArrowUp":
                y -= moveAround;
                break;
            case "ArrowDown":
                y += moveAround;
                break;
            case "ArrowLeft":
                x -= moveAround;
                break;
            case "ArrowRight":
                x += moveAround;
                break;
        }
        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
    }
}); */

//-- lição 65: hide/show html
/* const myButton = document.getElementById("myBtn65");
const myImg = document.getElementById("myImg");
// se usar visibility, em vez de display, o espaço da imagem continuará lá

myButton.addEventListener("click", event => {
    if(myImg.style.display === "none"){
        myImg.style.display = "block";
        myButton.textContent = "Hide";
    }
    else{
        myImg.style.display = "none";
        myButton.textContent = "Show";
    }
}) */

//-- lição 66: NodeList
// NodeList = uma coleção estática de elementos HTML por (id, classe, elemento)
// podem ser criados ao usar querySelectorAll
// similar a um array, mas sem (map, filter, reduce)
// nodelist não vão atualizar para mudanças automaticamente
// let buttons = document.querySelectorAll(".myButtons66");
// ADD NEW ELEMENT
/* const newButton = document.createElement("button"); // STEP 1
newButton.textContent = "Button 5"; // STEP 2
newButton.classList = "myButtons66"; 
document.body.appendChild(newButton); // STEP 3
buttons = document.querySelectorAll(".myButtons66");
console.log(buttons); */
// CLICK event listener
/* buttons.forEach(element => {
    element.addEventListener("click", event => {
        event.target.style.backgroundColor = "tomato";
    });
}); */
// MOUSEOVER + MOUSEOUT event listener
/* buttons.forEach(element => {
    element.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "hsl(303, 31%, 50%)";
    });
});
buttons.forEach(element => {
    element.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "lightgreen";
    });
}); */
// ADD HTML/CSS PROPERTIES
/* buttons.forEach(element => {
    element.style.backgroundColor = "lightgreen";
    element.textContent += "😘";
 }); */
 // REMOVER AO CLICAR
 /* buttons.forEach(element => {
    element.addEventListener("click", event =>{
        event.target.remove();
    })
 }) */

 //-- lição 67: classList
 // classList = element property usado para interagir
 // com a lista de classes de um elemento (CSS classes)
 // te permite fazer código reusável para muitos elementos em sua página
 // add()
 // remove()
 // toggle(Remove if present, Add if not)
 // replace(oldClass, newClass)
 // contains()
 // --- NORMAL
// const myButton = document.getElementById("myButton67");
// const myH1 = document.getElementById("myH167");
// myButton.classList.add("enabled");
// myButton.remove("enabled");
/* myButton.addEventListener("mouseover", event => {
    event.target.classList.toggle("hover");
})
myButton.addEventListener("mouseout", event => {
    event.target.classList.toggle("hover");
}) */
/* myH1.classList.add("enabled");
myButton.classList.add("enabled");
myButton.addEventListener("click", event => {
    if(event.target.classList.contains("disabled")){
        event.target.textContent += "🤔";
    }
    else{
        event.target.classList.replace("enabled", "disabled");
    }
}); */
// --- CHALLENGE ROUND
/* let buttons = document.querySelectorAll(".myButtons67");
buttons.forEach(button => {
    button.classList.add("enabled");
});
buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.classList.toggle("hover");
    })
});
buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.classList.toggle("hover");
    })
});
buttons.forEach(button => {
    button.addEventListener("click", event => {

        if(event.target.classList.contains("disabled")){
            event.target.textContent += "😜";
        }
        else{
            event.target.classList.replace("enabled", "disabled");
        }
    })
}); */

//-- lição 68: rock paper and scissors - outro arquivo
// outro arquivo

//-- lição 69: image slider - outro arquivo
// outro arquivo

//-- lição 70: callback hell
// callback hell = situação em que callbacks estão nested
// em outros callbacks a um ponto em que o código é difícil de ler.
// padrão antigo de lidar com funções asíncronas
// use promises + sync/await para evitar o callback hell
/* function task1(callback){
    setTimeout(() => {
        console.log("Task 1 complete!");
        callback();
    },2000)
};
function task2(callback){
    setTimeout(() => {
        console.log("Task 2 complete!");
        callback();
    },1000)
};
function task3(callback){
    setTimeout(() => {
        console.log("Task 3 complete!");
        callback();
    },3000)
};
function task4(callback){
    setTimeout(() => {
        console.log("Task 4 complete!");
        callback();
    },1500)
};
task1(() => {
    task2(() => {
        task3(() => {
            task4(() => console.log("All tasks complete!"));
        })
    });
}); */ // depois de 4 níveis, é um callback hell.
// console.log("All tasks completed!")

//-- lição 71: promises
// promise = um objeto que manuseia operações asíncronas
// pode amarrar um promise object em volta de um código asíncrono
// "eu prometo retornar um valor"
// PENDING -> RESOLVED or REJECTED
// new Promise((resolve, reject) => {asynchronous code})
// -- FAÇA ISSO EM ORDEM:
// 1. CAMINHAR COM O CACHORRO
// 2. LIMPAR A COZINHA
// 3. BOTAR O LIXO PRA FORA
/* function walkDog(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogwalked = true;
            if(dogwalked){
                resolve("Você passeia com o cachorro.");
            }
            else{
                reject("Você não passeou com o cachorro.");
            }
        }, 1500)    
    })
}
function cleanKitchen(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenCleaned = true;
            if(kitchenCleaned){
                resolve("Você limpou a cozinha.");
            }
            else{
                reject("Você NÃO limpou a cozinha.");
            }
        }, 2500)
    })
}
function takeOutTrash(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashTakenOut = true;
            if(trashTakenOut){
                resolve("Você botou o lixo pra fora.");
            }
            else{
                reject("Você não botou o lixo para fora.");
            }
        }, 500)
    })
} */
/* walkDog(() => {
    cleanKitchen(() => {
        takeOutTrash(() => {
            console.log("Você terminou tudo que há para ser feito.");
        })
    });
}); */ // callback hell
/* walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeOutTrash()})
         .then(value => {console.log(value); console.log("Tudo foi feito.")})
         .catch(error => console.error(error));
console.log("Vá trabalhar!"); */

//-- lição 72: async/await
// async = faz uma função retornar uma promessa
// await = faz uma função async esperar uma promesa
// te permite escrever código asíncrono de uma maneira síncrona
// async não precisa de resolve ou reject
// tudo depois do await é colocado num "event queue"
/* function walkDog(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = true;
            if(dogWalked){
                resolve("Você passeia com o cachorro.");
            }
            else{
                reject("Você não passeou com o cachorro.");
            }
        }, 1500);    
    });
}
function cleanKitchen(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenCleaned = true;
            if(kitchenCleaned){
                resolve("Você limpou a cozinha.");
            }
            else{
                reject("Você NÃO limpou a cozinha.");
            }
        }, 2500);
    });
}
function takeOutTrash(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashTakenOut = true;
            if(trashTakenOut){
                resolve("Você botou o lixo pra fora.");
            }
            else{
                reject("Você não botou o lixo para fora.");
            }
        }, 500);
    });
} 
async function doChores(){
    try{
        const walkDogResult = await walkDog();
        console.log(walkDogResult);
    
        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);
    
        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);
    
        console.log("Você fez todas as chores!");
    }
    catch(error){
        console.error(error);
    }
}
doChores(); */

//-- lição 73: json files
// JSON (JavaScript Object Notation) = data inter-change format
// usado para trocr data entre um servidor e uma aplicação web
// JSON files {key:value} OR [value1, value2, value3]
// JSON.stringify() = converte um objeto JS para uma string JSON;
// JSON.parse() = converte uma string JSON para um objeto JS;
/* const names = ["Spongebob", "Patrick", "Squidward", "Sandy"];
const person = {
    "name": "Spongebob",
    "age": 30,
    "isEmployed": true,
    "hobbies": ["Jellyfishing", "Karate", "Cooking"]
};
const people = [{
    "name": "Spongebob",
    "age": 30,
    "isEmployed": true
},
{
    "name": "Patrick",
    "age": 34,
    "isEmployed": false
},
{
    "name": "Squidward",
    "age": 50,
    "isEmployed": true
},
{
    "name": "Sandy",
    "age": 27,
    "isEmployed": false
}];
const jsonNames = `["Spongebob", "Patrick", "Squidward", "Sandy"]`;
const jsonPerson = `{
    "name": "Spongebob",
    "age": 30,
    "isEmployed": true,
    "hobbies": ["Jellyfishing", "Karate", "Cooking"]
}`;
const jsonPeople = `[{
    "name": "Spongebob",
    "age": 30,
    "isEmployed": true
},
{
    "name": "Patrick",
    "age": 34,
    "isEmployed": false
},
{
    "name": "Squidward",
    "age": 50,
    "isEmployed": true
},
{
    "name": "Sandy",
    "age": 27,
    "isEmployed": false
}]`; */
/* const jsonString = JSON.stringify(names);
const jsonString2 = JSON.stringify(person);
const jsonString3 = JSON.stringify(people);
const parsedData = JSON.parse(jsonNames);
const parsedData2 = JSON.parse(jsonPerson);
const parsedData3 = JSON.parse(jsonPeople); */
/* console.log(jsonString);
console.log(jsonString2);
console.log(jsonString3); */
/* console.log(parsedData);
console.log(parsedData2);
console.log(parsedData3); */
/* fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value.isEmployed)))
    .catch(error => console.error(error)); */

//-- lição 74: fetch
// fetch = função usada para fazer HTTP requests para dar fetch em recursos
// (JSON style data, imagens, arquivos)
// simplifica fetching de data asíncrona em javascript e é
// usado para interações com APIs para dar retrieve e mandar
// data asíncrona pela internet.
// fetch(url, {options}) // default é o get
/* fetch("https://pokeapi.co/api/v2/pokemon/gholdengo")
    .then(response => {
        if(!response.ok){
            throw new Error("Não achou o pokémon!");
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error(error)); */
/* async function pegarData(){
    try{
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if(!response.ok){
            throw new Error("Could not fetch resource");
        }
        const data = await response.json();
        const pokeSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");
        imgElement.src = pokeSprite;
        imgElement.style.display = "block";
    }
    catch(error){
        console.error(error)
    }
} */

//-- lição 75, final: weather program app - outro arquivo
// outro arquivo