import { useTranslation } from "react-i18next";
import styles from "./Banner.module.css";

export const Banner = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.topBanner}>
            <div className={styles.container}>
                <span>{t("components.banner.tagline")}</span>

                <div className={styles.links}>
                    <a href="#">{t("components.banner.submit")}</a>
                    <a href="#">{t("components.banner.editorial")}</a>
                    <a href="#">{t("components.banner.login")}</a>
                </div>
            </div>
        </div>
    );
};