import styles from "./Footer.module.css"
import { FaInstagram } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"

function Footer(){
    return (
        <div className={styles.general}>
            <div className={styles.icons}>
                <ul>
                    <li><a href="http://instagram.com/dougdantas_" target="__blank"><FaInstagram size={30} /></a></li>
                    <li><a href="http://github.com/douglasleg1" target="__blank"><FaGithub size={30}/></a></li>
                    <li><a href="https://www.linkedin.com/in/dougdantas/" target="__blank"><FaLinkedin size={30}/></a></li>
                </ul>
            </div>
            <div className={styles.infoAuthor}>
                <ul>
                    <li>doug.souda@gmail.com</li>
                    <li>Douglas Dantas © 2023</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer