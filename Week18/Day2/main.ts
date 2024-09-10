// keeping my notes and commiting

//Cara... o Boniekey usa src e public de pasta... mas eu to vendo o Ziv usando src e build... qual a diferença de build e public?
// copilot: A diferença entre "build" e "public" está relacionada ao processo de desenvolvimento e implantação de um projeto.

// "Build" refere-se à etapa de compilação e empacotamento do código-fonte em um formato executável ou em um conjunto de arquivos otimizados para implantação. Durante o processo de build, o código é transformado em uma forma que pode ser executada pelo ambiente de execução, como um arquivo binário, um pacote de distribuição ou um conjunto de arquivos JavaScript, CSS e HTML.

// Por outro lado, "public" refere-se ao diretório ou pasta onde os arquivos estáticos do projeto são armazenados e disponibilizados para acesso público. Esses arquivos estáticos geralmente incluem recursos como imagens, arquivos CSS, arquivos JavaScript e outros ativos necessários para a execução da aplicação no navegador ou em outros ambientes.

// Em resumo, "build" é o processo de transformar o código-fonte em um formato executável, enquanto "public" é o local onde os arquivos estáticos são armazenados para serem acessados publicamente. O diretório "public" geralmente contém os resultados do processo de build, como os arquivos HTML, CSS e JavaScript otimizados para implantação.

//rest parameter... a gente pode passar um numero indefinido de argumentos para uma função 
 const addRest =(a: number, ...rest: number[]): number => {
     return a + rest.reduce((acc, val) => acc + val, 0);
 }
    console.log(addRest(1, 2, 3, 4, 5)); //15

//never type... a gente pode especificar que uma função nunca vai retornar um valor
const error = (message: string): never => {
    throw new Error(message);
}

//function overload... a gente pode especificar o tipo de retorno de uma função
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
    return a + b;
}
console.log(add(1, 2)); //3
console.log(add('a', 'b')); //ab

//type assertion or casting... a gente pode especificar o tipo de uma variavel
// as or < > 

//aliases... a gente pode criar um alias para um tipo
type Name = string;
type Age = number;
type Person = {
    name: Name;
    age: Age;
}

let b = a as Name;

// < > not used in react... it's used in typescript... it's not recommended to use < > in react... tsx 
let d = <Name> 'a';

// dom elements... a gente pode especificar o tipo de elemento do dom
let img = document.querySelector('img') as HTMLImageElement;
// pro typescript saber que esse elemento realmente existe no documento... existe pra input tbm... HTMLInputElement