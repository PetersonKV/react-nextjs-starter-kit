import styles from './Subtlitle.module.css';

function Subtitulo ({children}) {
  return(
    <h1 className= {styles.subtitulo}> {children} </h1>
  )
} 

export default Subtitulo;