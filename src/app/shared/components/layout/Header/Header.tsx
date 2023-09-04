// importando estilização do botão
import style from './Modelo.module.css'
import  { styles } from './styles'
import { icons } from '../../icons/icons'

export const Header = () =>{  
  return (       
    // aqui dentro vamos colocar nosso JSX     
    <div style={styles.container}>
      <div style={ styles.HeaderContent}>
        <div style={styles.ImgArea}>
          <img style={styles.img} src={icons.BackgroudHeader}></img>
        </div>
        <div style={styles.menuArea} >

        </div>  
      </div> 
    </div>                
  )
}


