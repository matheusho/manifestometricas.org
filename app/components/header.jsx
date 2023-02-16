import styles from './header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <h1 className={styles.header__title}>
          Manifesto<span className={styles['header__title--span']}>Métricas</span>
        </h1>
      </div>
    </header>
  )
}
