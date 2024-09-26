/**
 * jwt.io
 * 
 * JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object.
 * 
 * encoded ... primeira parte do encoded é o header que é o tipo de token e o algoritmo de criptografia
 * mas a segunda é o payload que é o que a gente quer mandar...NÃO PODE COLOCAR SENSITIVE DATA  pq ele não é criptografado
 * a terceira parte é a assinatura que é a chave secreta.. é uma senha... a pode verificar pq a gente sabe o codigo.. mas não pode decodificar pq não tem a chave secreta
 * 
 * npm inint
 * npm i jsonwebtoken
 * 
 * ziv criou um test-token.js
 * 
 * cont jwt = require('jsonwebtoken')
 * 
 * o jwt tem um metodo chamado jwt.sign -> ele recebe 2 parametros: o payload e a chave secreta
 * payload é um objeto que a gente quer mandar que é um objeto - {}
 * secret code que é uma string
 * o terceiro parametro é um objeto que a gente pode passar o tempo de expiração {expiresIn: '1h'}, pode ser horas, milicsegundos, dias, semanas, meses, anos
 * ms, d, h, m, s
 * 
 * jqt.sign(
 *      {userid:101, name: 'ziv', email:'ziv@gmail.com'}, pode colocar mais se quiser, mas o ziv disse pra nao colocar a historia do seu database aqui... e nenhum dado sensivel
 *     'secretcode', vai ser a minha senha... 
 *    {expiresIn: '1h'} 
 * );
 * 
 * se der console.log(token) ele vai gerar um token, mas ele é um token que a gente não consegue ler pq ele é criptografado vai ter que ir no jwt.io para decodificar.. mas nao vai conseguir pq não tem a chave secreta... mas se a gente colocar a chave secreta ele vai conseguir decodificar
 * 
 * const myToken = "todo o token que a gente gerou no jwt.sign"
 * mas a gente não pode colocar um token que já expirou pq ele vai dar erro... por exemplo, o ziv colocou que o token ia expirar em 60segundos... então se a gente tentar decodificar ele depois de 60segundos ele vai dar erro
 * 
 * jwt.verify(
 * myToken, 
 * 'secretcode', 
 * (err, data) => {
 *  if(err){
 *      console.log(err.message);
 *  }
 * console.log(decoded); vai dar o objeto que a gente mandou no jwt.sign...
 * }); 
 * 
 * ao inves de usar o myToken a gente pode usar o token que a gente gerou como const token..
 * 
 * jwt.verify(token, 'secret', (err, decoded) => { === o que a gente fez acima
 * 
 *  node test-token.js
 * vai rodar o arquivo e vai gerar o token e vai decodificar o token.. ou vai dar xabu e console.log(err.message)
 * 
 * AGORA A GENTE TA NO NEON.. CRIANDO TABLE ETC
 * 
 * create table authusers (
  id serial not null primary key,
  email varchar(255) not null unique,
  password varchar(500) not null ,
  token varchar(500) 
)
 * 
 * 26/09/2024
 * 
 * no postman a gente vai fazer um post para criar um usuario
 * o ziv criou um arquivo chamado create-user.js
 * depois a gente vai fazer um post para fazer o login
 * o ziv criou um arquivo chamado login.js
 * e depois a gente vai fazer um get para pegar os dados do usuario
 * o ziv criou um arquivo chamado get-user.js
 * e depois a gente vai fazer um put para atualizar os dados do usuario
 * o ziv criou um arquivo chamado update-user.js 
 * e depois a gente vai fazer um delete para deletar o usuario
 * o ziv criou um arquivo chamado delete-user.js
 * ( isso tudo ai em cima quem escreveu foi o copilot... agora sim que eu vou começar a anotar)
 * 
 * anotando agora... ultima vez ele ensinou sobre cookies e sobre o token... e falou que agora a gente ta trabalhando com um token
 * 
 * 
 * 
 * 
 * */