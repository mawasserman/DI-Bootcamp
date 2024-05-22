/* LOOPS

no loop se faz
for(variable; condition; increment/decrement---- todas essas coisas são opcionais.. poderia ter um loop infinito com for(;;)){
    code to run
}

i ++ é a mesma coisa que i = i + 1
i -- é a mesma coisa que i = i - 1
i += 2 é a mesma coisa que i = i + 2
i -= 2,i *= 2, i /= 2 (tbm existem)

*/

// 🌟 Exercise 1
for (let i = 0; i <= 15; i++){
    if(i % 2 == 0){
        console.log(i + " is even"); // ao inves de + pode usar ,
    } else {
        console.log(i + " is odd");
    }
}

/*

FOR/IN LOOP

é um loop que roda em cima de um objeto
for(variable in object){
    code to run
}

FOR/OF LOOP

é um loop que roda em cima de um array

WHILE LOOP

importante sempre criar uma condição de parada! se não ele vai rodar infinitamente

DO/WHILE LOOP

é um loop que roda o código pelo menos uma vez antes de checar a condição, ou seja... só checa depois de rodar o código

BREAK STATEMENT

serve para parar o loop. se colocar um break dentro de um loop, ele para o loop depois de rodar só uma vez

CONTINUE STATEMENT

serve para pular uma iteração do loop


*/

// 🌟 Exercise 2 //NÃO CONSEGUI FAZER POR CAUSA DO SONO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let names = ["john", "sarah", 23, "Rudolf",34];
for ( i of names){
    if(typeof(names[i]) !== string
    ){}
}

/*
ES6



*/