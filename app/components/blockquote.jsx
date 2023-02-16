import { Container } from './container'

import styles from './blockquote.module.css'

export function Blockquote() {
  return (
    <section className={styles.blockquote}>
      <Container customClass={styles.container}>
        <blockquote className={styles.blockquote__quote}>
          <p className={styles.blockquote__quote__p}>
            Se medir importa, é porque deve ter algum efeito prático nas decisões e nos comportamentos. Se não conseguirmos identificar uma decisão que possa ser afetada por uma métrica proposta e como ela pode influenciar as decisões, então a métrica simplesmente não tem valor.
          </p>
          <i className={styles.blockquote__quote__i}>- Douglas W. Hubbard, How to Measure Anything</i>
        </blockquote>
      </Container>
    </section>
  )
}
