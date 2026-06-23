import { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Header.module.css";
import { Banner } from "../Banner";
import { LanguageSwitcher } from "../LanguageSwitcher";

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { t } = useTranslation();

    const closeMenu = () => setMenuOpen(false);

    return (
        <header className={styles.header}>
            <Banner />
            <nav className={styles.navbar}>
                <div className={styles.container}>

                    <div className={styles.logo}>
                        <div className={styles.logoName}>AgroMed Science</div>
                        <div className={styles.logoSub}>
                            {t("components.header.logoSub")}
                        </div>
                    </div>

                    <ul className={styles.nav}>
                        <li><a href="/">{t("components.header.nav.home")}</a></li>
                        <li className={styles.active}><a href="/articles">{t("components.header.nav.articles")}</a></li>
                        <li><a href="/issues">{t("components.header.nav.issues")}</a></li>
                        <li><a href="/topics">{t("components.header.nav.topics")}</a></li>
                        <li><a href="/authors">{t("components.header.nav.authors")}</a></li>
                        <li><a href="/about">{t("components.header.nav.about")}</a></li>
                    </ul>

                    <div className={styles.search}>
                        🔍
                        <input type="text" placeholder={t("components.header.search.placeholder")} />
                    </div>

                    <div className={styles.desktopLangSwitcher}>
                        <LanguageSwitcher />
                    </div>

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

            {menuOpen && (
                <ul className={styles.mobileMenu}>
                    <li><a href="#" onClick={closeMenu}>{t("components.header.nav.home")}</a></li>
                    <li className={styles.active}>
                        <a href="#" onClick={closeMenu}>{t("components.header.nav.articles")}</a>
                    </li>
                    <li><a href="#" onClick={closeMenu}>{t("components.header.nav.issues")}</a></li>
                    <li><a href="#" onClick={closeMenu}>{t("components.header.nav.topics")}</a></li>
                    <li><a href="#" onClick={closeMenu}>{t("components.header.nav.authors")}</a></li>
                    <li><a href="#" onClick={closeMenu}>{t("components.header.nav.about")}</a></li>

                    <li className={styles.mobileSearch}>
                        🔍
                        <input type="text" placeholder={t("components.header.search.placeholder")} />
                    </li>

                    <li className={styles.mobileLang}>
                        <LanguageSwitcher mobile onSelect={closeMenu} />
                    </li>
                </ul>
            )}
        </header>
    );
};