import styles from "./container.module.css";

export function Container({ customClass, children }) {
  return (
    <div className={`${styles.container} ${customClass ?? customClass}`}>
      {children}
    </div>
  );
}
