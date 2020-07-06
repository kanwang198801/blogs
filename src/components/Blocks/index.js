import React, { memo } from 'react';
import Block from '../Block';
import styles from './styles.module.css';

function Blocks({ blocks }) {
  return (
    <div className={styles.authorsContainer}>
      <div className={styles.authors}>
        {/* {blocks.length > 0 &&
          blocks.map((block, index) => <Block block={block} key={index} />)} */}
      </div>
    </div>
  );
}
export default memo(Blocks);
