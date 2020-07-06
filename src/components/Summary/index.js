import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const Summary = ({ summary }) => {
  return (
    <div className={styles.summary}>
      <h4>{summary}</h4>
    </div>
  );
};
export default memo(Summary);

Summary.propTypes = {
  summary: PropTypes.string.isRequired,
};
