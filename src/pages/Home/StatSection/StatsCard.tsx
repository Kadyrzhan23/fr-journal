import styles from './StatSection.module.css';

interface Props {
    value: string | number;
    title: string;
    description: string;
}

export const StatsCard = ({
                              value,
                              title,
                              description,
                          }: Props) => {
    return (
        <article className={styles.card}>
            <div className={styles.value}>{value}</div>

            <h3 className={styles.title}>
                {title}
            </h3>

            <p className={styles.description}>
                {description}
            </p>
        </article>
    );
};