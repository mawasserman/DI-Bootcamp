/**
 * resolvendo o exercicio 
 * 
 * 
 */

asyn function getUsers(url) {
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data; //retorna uma promisse 
    catch (error) {
        console.error(error);
    }   
}
}

module.exports = {
    getUsers,
}