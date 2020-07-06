import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Block from '../Block';
import styles from './styles.module.css';

const Blocks = ({ blocks }) => {
  return (
    <div className={styles.authorsContainer}>
      <div className={styles.authors}>
        {blocks.length > 0 &&
          blocks.map((block, index) => <Block block={block} key={index} />)}
      </div>
    </div>
  );
};
export default memo(Blocks);

Blocks.propTypes = {
  blocks: PropTypes.arrayOf(
    PropTypes.shape({
      block: PropTypes.shape({
        content: PropTypes.any.isRequired,
      }),
    }).isRequired
  ).isRequired,
};
