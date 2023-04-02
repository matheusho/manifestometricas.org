import Image from "next/image";

import { authors } from "../../data/authors";
import { Icon } from "./icon";
import { Container } from "./container";
import styles from "./authors.module.css";

export function Authors() {
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
                {links?.map((link, i) => (
                  <li
                    key={i.toString()}
                    className={styles["authors__links-li"]}
                  >
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
          )
        )}
      </Container>
    </div>
  );
}
