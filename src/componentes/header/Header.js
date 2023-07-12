import styles from './Header.module.css';
import Title from '../title/Title';
import Subtitulo from '../subtlitle/Subtitulo';
import Icon from '../icon/Icon';


function Header (){
  return(
    <div className= {styles.header}>
      <Title>Jogo da velha </Title>
      <Subtitulo> Criado por Peterson </Subtitulo>
      <div className = {styles.iconContent}>
        <Icon iconNaeme = "github" link="http://github.com"/>
      </div>
    </div>
   
  )
}
export default Header;