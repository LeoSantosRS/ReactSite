// importando estilização do componente
import style from './ButtonActionMini.module.css'

import React from 'react'

interface IButtonActionMini {
    click: () => void
    icon: string
}

export const ButtonActionMini: React.FC <IButtonActionMini> = (props) =>{     
    function click (){
        props.click()
    }
    return (       
        <button type="button" className={style.ActionMiniContent} onClick={click}>
            <img src={props.icon} alt = ""></img>            
        </button>            
    )
}
// aqui estamos exportando nosso componente
