import styles from "../Proyectos/Proyectos.module.css";
import logo1 from "../../assets/react.svg";
import logo2 from "../../assets/html.svg";
import logo3 from "../../assets/sass.svg";
import logo4 from "../../assets/js.svg";
import logo5 from "../../assets/css.svg";
import logo7 from "../../assets/node.svg";
import logo8 from "../../assets/psql.svg";
import github from "../../assets/github.svg";
import page from "../../assets/url.svg";
import code from "../../assets/code.svg";
import web from "../../assets/web.svg";
import desing from "../../assets/desing.svg";
import logo11 from "../../assets/tailwind.svg";
import express from "../../assets/express.svg";
import youtube from "../../assets/youtube.svg";
import voto from "../../assets/voto.png"
import ahorcado from "../../assets/Ahorcado.png"
import tonys from "../../assets/Tonys.png"
import kinal from "../../assets/Kinal.png"
import web1 from "../../assets/web1.png"
import servd from "../../assets/servd.png"
import paginas from "../../assets/paginas.png"
import hotel from "../../assets/hotel.png"



const Proyectos = () => {
  const tarjetas = [
    {
      image: [voto],
      name: "MiVoto",
      descrip:
        "Software para manejo de vataciones a nivel nacional",
      tecno: [logo1, logo2,  logo4, logo7],
      url: "https://github.com/Coffee-Code-2024/sistema-votaciones",
      urlGithub: "https://github.com/MINOTAURO18/MundoDev",
    },

    {
      image: [kinal],
      name: "Kinal",
      descrip: "Software para información de kinal (copia KinalAcademy)",
      tecno: [logo2, logo5, logo4],
      urlGithub: "https://github.com/rdiaz-2022178/COPEREX.git"
    },
    {
      image: [tonys],
      name: "TonysKinal",
      descrip: "Software para manejo de una cafeteria",
      tecno: [logo2, logo5, logo7 ],
      urlGithub: "https://github.com/rdiaz-2022178/TonysKinal2023"
    },
    {
      image: [ahorcado],
      name: "Ahorcado",
      descrip:
        "Juego de Ahorcado.",
      tecno: [logo2, logo5, logo4],
      urlGithub: "https://github.com/rdiaz-2022178/AhorcadoSexto"
    },

    
    {
      image: [web1],
      name: "Web portafolio",
      descrip: "portafolio de programador 1.0.",
      tecno: [logo2, logo5,  logo4],
      urlGithub: "https://github.com/rdiaz-2022178/Blog-React"
    },
    
    {
      image: [servd],
      name: "Serv",
      descrip: "Sistema integrado para manejo de empresa de servicios",
      tecno: [logo2, logo5],
      urlGithub: "https://github.com/caltan-2019176/ServD"
    },
    
    {
      image: [hotel],
      name: "Hotel manager",
      descrip: "Software web para manejo de hoteles",
      tecno: [logo1, logo5],
      urlGithub: "https://github.com/Grupo-7-IN6AM/ZaruTraveling"
    },
    {
      image: [paginas],
      name: "Paginas web",
      descrip: "Paginas para ver mi nivel de programacion.",
      tecno: [logo2, logo4],
      urlGithub: "https://github.com/rdiaz-2022178/paginasSexto"
    },

    
  ];

  return (
    <section className={styles.Proyectos}>
      <div className={styles.servicios}>
        <h2>Tecnologias</h2>
        <div className={styles.habi}>
          <div>
            <img src={logo2} alt="logo html" />
            <h5>HTML</h5>
          </div>

          <div>
            <img src={logo5} alt="logo css" />
            <h5>CSS</h5>
          </div>
         
          <div>
            <img src={logo4} alt="logo js" />
            <h5>JAVASCRIPT</h5>
          </div>

          <div>
            <img src={logo7} alt="logo node" />
            <h5>NODE</h5>
          </div>

          <div>
            <img src={express} alt="logo express" />
            <h5>EXPRESS</h5>
          </div>

          <div>
            <img src={logo1} alt="logo react" />
            <h5>REACT</h5>
          </div>

          <div>
            <img src={logo8} alt="logo" />
            <h5>PostgreSQL</h5>
          </div>

        </div>

        <div>
          <h2 className={styles.h2S}>Servicios</h2>
          <div className={styles.metodo}>
            <div>
              <img src={code} alt="imagen code" />
              <p>
                Desarrollador de sistemas empresariales
              </p>
            </div>

            <div>
              <img src={web} alt="imagen web" />
              <p>Cualquiero proyecto que necesites, lo construyo</p>
            </div>

            <div>
              <img src={desing} alt="imagen desing" />
              <p>diseños medio bonitos y responsives</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.cards}>
        {tarjetas.map((card, index) => {
          return (
            <div className={styles.card} key={index}>
              <div className={styles.image}>
                <img src={card.image[0]} alt={`imagen de ${card.name}`} />
              </div>

              <h3>{card.name}</h3>

              <span className={styles.descrip}>
                <p></p>
                {card.descrip}
              </span>

              <div className={styles.tecno}>
                <img src={card.tecno[0]} />
                <img src={card.tecno[1]} />
                <img src={card.tecno[2]} />
                <img src={card.tecno[3]} />
              </div>

              <div className={styles.btns}>
                <div>
                  <a target="_blank" href={card.urlGithub}>
                    <img src={github} alt="" />
                  </a>
                </div>
                <div>
                  <a target="_blank" href={card.url}>
                    <img src={page} alt="" />
                  </a>
                </div>

                {card.youtube == true ? (
                  <div>
                    <a target="_black" href={card.youtubeUrl}>
                      <img src={youtube} alt="" />
                    </a>
                  </div>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Proyectos;
