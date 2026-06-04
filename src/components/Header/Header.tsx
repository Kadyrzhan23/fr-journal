import { useState } from "react";
import styles from "./Header.module.css";
import { Banner } from "../Banner";

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    return (
        <header className={styles.header}>
            <Banner />
            <nav className={styles.navbar}>
                <div className={styles.container}>

                    <div className={styles.logo}>
                        <div className={styles.logoName}>AgroMed Science</div>
                        <div className={styles.logoSub}>
                            Agricultural & Medical Research
                        </div>
                    </div>

                    {/* Desktop nav */}
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

                    {/* Burger button */}
                    <button
                        className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ""}`}
                        onClick={() => setMenuOpen(prev => !prev)}
                        aria-label="Toggle menu"
                    >
                        <span />
                        <span />
                        <span />
                    </button>

                </div>
            </nav>

            {/* Mobile dropdown menu */}
            {menuOpen && (
                <ul className={styles.mobileMenu}>
                    <li><a href="#" onClick={closeMenu}>Home</a></li>
                    <li className={styles.active}><a href="#" onClick={closeMenu}>Articles</a></li>
                    <li><a href="#" onClick={closeMenu}>Issues</a></li>
                    <li><a href="#" onClick={closeMenu}>Topics</a></li>
                    <li><a href="#" onClick={closeMenu}>Authors</a></li>
                    <li><a href="#" onClick={closeMenu}>About</a></li>
                    <li className={styles.mobileSearch}>
                        🔍
                        <input type="text" placeholder="Search articles, authors…" />
                    </li>
                </ul>
            )}
        </header>
    );
};