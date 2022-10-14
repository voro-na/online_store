import styles from './header.module.css'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className={styles.h}>
            <Link to='/catalog' className={styles.logo}>QPICK</Link>
            <a href='' className="link _icon-like"></a>
            <Link to='/cart' className="link _icon-basket"/>
        </div>
    )
}
export default Header