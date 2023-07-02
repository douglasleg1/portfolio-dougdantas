import styles from "./Navbar.module.css"
import { FaInstagram } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import Nav from "react-bootstrap/Nav"

function Navbar(){
    return (
        <section className={styles.general}>
            <ul>
                <li><Nav.Link href="#Presentation">Apresentação</Nav.Link></li>
                <li><Nav.Link href="#Skills">Habilidades</Nav.Link></li>
                <li><Nav.Link href="#Projects">Projetos</Nav.Link></li>
            </ul>

            <ul>
                <li><a href="http://instagram.com/dougdantas_" target="__blank"><FaInstagram size={30} /></a></li>
                <li><a href="http://github.com/douglasleg1" target="__blank"><FaGithub size={30}/></a></li>
                <li><a href="https://www.linkedin.com/in/dougdantas/" target="__blank"><FaLinkedin size={30}/></a></li>
            </ul>

        </section>
    )
}

export default Navbar