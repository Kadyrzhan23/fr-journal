import styles from "./TickerBar.module.css";

const popularPosts = [
    { _id: "1", title: "Phytoremediation of Heavy Metals in Irrigated Agroecosystems" },
    { _id: "2", title: "CRISPR Applications in Drought-Resistant Crop Development" },
    { _id: "3", title: "Antibiotic Resistance Patterns in Rural Uzbekistan Populations" },
];

export const TickerBar = () => {
    // дублируем для бесшовного зацикливания
    const looped = [...popularPosts, ...popularPosts];

    return (
        <div className={styles.tickerBar}>
            <div className={styles.container}>
                <span className={styles.label}>Latest</span>

                <div className={styles.viewport}>
                    <div className={styles.track}>
                        {looped.map(({ _id, title }, index) => (
                            <span className={styles.item} key={_id + "-" + index}>
                <span className={styles.new}>NEW</span>
                                {title}
              </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};