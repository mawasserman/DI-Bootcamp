// instructor led 19 05 2024

/*
SWITCH STATEMENTS

São usados para comparar valores diferentes de uma >>variável<< e executar um bloco de código dependendo do valor.
É uma condicional mais limpa e mais fácil de ler do que uma série de if/else statements.

desvantagem: não é possível fazer comparações complexas
pode acabar ficando longo e confuso


SHORT-CIRCUITING OPERATORS

|| - OR 
zero, string vazia '' e null são considerados false, então se o primeiro valor for false, ele vai retornar o segundo valor... se o primeiro valor for true, ele vai retornar o primeiro valor

&& - AND
se o primeiro valor for true, ele vai retornar o segundo valor... se o primeiro valor for false, ele vai retornar o primeiro valor
não entendi, explica copilot

IF...ELSE STATEMENTS
pode ser bem bagunçado e confuso, principalmente quando temos muitas condições.
return; da o resultado e para a execução do código


*/


/*
Conditionals

Exercise 1
Make a keyless car!

This car will only let you drive if you are over 18. Make it do the following:

Using prompt() and alert(), ask a user for their age.*/
let age = prompt("How old are you?")

// IF they say they are below 18, respond with: "Sorry, you are too young to drive this car. Powering off
if (age < 18){
    alert("Sorry, you are too young to drive this car. Poweroff");
}

// IF they say they are 18, respond with: "Congratulations on your first year of driving. Enjoy the ride!
else if (age == 18){
   alert("Congratulations on your first year of driving. Enjoy the ride!"); 
}

// IF they say they are over 18, respond with: "Powering On. Enjoy the ride!"
else {
    alert("Powering On. Enjoy the ride!");
}
34

// Exercise 2
// Write as comments the steps of the resolution of this piece of code

// Guess what will be the result before checking it
let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );
    break;
  case 4:
    alert( 'Exactly!' ); // This one
    break;
  case 5:
    alert( 'Too large' );
    break;
  default:
    alert( "I don't know such values" );
}

// Exercise 3
// Write as comments the steps of the resolution of this piece of code

// Guess what will be the result before checking it
let a = 2 + 2;

switch (a) {
  case 4:
    alert('Right!'); // This
    break;

  case 3: // (*) grouped two cases
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default:
    alert('The result is strange. Really.');
}

// Introduction to objects

/* Objects são usados para armazenar coleções de dados e mais complexos. São similares a arrays, mas ao invés de usar índices para acessar os valores, usamos chaves.
pode ser qualquer tipo de dado, inclusive arrays e outros objetos
properties(valores) and methods (esse ultimo é uma função)

acessar propriedades de um objeto:
nomeDoObjeto.nomeDaPropriedade ou nomeDoObjeto["nomeDaPropriedade"]

um objeto é mutavel, a não ser que seja declarado como const


*/


// Exercise 1
// Create a stuctured html file linked to a JS file

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.
const user = {
    username: "Charlinho",
    password: "Batata"
};

// 2. Create an array which contains the object you have made above and name the array "database".
const database = [user]
console.log(database)
// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
const newsfeed = [
    {
        username: "Charlinho",
        timeline: "Eu gosto mais de batata e gosto mais de estudar"
    },
    {
        username: "Boça",
        timeline: "Mêo"
    },
    {
        username: "Detonator",
        timeline: "Mostra pra eles Bloodhammer"
    }
]
console.log(newsfeed)

/*
se a gente quiser trocar o usuario, se for um objeto dentro de um array, a gente pode fazer assim:
database[0].username = "NovoNome"
mas sei lá o que o Pete mostrou que funciona ou não funciona, acho que se o usuario for uma string, não funciona... mas se for outra constante, funciona
*/

/*

DEBUGGING
1- console.log()

2- debugger, da para rodar ele dentro do browser, ele para a execução do código e mostra o que está acontecendo

3- logging, a gente loga o codigo online e ele mostra o que está acontecendo


RegEx:
regular expressions, são padrões usados para encontrar determinados padrões de caracteres em strings
--- o Dovid até hoje usa cheat sheet para isso e le a documaentação toda vez que precisa usar

*/