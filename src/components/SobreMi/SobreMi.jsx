import styles from '../SobreMi/SobreMi.module.css'
import img from '../../assets/yo1.jpeg'
import Animaciones from '../Animaciones/Animacion'
import { motion } from 'framer-motion'

const SobreMi = () => {
    return (
        <section className={styles.SobreMi}>
            <Animaciones />


            <article>


                <div class="card">

                    <div className={styles.img}>
                        <img src={img} alt="foto de rodro" />
                    </div>

                    <div className={styles.body}>
                        <p className={styles.text}>Hola mi nombre es <span>R</span>odigo <span>E</span>mmanuel <span>D</span>íaz <span>G</span>García. el mejor de los mejores en el mundo de la programación. Con una dedicación insuperable y un dominio excepcional de las tecnologías más avanzadas, me especializo en crear soluciones que no solo funcionan, sino que destacan por su innovación y eficiencia.
                        </p>
                        <div className={styles.footer}>



                        </div>
                    </div></div>

                <div className={styles.academico}>

                    <div className={styles.cards}>
                        <h1>Educación</h1>

                        <div className={styles.card}>
                            <h2>Kinal</h2>
                            <span>Perito en COmputación Informatica</span>
                        </div>
                        <div className={styles.card}>
                            <h2>Intecap</h2>
                            <span> AWS</span>
                        </div>
                        <div className={styles.card}>
                            <h2>Udemy</h2>
                            <span>Administración de servidores</span>
                        </div>

                        <div className={styles.card}>
                            <h2>Autodidacta</h2>
                            <span>en proceso</span>
                        </div>



                    </div>


                </div>
            </article>
        </section>
    )
}

export default SobreMi;