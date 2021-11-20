import styles from '../styles/Home.module.css';

export default function SafeAreaContainer({children}) {
    return (
        <div className={styles.body_container}>
            {children}
        </div>
    )
};