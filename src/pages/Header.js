import { Link } from "react-router-dom"
import { SIGNINUP_PATH } from "../constants/routes"
import styles from './Header.module.css'
export const Header = () =>{
    return (
        <header className={styles.header}>
        <span className={styles.white}>Logo </span>
            <nav>
                <Link className={styles.white} to={SIGNINUP_PATH}>Log out</Link>
            </nav>
        </header>
    )
}