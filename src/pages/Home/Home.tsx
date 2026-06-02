import styles from "./Home.module.css";
import {TickerBar} from "../../widgets/TickerBar";
import {useEffect} from "react";
import {Seo} from "../../components/Seo";
import HeroSection from "./HeroSection/HeroSection.tsx";


export const Home = () => {
    useEffect(() => {
        document.title = "AgroMed Science — Open Access Journal";
    }, []);
    return (
        <div className={styles.container}>
            <Seo
                title="AgroMed Science"
                description="Open access agricultural and medical research journal"/>
            <TickerBar/>
            <HeroSection/>
        </div>
    );
};