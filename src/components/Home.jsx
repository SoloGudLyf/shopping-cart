import {Link} from "react-router"
import styles from "../styles/Home.module.css"

export function Homepage(){
    return <div className={styles.container}>
        <div className={styles.navBar}><span>Logo</span><span>
            <Link to="/">Home</Link><Link>Shop</Link>
            <Link>Cart</Link>
        </span></div>
        <div className={styles.content}><h1>Welcome to my shopping page</h1></div>
        <div className={styles.footer}></div>
    </div>
}