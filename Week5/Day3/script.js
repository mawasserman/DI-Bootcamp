/*
Aula - 02/06/2024

Correção do exercício de ontem, tem um treco especial de form.. document.forms[0].. pesquisar isso depois...

Search Engine Optimization (SEO) - Otimização para motores de busca

-video : learn SEO in just 5 minutes a day -Neil Patel

-SEO é um conjunto de técnicas que tem como objetivo melhorar o posicionamento de um site em motores de busca como o Google, Bing, Yahoo, etc.

-SEO é dividido em duas partes:
    -On-Page SEO
    -Off-Page SEO

-On-Page SEO: São as técnicas que você aplica dentro do seu site para melhorar o posicionamento dele nos motores de busca. Ex: Títulos, descrições, palavras-chave, etc.

-Off-Page SEO: São as técnicas que você aplica fora do seu site para melhorar o posicionamento dele nos motores de busca. Ex: Backlinks, compartilhamento em redes sociais, etc.

-SEO é uma área muito ampla e complexa, mas é muito importante para quem quer ter um site bem posicionado nos motores de busca.

If you have a website register here: https://search.google.com/search-console
it's free

SETTIMEOUT

-É uma função que executa outra função após um determinado tempo.
É medida em milissegundos, 1 segundo=1000 milissegundos.

*/
//Exercise 1

const heading1=document.querySelector('h1');
heading1.style.display='none';
function showH1 (){
    heading1.style.display='block';
}

setTimeout(showH1, 5000);

//Exercise 2

