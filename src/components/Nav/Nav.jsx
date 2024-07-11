import { Link } from "react-router-dom";
import Redes from "./Redes";
import Styles from '../Nav/Nav.module.css';
import inicio from '../../assets/Inicio.svg'
import proyectos from '../../assets/proyectos.svg'
import sobremi from '../../assets/sobremi.svg'



const Nav = () => {


  
    return(
        <header className={Styles.header}> 
            
            <span className={Styles.logo}>rodroEDG</span> 

          <nav className={Styles.nav}>
            <Link to='/'><span>H</span>ome</Link>
            <Link to='/proyectos'><span>P</span>rojects</Link>
            <Link to='/sobremi'><span>A</span>bout<span>-</span>Me</Link>
          </nav>

          <nav className={Styles.nav_mobile}>
            <Link to='/'>
              <img src={inicio} alt="logo del inicio" />
            </Link>
            <Link to='/proyectos'>
              <img src={proyectos} alt="" />
            </Link>
            <Link to='/sobremi'>
            <img src={sobremi} alt="" />
            </Link>
          </nav>

            <Redes/>

        </header>
    )
}

export default Nav;