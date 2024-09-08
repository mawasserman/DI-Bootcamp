"use strict";
// tentando aprender sozinha
// aula do Ziv 
let username = 'john';
username = 'dan';
let y = 34;
y = 1;
// mais simples e menos erros...  o ziv falou pra gente criar duas pastas... build com o html e css e src com o ts
// para criar um arquivo de configuração do typescript, usamos o comando tsc --init
//tem que mudar no tsconfig.json o "outDir": "./build" e "rootDir": "./src" ... vai estar na lista... a gente vai tirar o comentário e colocar o caminho
// aí a gente  pra dentro do src e vai rodar o comando tsc + nome do arquivo.. no meu caso... main.ts... se for pra ver a gente colca tsc -w (watch) e ele vai ficar rodando e atualizando o arquivo
//noEmitOnError: true... se tiver erro ele não vai compilar... vai mostrar o erro ... se for false ele vai compilar mesmo com erro e vai mostrar o erro no console .. bem interessante
//a gente pode decidir o tipo de variavel assim:
let x = 3;
let k = 'hello';
let z = true;
// type any.... não é recomendado... é melhor especificar o tipo da variavel
let a = 3;
// union type... a gente pode ter mais de um tipo de variavel
let b = 3;
// array... a gente pode especificar o tipo de array
let c = [1, 2, 3];
let d = ['a', 'b', 'c'];
let e = [1, 'a', 2, 'b'];
let f = [1, 'a', true];
//type tuple... não tem no javascript... é um array com um numero fixo de elementos
let g = [1, 'a'];
// type object... a gente pode especificar o tipo de objeto
let h = { name: 'john', age: 34 };
let myObj = { name: 'john', age: 34 };
// se quiser add ao objeto... a gente pode fazer assim:
let myObj2 = { name: 'john', age: 34 };
myObj2.adult = true; // a gente pode add o adult no objeto pq a gente colocou o ? no adult... se não tivesse o ? a gente não poderia add o adult
// type function... a gente pode especificar o tipo de função
let i = (x, y) => x + y;
// a gente pode fazer assim tbm:
function sum(x, y) {
    return x + y;
}
// a gente pode fazer assim tbm:
let sum2 = function (x, y) {
    return x + y;
};
let j = { name: 'john', age: 34 };
// isso serve pra gente não ter que ficar repetindo o tipo de objeto toda vez que a gente for criar um objeto
// type enum.. tbm não tem no javascript... a gente pode criar um tipo de enumeração
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let myColor = Color.Red;
// a gente pode mudar o valor do enum... a gente pode fazer assim:
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 3] = "Blue";
})(Color2 || (Color2 = {}));
let myColor2 = Color2.Red;
// não entendi muito bem... o Ziv está fazendo uma bagunça no código...
//status something
var Status;
(function (Status) {
    Status["Pending"] = "pending";
    Status["Approved"] = "approved";
    Status["Rejected"] = "rejected";
})(Status || (Status = {}));
//fetchstatus = 'something'... a gente pode fazer assim:
let fetchStatus = Status.Pending;
