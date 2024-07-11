import styles from '../Inicio/inicio.module.css'
import Botones from './Botones/Botones';
import Animacion from './animacion/Animacion';
import FullStack from './FullStack/FullStack'
const Inicio = () => {
    return(
      <section className={styles.Home}>
        <div className={styles.full}>
        <FullStack/> 
        </div> 

        <div className={styles.btnAndName}>
          <span>Rodrigo Emmanuel Díaz García</span> 
          <Botones/>
        </div>
           
        
          <Animacion/>  
      </section>
    )
}

export default Inicio;