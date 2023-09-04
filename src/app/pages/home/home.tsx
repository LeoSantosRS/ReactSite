import style from './home.module.css'
// Importando Componentes
import { Header } from '../../shared/components/layout/Header/Header'


export const Home = () =>{  
   
    return (       
        // aqui dentro vamos colocar nosso JSX
        <div className={style.Content}>             
            <Header />
        </div>        
    )
}
// aqui estamos exportando nosso componente
