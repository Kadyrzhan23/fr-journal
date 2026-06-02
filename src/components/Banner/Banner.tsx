import styles from "./Banner.module.css";

export const Banner = () => {
    return (
        <div className={styles.topBanner}>
            <div className={styles.container}>
        <span>
          AgroMed Science — Open Access · Peer Reviewed · Tashkent,
          Uzbekistan
        </span>

                <div className={styles.links}>
                    <a href="#">Submit Manuscript</a>
                    <a href="#">Editorial Board</a>
                    <a href="#">Login</a>
                </div>
            </div>
        </div>
    );
};

