import styles from './header.module.css'
import logo from '../../assets/logo-to-do.svg'

export function Header(){
    return(
        <header className={styles.header}>
            <img src={logo} />
        </header>
    ) 
}