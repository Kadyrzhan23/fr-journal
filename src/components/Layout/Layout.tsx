import styles from "./Layout.module.css";
import { Header } from "../Header";
import { Footer } from "../Footer";
import * as React from "react";

interface Props {
    children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
    return (
        <div className={styles.container}>
            <Header />

            <main className={styles.content}>
                {children}
            </main>

            <Footer />
        </div>
    );
};