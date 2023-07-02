import styles from "./Projects.module.css"
import logoProject1 from "../../../assets/img/logoProject1.svg"
import logoProject2 from "../../../assets/img/logoProject2.svg"
import ButtonRepo from "../../button/ButtonRepo"

function Projects(){
    return(
        <>
        <div className={styles.general}>
            <div className={styles.titleSection}>
                <h1>Projetos</h1>
            </div>
            <div id="Projects" className={styles.subgeneral}>
                <div>
                    <div className={styles.projects}>
                        <img src={logoProject1} alt=""></img>
                        <div className={styles.aboutProjects}>
                            <h3>Projeto XPTO </h3>
                            <h4>Tecnologias: </h4>
                            <h5>HTML, CSS, JS - Projeto Front-End para realizar pipipi e popo.</h5>
                            <ButtonRepo text="Acesse o repositório"></ButtonRepo>
                        </div>
                    </div>
                    <div className={styles.projects}>
                        <img src={logoProject2} alt=""></img>
                        <div className={styles.aboutProjects}>
                            <h3>Projeto XPTO </h3>
                            <h4>Tecnologias: </h4>
                            <h5>HTML, CSS, JS - Projeto Front-End para realizar pipipi e popo.</h5>
                            <ButtonRepo text="Acesse o repositório"></ButtonRepo>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.allRepoButton}>
                <ButtonRepo text="Ver repositório completo" link="http://github.com/douglasleg1"/>
            </div>
        </div>
        </>
    )
}

export default Projects