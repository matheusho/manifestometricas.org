import { Container } from './container';

import styles from './mission.module.css';

export function Mission() {
  return (
    <section className={styles.mission}>
      <Container>
        <h2 className={styles.mission__title}>
          Simplificar e desmistificar o tema Métricas em times ágeis
        </h2>
      </Container>
    </section>
  );
}
