import React, { memo } from 'react';
import Author from '../Author';
import styles from './styles.module.css';

function Authors({ authors }) {
  return (
    <div className={styles.authorsContainer}>
      <h5>Authors </h5>
      <div className={styles.authors}>
        {authors.length > 0 &&
          authors.map((author, index) => (
            <Author author={author} key={index} />
          ))}
      </div>
    </div>
  );
}
export default memo(Authors);
