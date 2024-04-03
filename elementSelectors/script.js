//-- lição 60: element selectors
// element selectors = métodos usados para manipular elementos html
// eles o permitem selecionar um ou múltiplos elementos html
// do DOM (document object model)

// 1. document.getElementByID() // ELEMENT OR NULL
// 2. document.getElementsClassName() // HTML COLLECTION
// 3. document.getElementsByTagName() // HTML COLLECTION
// 4. document.querySelector() // ELEMENT OR NULL
// 5. document.querySelectorAll() // NODELIST

// 1:
/* const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";
myHeading.style.maxWidth = "60%"; */

// 2:
// HTML collections não tem um forEach method, precisam de typecast
// mas se pode dar typecast nele em array
//const fruits = document.getElementsByClassName("fruits");
/* for(let fruit of fruits){
    fruit.style.backgroundColor = "yellow";
} */
/* Array.from(fruits).forEach(fruit => {fruit.style.backgroundColor = "yellow"});
console.log(fruits); */

// 3:
/* const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li"); */
// h4Elements[0].style.backgroundColor = "yellow";
/* for(let h4Element of h4Elements){
    h4Element.style.backgroundColor = "yellow";
}
for(let liElement of liElements){
    liElement.style.backgroundColor = "lightgreen"
} */
/* Array.from(h4Elements).forEach(h4Element => {
    h4Element.style.backgroundColor = "yellow"
});
Array.from(liElements).forEach(liElement => {
    liElement.style.backgroundColor = "lightgreen"
}); */
// console.log(h4Elements) 

// 4:
// query só retorna um elemento, o primeiro
// pode selecionar uma classe ou tag
/* const element = document.querySelector(".fruits");
element.style.backgroundColor = "yellow"; */
// nesse caso, retorna Apple

// 5:
// seleciona todos mas apenas com index, nodelist
// nodelist tem forEach method
// const fruits = document.querySelectorAll(".fruits");
// fruits[2].style.backgroundColor = "yellow";
/* fruits.forEach(fruit =>{
    fruit.style.backgroundColor = "yellow";
}); */
// console.log(fruits);