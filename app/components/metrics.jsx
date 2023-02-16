import { Container } from './container'

import styles from './metrics.module.css'

export function Metrics() {
  return (
    <section className={styles.metrics}>
      <Container>
        <dl>
          <dt className={styles['metrics__list-item']}>
            Privilegie os resultados e as pessoas ao invés da matemática e dos cálculos.
          </dt>
          <dd className={styles['metrics__list-details']}>
            - Albino & Caco
          </dd>

          <dt className={styles['metrics__list-item']}>
            Você precisa contar uma história que te ajude a tomar decisões corretas e ações claras. Ter dados e métricas não é o suficiente!
          </dt>
          <dd className={styles['metrics__list-details']}>
            - Inspirado em Troy Magennis
          </dd>

          <dt className={styles['metrics__list-item']}>
            Dados servem como forma de gerar evolução e fazer as pessoas se sentirem melhores. Número sem contexto é só um dado.
          </dt>
          <dd className={styles['metrics__list-details']}>
            - Inspirado em Troy Magennis
          </dd>

          <dt className={styles['metrics__list-item']}>
            Você não faz previsões para dizer que está certo. Você faz previsões para identificar se está errado.
          </dt>
          <dd className={styles['metrics__list-details']}>
            - Troy Magennis
          </dd>

          <dt className={styles['metrics__list-item']}>
            Compare equipes com a perspectiva de evoluí-las.
          </dt>
          <dd className={styles['metrics__list-details']}>
            - Inspirado em Troy Magennis
          </dd>

          <dt className={styles['metrics__list-item']}>
            Invista energia em coletar métricas que ajudem as pessoas a tomarem melhores decisões.
          </dt>
          <dd className={styles['metrics__list-details']}>
            - Inspirado em Eric Ries, Lean Startup
          </dd>
        </dl>
      </Container>
    </section>
  )
}
