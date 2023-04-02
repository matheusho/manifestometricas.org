import Image from 'next/image';
import styles from './authors.module.css';
import { Container } from './container';
import { Icon } from './icon';

export function Authors({ authors }) {
  return (
    <div className={styles.authors}>
      <Container customClass={styles.authors__container}>
        {authors.map(
          ({ name, avatarUrl, links, width = 120, height = 120 }, i) => (
            <div key={i} className={styles.authors__author}>
              <Image
                src={avatarUrl}
                width={width}
                height={height}
                alt={name}
                className={styles.authors__avatar}
              />
              <h3 className={styles.authors__name}>{name}</h3>
              <ul className={styles.authors__links}>
                {links?.map((link, k) => (
                  <li key={k} className={styles['authors__links-li']}>
                    <a
                      href={link.href}
                      title={`${link.type} ${name}`}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <Icon name={link.type} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ),
        )}
      </Container>
    </div>
  );
}
