/**
 * TIRANDO DÚVIDAS
 * 
 * EX XP....
 *  function displayStudentInfo(objUser) {
 * //destructuring 
 * const {last, first} = objeUser;
 * console.log(first, last);
 * 
 * displayStudentInfo({first: "Elie", last: "Schoppik"});
 * 
 * da pra fazer o mesmo em uma array, mas usa os brackets
 * 
 * ex. 3
 * 
 * da pra usar forEach e map nesse exercicio... depois em alguma parte ele mandou um destructuring
 * 
 * muito importante saber classes pq vamos usar em node.js e react
 * 
 * AULA COMEÇA AGORA!!!!!
 * 
 * DNS - Domain Name System - ele sabe pra que servidor ele tem que ir pelo endereço do site
 * o nome é convertido em IP e o DNS sabe pra onde tem que ir
 * 
 * to entendendo nada de get method
 * me explica o que é o get method - é um método que pega informações de um servidor e retorna para o cliente - é um método de requisição de dados 
 * 
 * get vai parar lá do lado do http ... o sevidor vai pegar o que ele pediu e vai retornar 
 * 
 * o que é um request? é uma requisição de dados
 * 
 *  Query string - é uma string que é passada na URL
 * 
 * form com get request, se eu colocar meu login e senha na URL, ele vai aparecer na URL
 * e quando a gente tá mandando sensitivy data a gente não quer que va pra url pq pode ser hackeado facilmente... ao inves disso a gente usa o post method
 * 
 * o post method é um método de requisição de dados que não aparece na URL... aparece no payload do form data.. 
 * a gente bota o que a gente quer mandar no body do request(dentro do html) ... está escondido`
 * 
 * SWITCH 
 * 
 * JSON - JavaScript Object Notation - é um formato de dados que é fácil de ler e escrever para humanos e fácil de ler e escrever para máquinas
 * 
 * let str = '{"name": "John", "age": 30, "city": "New York"}';
 * 
 * let post = JSON.parse(str);
 * console.log(post);
 * 
 * para functionar tem que ser um JSON válido, ou seja, tem que ter aspas duplas nos atributos e valores (não pode ter aspas simples e nem ser em só um deles)
 * 
 * let str2 = "bla bla bla"; NÃO É VALIDO para funcionar tem que ser um JSON válido
 * >>>> let str2 = {"a": "bla bla bla"}; <<<< É VALIDO
 * 
 * JSON.stringify() - transforma um objeto em uma string JSON
 * 
 * let jsonUsers = JSON.stringify(users, undefined, 2); // o primeiro é obrigatorio, o segundo é um filtro e o terceiro é a quantidade de espaços
 * 
 * para garantir que o json user existe vc coloca pra return undifined
 * 
 * HANDLE EXCEPITONS
 * 
 * try {
 * A;
 * } catch (e) {
 * console.error(e.stack); // pra ver informações do erro... podderia ser console.log
 * 
 * }
 * 
 */