// importando estilização do botão
import style from './Modelo.module.css'

interface IModelo {
  nome:String
}

export const Modelo: React.FC <IModelo> = (data) =>{  
  return (       
    // aqui dentro vamos colocar nosso JSX     
    <div className={style.ModeloContent}>
      
    </div>                
  )
}


