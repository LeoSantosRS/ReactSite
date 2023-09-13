// importando estilização do componente
import style from './ButtonMenu.module.css'
import React from 'react'
import { icons } from '../../icons/icons'

interface IButtonMenu {
    click: () => void    
}

export const ButtonMenu: React.FC <IButtonMenu> = (props) =>{     
    function click (){
        props.click()
    }
    return (       
        <button type="button" className={style.Content} onClick={click}>
            <img src={icons.iconMenu} alt = ""></img>            
        </button>            
    )
}
// aqui estamos exportando nosso componente
