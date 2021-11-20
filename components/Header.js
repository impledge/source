import styles from "../styles/Home.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className="max-w-7xl pt-2 mx-auto px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className={styles.header_title}>
          <span className="text-white">
            Source<span className="text-white"> Project</span>
          </span>
        </h2>
      </div>
    </div>
  );
}
