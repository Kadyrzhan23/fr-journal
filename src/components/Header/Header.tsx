import styles from "./Header.module.css";
import {Banner} from "../Banner";

export const Header = () => {
    return (
        <header className={styles.header}>
            <Banner/>
            {/* NAVBAR */}
            <nav className={styles.navbar}>
                <div className={styles.container}>

                    <div className={styles.logo}>
                        <div className={styles.logoName}>AgroMed Science</div>
                        <div className={styles.logoSub}>
                            Agricultural & Medical Research
                        </div>
                    </div>

                    <ul className={styles.nav}>
                        <li><a href="#">Home</a></li>
                        <li className={styles.active}><a href="#">Articles</a></li>
                        <li><a href="#">Issues</a></li>
                        <li><a href="#">Topics</a></li>
                        <li><a href="#">Authors</a></li>
                        <li><a href="#">About</a></li>
                    </ul>

                    <div className={styles.search}>
                        🔍
                        <input type="text" placeholder="Search articles, authors…" />
                    </div>

                </div>
            </nav>

        </header>
    );
};