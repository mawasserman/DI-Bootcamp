/**a gente vai continuar usando o arquivo da week11 day5 
 * 
 * 
 * passso a passo do que a gente fez
 * - criou package.json
 * - instalou o express
 * - criou o server.js
 * - criou sei la com GET request (ainda nao aprendemos post)
 * - criou routes e sei la o que
 * - crud api = create, read, update, delete
 * - para create, usamos POST
 * - para read, usamos GET
 * - para update, usamos PUT
 * - para delete, usamos DELETE
 * 
 * esse é o standard de APIs, não é obrigatorio, mas comum...
 * 
 * query - é o que a gente passa na url... get all products with query.. 
 * 
 * Vamos agora aprender o create / post method
 * app.post('/api/products', (req, res) => {
 * res.send("ok from post");})
 * 
 * postman.. nao sei o que faz, mas parece importante.. 
 * postman é uma ferramenta para testar APIs
 * 
 * a gente colocou o link do localhost:5001/api/products no postman com a opção GET e deu send... no meu caso deu erro, mas pro resto das pessoas apareceu o array de produtos
 * 
 * pode testar tbm cos /api/search?name=ip e vai aparecer o produto com o nome ip
 * 
 * se quiser pode mudar o metodo....
 * 
 * se mudar pro post tem que aparecer a mensagem "ok from post"
 * 
 * fetxh(url, {method: 'POST'
 * headers: {
 * 'Content-Type': 'application/json')
 * 
 * quando instala o postman tem que instalar tbm um agent... 
 * 
 * o ziv agora ta no node adding uma npm bodyparser
 * 
 * no caso, o express 4 tem o bodyparser embutido, mas a partir do express 5, tem que instalar o bodyparser
 * mas ja que a gente instalou o bodyparser, tem que importar ele no server.js
 * 
 * app.use(express.urlencoded({extended: false}))
 * app.use(express.json())
 * 
 * bodyparse é uma biblioteca que ajuda a pegar os dados do body do request (http type)
 * console.log(req.body) 
 * 
 * como conectar o backend com o frontend:
 * 
 * uma maneira é usar o fetch e manipular o DOM
 * outra maneira é usar o axios
 * 
 * 
 * 
*/