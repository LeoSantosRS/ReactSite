// importando estilização do botão
import style from './Menu.module.css'

interface IItemMenu {
  click: () => void;
  nome: string;  
}
export const ItemMenu: React.FC <IItemMenu> = (props: IItemMenu) => {  

  return (       
    // aqui dentro vamos colocar nosso JSX     
    <div className={style.ItemMenuContent} onClick={props.click}>
        <span>{props.nome}</span>  
    </div>                
  )
}


