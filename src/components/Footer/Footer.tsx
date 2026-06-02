import styles from "./Footer.module.css";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>

                <div className={styles.top}>

                    {/* BRAND */}
                    <div className={styles.brand}>
                        <div className={styles.name}>AgroMed Science</div>
                        <p className={styles.desc}>
                            International peer-reviewed open access journal dedicated to
                            agricultural and medical sciences.
                        </p>
                        <div className={styles.issn}>
                            ISSN 2790-XXXX (Online) · ISSN 2790-YYYY (Print)
                        </div>
                    </div>

                    {/* JOURNAL */}
                    <div>
                        <div className={styles.title}>Journal</div>
                        <div className={styles.links}>
                            <a href="#">About</a>
                            <a href="#">Editorial Board</a>
                            <a href="#">All Issues</a>
                            <a href="#">Indexing</a>
                        </div>
                    </div>

                    {/* AUTHORS */}
                    <div>
                        <div className={styles.title}>Authors</div>
                        <div className={styles.links}>
                            <a href="#">Submit</a>
                            <a href="#">Guidelines</a>
                            <a href="#">Peer Review</a>
                            <a href="#">Copyright</a>
                        </div>
                    </div>

                    {/* INFO */}
                    <div>
                        <div className={styles.title}>Info</div>
                        <div className={styles.links}>
                            <a href="#">Contact</a>
                            <a href="#">Privacy</a>
                            <a href="#">Terms</a>
                        </div>
                    </div>

                </div>

                {/* BOTTOM */}
                <div className={styles.bottom}>
                    <span>© 2026 AgroMed Science. Tashkent, Uzbekistan.</span>
                    <span>All content CC BY 4.0</span>
                </div>

            </div>
        </footer>
    );
};

