import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Author from '../Author';
import styles from './styles.module.css';

const Authors = ({ authors }) => {
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
};
export default memo(Authors);

Authors.propTypes = {
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      imageList: PropTypes.object.isRequired,
    }).isRequired
  ),
};
