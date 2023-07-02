import styles from "./ButtonConnectMe.module.css"

function ButtonConnectMe({text, link}){
    return (
        <div>
            <a href={link} target="__blank">
                <button className={styles.general}>{ text } </button>
            </a>
        </div>
    )
}

export default ButtonConnectMe