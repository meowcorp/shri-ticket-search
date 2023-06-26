import styles from "./Badge.module.css";

export default function Badge({ value }: { value: string | number }) {
  return (
    <div className={styles.badge}>
      <span className={styles.badge__value}>{value}</span>
    </div>
  );
}
