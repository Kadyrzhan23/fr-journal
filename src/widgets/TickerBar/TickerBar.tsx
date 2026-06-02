import styles from "./TickerBar.module.css";

export const TickerBar = () => {
    return (
        <div className={styles.tickerBar}>
            <div className={styles.container}>
                <span className={styles.label}>Latest</span>

                <div className={styles.items}>
          <span className={styles.item}>
            <span>NEW</span> Phytoremediation of Heavy Metals in Irrigated Agroecosystems
          </span>

                    <span className={styles.item}>
            <span>NEW</span> CRISPR Applications in Drought-Resistant Crop Development
          </span>

                    <span className={styles.item}>
            <span>NEW</span> Antibiotic Resistance Patterns in Rural Uzbekistan Populations
          </span>
                </div>
            </div>
        </div>
    );
};