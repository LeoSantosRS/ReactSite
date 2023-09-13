// importando estilização do botão
import style from './Header.module.css'
import  { styles } from './styles'
import { icons } from '../../icons/icons'
import { ButtonActionMini } from '../../buttons/actionMini/ButtonActionMini'
import { Menu } from '../Menu/Menu'
import { ItemMenu } from '../Menu/ItemMenu'
import { ButtonMenu } from '../../buttons/buttonMenu/ButtonMenu'

export const Header = () =>{  
  
  const handleFoneClick = () => {
    alert('Fone');
  }

  const handleFacebookClick = () => {
    alert('Facebook');
  }

  const handleInstagramClick = () => {
    alert('Instagram');
  }

  const handleWhatsAppClick = () => {
    alert('WhatsApp');
  }

  const handleYoutubeClick = () => {
    alert('Youtube');
  }

  const handleClickMenu = () => {
    alert('Menu');
  }




  
  return (       
    // aqui dentro vamos colocar nosso JSX 
    <div className={style.Container}>
      <div className={style.SocialMediasArea}>
        <ButtonActionMini icon={icons.iconYoutube} click={handleYoutubeClick}/>
        <ButtonActionMini icon={icons.iconInstagram} click={handleInstagramClick}/>
        <ButtonActionMini icon={icons.iconFacebook} click={handleFacebookClick}/>
        <ButtonActionMini icon={icons.iconWhatsApp} click={handleWhatsAppClick}/>
        <ButtonActionMini icon={icons.iconFone} click={handleFoneClick}/>
      </div>
      <div className={style.BussinessLogoArea}>
        <img className={style.BussinessLogo} src={icons.BussinessLogo} alt=''></img>
      </div>
      <div className={style.MenuBackGroundArea}>
        
      </div>
      <div className={style.MenuArea}>
        <div className={style.MenuButtonArea}>
          <ButtonMenu  click={handleClickMenu}/> 
        </div>
        <div className={style.MenuItensArea}>
          <Menu /> 
        </div>        
      </div>
      <div className={style.ImgArea}>
        <img className={style.Img} src={icons.BackgroudHeader} alt=''></img>   
      </div>     
    </div>    
                 
  )
}


