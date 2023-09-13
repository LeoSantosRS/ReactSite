// importando estilização do botão
import style from './Menu.module.css'
import { ButtonMenu } from '../../buttons/buttonMenu/ButtonMenu'
import { ItemMenu } from './ItemMenu';


export const Menu: React.FC = () => {  

  const handleHomeClick = () => {
    alert('Home');
  }

  const handleVendaClick = () => {
    alert('Venda');
  }

  const handleFinancieClick = () => {
    alert('Financie');
  }

  const handleProcuraClick = () => {
    alert('Procura');
  }

  const handleSobreClick = () => {
    alert('Sobre');
  }


  return (       
    // aqui dentro vamos colocar nosso JSX     
    <div className={style.MenuContent}>
      <ItemMenu click={handleHomeClick} nome='Home'/>
      <ItemMenu click={handleVendaClick} nome='Venda seu Carro'/>
      <ItemMenu click={handleFinancieClick} nome='Financie '/>
      <ItemMenu click={handleProcuraClick} nome='O que esta Procurando?'/>
      <ItemMenu click={handleSobreClick} nome='Sobre nos'/>
    </div>                
  )
}


