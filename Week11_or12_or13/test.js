/**
 * intalamos knex e pg... eles, não eu...
 * 
 * knex é um query builder para node.js
 * ou seja, ele ajuda a fazer queries no banco de dados
 * 
 * pg é um driver para o postgresql
 * 
 * 
 *a gente vai require o knex no arquivo e criar uma constante com o knex
 * const knex = require('knex')
 * 
 * depois disso, a gente vai criar uma constante com as configurações do knex
 * 
 * const PGHOST = 'localhost' ou o link do banco de dados (no meu caso é o neon)
 * const PGDATABASE
 * const PGUSER
 * const PGPASSWORD
 * const PGPORT
 * 
 * const db = knex({
 * client: 'pg
 * connection: {
 * host: PGHOST,
 * database: PG
 * user: PGUSER,
 * password: PGPASSWORD,
 * port: PGPORT
 * ssl: {rejectUnauthorized: false} // se estiver usando o neon tem que colocar isso comentado.. nao pode ter isso... entendi isso ...
 * 
 * async function getVersion() {
 * try {
 * const version = await db.raw('SELECT version()')
 * console.log(version) // que é o resultado 
 * } catch (error) {
 * console.error(error.message)
 * }
 * }
 * 
 * pq a gente usa enviroments? pq a gente nao quer que as pessoas vejam nossas informações de banco de dados
 * 
 * .env é um arquivo que a gente cria na raiz do projeto e coloca as informações do banco de dados. pq? pq a gente nao quer que as pessoas vejam nossas informações de banco de dados sao informações sensíveis como senha, usuario, etc
 */