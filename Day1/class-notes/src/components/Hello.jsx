/**
 * criamos a pasta components dentro da src e criamos um arquivo Hello.jsx
 * 
 * props é um objeto que tem todas as propriedades que a gente passa para o componente
 */

const Hello = (props) => {
    const {name} = props;
    return (
        <div> 
            
            <h1>{name}</h1>
            <h2>Sub Hello</h2>
        </div>
    )
}
/* se colocar dentro dois h1, ele vai dar erro pq o react nao aceita dois elementos um do lado do outro, tem que colocar dentro do container.. que nesse caso vai se o div */

export default Hello;

/**
 * vai no App.js e importa o Hello como import Hello from './components/Hello'
 * 
 * no caso, se a gente export todos os elementos dentro de divs vai ficar muito grande, então a gente pode fazer em uma tag vazia <React.Fragment> </React.Fragment> ou <></>
 * Só de não ter a div, o react já vai ficar muito mais leve
 * 
 */
