/*
ADV OBJECTS AND CLASSES
 */

let user = {
    name: "John",
    email: "john@gmai.com",	
    age: 25
};

console.log(user.name); // John
console.log(user["email"]); 

for (let x in user){ // unica maneira de usar um for loop no objeto é usando o for >>IN<<
    console.log(x);
    console.log(user[x]);
}

/*
OBJECT METHODS

OBJECT.KEYS

OBJECT.VALUES

OBJECT.ENTRIES

vai converter o objeto em um array, onde o primeiro valor é a chave e o segundo é o valor
 */

const keys = Object.keys(user);
console.log(keys); // ["name", "email", "age"] que são as chaves do objeto	... converte o objeto em um array

keys.forEach(item => console.log(item)); // vai printar as chaves do objeto, mas individualmente, nao como um array igual o de cima

const values = Object.values(user);
console.log(values); // ["John", "john@gmail.com", 25] ... converte o objeto em um array tbm.. acho que todos eles fazem isso

for(let i = 0; i < values.length; i++){
    console.log(values[i]);
} // vai printar os valores do objeto, mas individualmente, nao como um array igual o de cima

const entries = Object.entries(user);
console.log(entries); // [["name", "John"], ["email", "john@gmail.com"], ["age", 25]] ... faz arrays dentro de um array... key+value em uma array e todas as arrays dentro de uma array maior

entries.forEach(([key, value]) => { 
    // const [key,value] = item; // essa parte seria opcional se colocasse o item no lugar do [key, value] como parametro
    console.log(key, value)
}); // vai printar as arrays dentro da array de key+value, mas nao dentro de uma array maior como o de cima

/*

convertendo a array de volta para um objeto

*/

let obj = Object.fromEntries(entries);
console.log(obj); // {name: "John", email: "...", age: 25} ... converte a array de volta para um objeto

/* object methods */
let student = {
    name: "John",
    email: "erfewr",
    age: 25,
    x: function(){ //isso é chamado de object method! é uma funcao dentro de um objeto... pode fazer qualquer tipo de method dentro de um objeto
        console.log("Hello");
    }
};

student.x(); // Hello

/**
 * ele ensinou a fazer deep clone de um objeto
 * mas eu nao entendi muito bem...
 */

/**
 SPREADING IN OBJECTS
 */

let user5 = {...user1, age:23}; // vai copiar o objeto user1 e mudar a idade para 23
console.log(user5);

let user6 = {...user1, ...user2}; // vai copiar os dois objetos e juntar em um só

/*
this keyword

vai referir ao main object of the browser... vai ser o global element... no caso o window / a janela do browser
    */
console.log(this); // vai printar o window
console.log(this.document); // vai printar o documento do window... acho que é o mesmo que o de cima, mas esse é mais especifico/preciso 

let obj1 = {
    name: 'anne',
    getName: function(){
        return this.name; //se eu não coloco o this, ele vai printar undefined. tem que colocar this pra ele saber que é o name DO OBJETO! THIS object.
    }
};

console.log(obj1.getName()); // vai printar anne