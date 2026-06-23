import styles from "./Footer.module.css";
import { useTranslation } from "react-i18next";

export const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>

                <div className={styles.top}>

                    {/* BRAND */}
                    <div className={styles.brand}>
                        <div className={styles.name}>
                            AgroMed Science
                        </div>

                        <p className={styles.desc}>
                            {t("components.footer.brand.desc")}
                        </p>

                        <div className={styles.issn}>
                            ISSN 2181-7774 (Online) · ISSN 3060-5032 (Print)
                        </div>
                    </div>

                    {/* JOURNAL */}
                    <div>
                        <div className={styles.title}>
                            {t("components.footer.journal.title")}
                        </div>

                        <div className={styles.links}>
                            <a href="#">{t("components.footer.journal.about")}</a>
                            <a href="#">{t("components.footer.journal.editorialBoard")}</a>
                            <a href="#">{t("components.footer.journal.allIssues")}</a>
                            <a href="#">{t("components.footer.journal.indexing")}</a>
                        </div>
                    </div>

                    {/* AUTHORS */}
                    <div>
                        <div className={styles.title}>
                            {t("components.footer.authors.title")}
                        </div>

                        <div className={styles.links}>
                            <a href="#">{t("components.footer.authors.submit")}</a>
                            <a href="#">{t("components.footer.authors.guidelines")}</a>
                            <a href="#">{t("components.footer.authors.peerReview")}</a>
                            <a href="#">{t("components.footer.authors.copyright")}</a>
                        </div>
                    </div>

                    {/* INFO */}
                    <div>
                        <div className={styles.title}>
                            {t("components.footer.info.title")}
                        </div>

                        <div className={styles.links}>
                            <a href="#">{t("components.footer.info.contact")}</a>
                            <a href="#">{t("components.footer.info.privacy")}</a>
                            <a href="#">{t("components.footer.info.terms")}</a>
                        </div>
                    </div>

                </div>

                {/* BOTTOM */}
                <div className={styles.bottom}>
                    <span>{t("components.footer.bottom.rights")}</span>
                    <span>{t("components.footer.bottom.license")}</span>
                </div>

            </div>
        </footer>
    );
};