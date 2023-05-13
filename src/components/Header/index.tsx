import styles from "./styles.module.css";
import imageLogo from "../../assets/img/Logo.png";

export function Header () {
    return(
        <div className={styles.header}>
            <img src={imageLogo} alt="" />
        </div>
    );
}