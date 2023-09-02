import style from './home.module.css'
// Importando Componentes
import { Header } from '../../shared/components/layout/Header/Header'


export const Home = () =>{  
   
    return (       
        // aqui dentro vamos colocar nosso JSX
        <div className={style.Content}> 
            <h1>Bem vindo a pagina home </h1>
        </div>        
    )
}
// aqui estamos exportando nosso componente
