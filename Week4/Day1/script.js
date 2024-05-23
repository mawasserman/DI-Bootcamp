/*
WEEK4 DAY1

correcao do exercicio.. 
1nao era para usar coisas que criariam uma array diferente... refazer
2no sufixo colocar st, nd, th em uma array e usar um switch
3 to perdida, mas ele ta falando alguma coisa que eu esqueci agora pq eu to ouvindo a duvida do principe encantado aqui
ksenia usou um do{} / while {} loop... eu sei o que eh um while loop mas nao sei o que eh um do loop... pesquisar pamonha

como eu coloco o console no vc code?? eu sei que 'e com node mas nao lembro como

4  usar key e values tbm eh bem bacana e mais simples...
metodo array.repeat(x)... vai repetir a array... mas poderia ser string... "* ".repeat(5) vai dar * * * * * * (6 estrelas ou 5?)

foto do google meet da sarah eh do corcovado?

--------------------- Aula

SCOPE

exemplo do Dovid... consologou 3  3  3... loucura
eh a diferenca do var e do let.. no caso do codigo dele ele usou var.
function scoped - var - redeclaration allowed...
block scoped - let - redeclaration not allowed IN THE SAME SCOPE...

se usase let no exemplo dele teria 0 1 2... 

eu to tendo dificuldade em entender o que eh um scope....

FUNCTIONS

return -> nao necessariamente vai ter... ele vai cobrir depois

parametros -> pode ser mais de um e separaos por uma virgula.. soh funcionam como variaveis locais!!
se vc nao colocar argument (que seria o que entraria no lugar do parametro) vai dar undefined ao menos que vc coloque um valor default... ai pode colocar o parametro=valorDefault
usar let dentro da funcao so pode usar dentro da funcao....acho que ele colocou o var e tbm deu errado pq eh function scoped..

*/

//EXERCISE 1

function(myAge){
    console.log(`The age of my mom is ${myAge*2} and the age of my dad is ${(myAge*2*1.2)}`)
}


// resolucao do Daniil
// function family (myAge) {
//     console.log(`My mum is ${myAge * 2}, and my dad is ${myAge * 2 * 1.2}.`)
// }

// family(23)

/*

RETURN STATMENS

nao saquei muito isso daqui nao... grande parte dar minhas anotacoes sou eu nao entendendo as coisas

*/

//EXERCISE 2

function exercDois (myAgee){
    let myMom = myAgee*2;
    return myMom;
}

exercDois(34);

/*

funcao tbm pode ser um value de um key de objeto... eu que escrevi isso, espero entender isso no futuro...
dentro do objeto a funcao eh chamado de metodo... 
se colocar [] e ver no console.log do google aparecem varias funcoes/metodos... tipo indexOf, forEach etc...

return key significa que vai retornar alguma coisa para a variavel.... const aMinhaVariavel = minhaFuncao();
vai rodar a funcao e o resultado retornado vai virar o valor daquela variavel
no caso ele colocou "return aMinhaVariavel;" se colocar soh return vai voltar undefined pq ta retornando nada???


*/