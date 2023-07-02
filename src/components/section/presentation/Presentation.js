import styles from "./Presentation.module.css"
import Button from "../../button/ButtonConnectMe"

function Presentation(){
    return (
        <div className={styles.general} id="Presentation">
            <p><strong>Bem vindo ao meu portfólio</strong></p>
            <h1>Olá, eu sou o Douglas Dantas!</h1>
            <p className={styles.spanPresentation}>
                Me chamo Douglas Dantas, sou desenvolvedor de software, <br/>
                apaixonado por tecnologia, sempre estudando tecnologias novas <br/>
                e aprendendo mais à cada dia. Atuo na área há 5 anos, atualmente <br/>
                trabalho de forma freelancer, desenvolvendo soluções de softwares <br/>
                para meus clientes.
            </p>
            <br/>
            <Button text="Conecte-se comigo!" link="https://www.linkedin.com/in/dougdantas/"/>
        </div>
    )
}

export default Presentation
