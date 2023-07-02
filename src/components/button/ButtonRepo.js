import styles from "./ButtonRepo.module.css"

function ButtonRepo({text, link}){
    return (
        <div>
            <a href={link} target="__blank">
                <button className={styles.general}>{text}</button>
            </a>
        </div>
    )
}

export default ButtonRepo