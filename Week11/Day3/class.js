/**
 * 
 * PARA USAR O MÓDULO EM OUTRO ARQUIVO
 * common js
 * const {greet} = require('./greeting.js');
 * 
 * ES6	
 * import {greet} from './greeting.js';
 * 
 * 
 * da pra usar o module.exports sem ser dentro do objeto, mas aí tem que usar o require comum e não o destructuring .... O Ziv usa só o dentro do objeto pq se ele quiser colocar mais coisas depois ele não precisa mudar o require... no caso o require com o destructuring usa os colchetes em volta do nome da função que ele quer importar
 * 
 * o "menu" / "hearth" do node.js aplication é o package.json
 * 
 * no node, abre o file app.js
 * npm init 
 * preenche as infos
 * package name: (daily-challenge)
 * version: (1.0.0)
 * description:
 * entry point: (app.js)
 * test command:
 * git repository:
 * keywords: es6 module system import export
 * author: ziv
 * license: (ISC)
 * 
 * <ENTER>, confirma com yes e vai criar o package.json automaticamente
 * 
 * NÃO PODE ESCREVER COMENTARIOS DENTRO DO PACKAGE.JSON
 * 
 * 
 * para cada projeto a gente vai criar um package.json
 * 
 * USANDO ES6
 * 
 * vai add export antes da função, se tiver mais uma função, vai add export antes de cada uma e assim vai...
 * 
 * export const greet = () => {
 *  return 'Hello';
 * };
 * export const hello = () => {
 * return 'World';
 * }
 * 
 * para importar vai usar o 
 * import {greet,hello} from './greeting.js';
 * vai importar as duas funções que criei antes juntas
 * 
 * export default greet;
 * vai exportar a função como default, ou seja, não precisa usar o destructuring no import... vai exportar só uma .. não vai precisar usar {} no import
 * o Ziv exportou o greet, o hello e depois ele exportou o greet como default.. se eu colocar import algumacoisaqualquer from './greeting.js'; ele vai importar o greet pq o greet é o default
 * 
 * para adicionar os npm modules vai clicar no terminal e digitar npm install e o nome da biblioteca... ou só npm i e o nome da biblioteca
 * ai vai aparecer no package.json dentro de dependencies
 * para desistalar é só digitar npm uninstall e o nome da biblioteca... ou un só
 * 
 * se tentar deletar direto do package.json, o node não vai saber que a biblioteca foi deletada e vai dar erro... vai continuar aparecendo no node_modules
 * 
 * ele instalou o slugify que é uma biblioteca que transforma o texto em url
 * 
 * não entendi o que é package-lock.json. ele disse que é um arquivo que guarda as versões das bibliotecas que foram instaladas... ele disse que é bom não mexer nele
 * 
 * .gitignore é um arquivo que guarda os arquivos que não vão ser enviados pro git
 * colocaria dentro por ex. /node_modules
//  * se colocar antes **/node_modules ele vai ignorar todos os node_modules
 /**
  * 
  * depois de instalar o slugify, eu posso importar ele no arquivo que eu quiser:
  * import slugify from 'slugify';
  * 
  * para usar o slugify eu posso fazer:
  * slugify('Hello World', '-'); --- vai escrever hello-world.. se eu colocar '' ele vai escrever helloworld
  * (para ver teria que colocar o console.log)
  * 
  * express é um framework que ajuda a criar servidores 
  * 
  * vamos fazer um exercicio agora na nova pasta que criamos
  * 
  * /TODOS OS IMPORTS TEM QUE ESTAR NO TOPO DO ARQUIVO
  * 
  * ler sobre os core modules do node.js
  * que são os modulos que já vem com o node.js, como o fs, http, path, etc
  * não precisa instalar, só importar
  * 
  * 
  */