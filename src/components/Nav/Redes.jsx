import linkedin from "../../assets/linkedin.svg";
import instagram from "../../assets/instagram.svg";
import github from "../../assets/github.svg";
import youtube from "../../assets/youtube.svg";
import luna from "../../assets/luna.svg";
import sol from "../../assets/sol.svg";
import styles from "../Nav/Redes.module.css";
const Redes = () => {
  return (
    <div className={styles.Redes}>
     

      <a target="_blank" href="https://github.com/rdiaz-2022178 ">
        <img src={github} alt="logo de github" />
      </a>

      <a
        target="_blank"
        href="https://www.youtube.com/watch?v=S_XApOJe9Fo"
      >
        <img src={youtube} alt="logo de youtube" />
      </a>

      <a target="_blank" href="https://www.instagram.com/rodrigo.edg/">
        <img src={instagram} alt="logo de instagram" />
      </a>

     
    </div>
  );
};

export default Redes;
