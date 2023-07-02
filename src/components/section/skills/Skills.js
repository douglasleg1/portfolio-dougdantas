import styles from "./Skills.module.css"
import jsLogo from "../../../assets/img/jslogo.svg"
import cssLogo from "../../../assets/img/csslogo.svg"
import reactLogo from "../../../assets/img/reactlogo.svg"
import html5Logo from "../../../assets/img/html5logo.svg"
import tsLogo from "../../../assets/img/typescriptlogo.svg"

function Skills(){
    return (
        <div className={styles.general} id="Skills">
            <h1>Habilidades</h1>
            <h3>Conheça um pouco das minhas principais habilidades e conhecimentos.</h3>
            <ul>
                <li><img src={jsLogo} alt=""></img></li>
                <li><img src={html5Logo} alt=""></img></li>
                <li><img src={cssLogo} alt=""></img></li>
                <li><img src={reactLogo} alt=""></img></li>
                <li><img src={tsLogo} alt=""></img></li>
            </ul>

        </div>
    )
}

export default Skills