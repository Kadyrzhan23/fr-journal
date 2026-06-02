import styles from "./Home.module.css";
import {TickerBar} from "../../widgets/TickerBar";


export const Home = () => {
    return (
        <div className={styles.container}>
            <TickerBar/>
        </div>
    );
};